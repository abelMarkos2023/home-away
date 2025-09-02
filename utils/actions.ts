"use server";
import db from "./db";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { imageSchema, profileSchema,  propertySchema,  validateWithZodSchema } from "./schemas";
import { revalidatePath } from "next/cache";
import { ZodError } from "zod";
import z from 'zod'
import { uploadImage } from "./supabase";

export async function getCurrentUser() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  if (!user.privateMetadata?.hasProfile) {
    return redirect("/profile/create");
  }

  return user;
}

const errorLogger = (error: unknown) => {
  if (error instanceof Error) {
    console.error("Error:", error.message);
    return { message: error.message };
  } else {
    console.error("An unknown error occurred:", error);
    return { message: "An unknown error occurred" };
  }
}
//eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createProfile(prevState: any, formData: FormData) {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }
    console.log(user);
    const fields = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(fields, profileSchema);
    // Here you would typically send the data to your backend API
    // For demonstration, we will just return a success message
    // Here you can handle the validated fields, e.g., save to a database

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress || "",
        profileImage: user.imageUrl || "",
        username: validatedFields.username as string,
        lastName: validatedFields.lastName as string,
        firstName: validatedFields.firstName as string,
      //  ...validatedFields, // Spread the validated fields
      },
    });

    // await clerkClient.users.updateUserMetadtata(user.id, {
    //   hasProfile: true,
    // })

    const client = await clerkClient();

    client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    console.log("Validated Fields:", validatedFields);
  } catch (error) {
    return {
      message: `${
        error instanceof Error ? error.message : "An error occurred"
      }`,
    };
  }

  redirect("/");
}

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profileImage = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });

  return profileImage?.profileImage;
};

export const fetchProfile = async () => {
  try {
    const user = await getCurrentUser();

    const profile = await db.profile.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (!profile) {
      redirect("/profile/create");
    }

    return profile;
  } catch (error) {
    console.log("Error fetching profile:", error);
    return null;
  }
};

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateProfileAction = async (prevState:any,formData:FormData) : Promise<{ message: string }> => {

  try {
    const user = await getCurrentUser();
    const fields = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(fields, profileSchema);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedFields,
    });
    revalidatePath('/profile');
    return { message: 'Profile updated successfully' };
  } catch (error) {
    errorLogger(error);
    return {message : error instanceof Error ? error.message : "An error occurred"}
  }

  return { message: 'Failed to update profile' };

};

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateProfileImageAction = async (prevState: any,formData: FormData): Promise<{ message: string }> => {

  try {
    const user = await getCurrentUser();
    const file = formData.get('image') as File;

    if (!file) {
      throw new Error("No image file provided");
    }

    const validatedFile : z.infer<typeof imageSchema> = validateWithZodSchema({ image: file }, imageSchema);

    console.log(validatedFile)
    const imageUrl = await uploadImage(validatedFile.image);
    console.log('image url from supabase:', imageUrl);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        profileImage: imageUrl,
      },
    });

    revalidatePath('/profile');
    return { message: 'Profile image updated successfully' };
  } catch (error) {
    errorLogger(error);
    return { message:  "An error occurred" };
  }
};

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createdPropertyAction = async (prevState: any,formData: FormData): Promise<{ message: string }> => {

  try {
    const user = await getCurrentUser();
    const fields = Object.fromEntries(formData);
    const file = formData.get('image') as File;


    console.log(fields)

    const validatedFields = validateWithZodSchema(fields, propertySchema);
    const validatedFile = validateWithZodSchema({ image: file }, imageSchema);

    // if(!validatedFields || !validatedFile) throw new Error("Invalid property data");

    const fullImageUrl = await uploadImage(validatedFile.image);
    console.log('image url from supabase:', fullImageUrl);

    await db.property.create({
      data: {
        ...validatedFields,
        profileId: user.id,
        image: fullImageUrl,}
    })

    return {message: 'Property created successfully'};
  
  } catch (error) {
    console.log('an Error accured while creating property:', error);
    return errorLogger(error);
    
  }finally{
    redirect('/');
  }

 
}

export const fetchProperties = async ({
  search = '',
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const properties = await db.property.findMany({
    where: {
      category,
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { tagline: { contains: search, mode: 'insensitive' } },
      ],
    },
    select: {
      id: true,
      name: true,
      tagline: true,
      country: true,
      image: true,
      price: true,
    },
  });
  return properties;
};

export async function fetchFavoritId({propertyId}:{propertyId:string}){

  try {
    const user = await getCurrentUser();
     

    const property = await db.favorite.findFirst({
      where:{
        propertyId,
        profileId: user.id
      },
      select: {
        id: true
      }
    });



    return property?.id || null
  } catch (error) {
    console.log('Error: ', error)
  }
}

export const toggleFavoriteAction = async(prevState: {propertyId: string, favoriteId: string | null, pathname: string}) => {

  const {propertyId, favoriteId, pathname} = prevState;

  // console.log(propertyId, favoriteId, pathname)

  try{

    const user = await getCurrentUser();
    if(favoriteId){
      await db.favorite.delete({
        where: {
          id: favoriteId
        }
      })
    } else {
      await db.favorite.create({
        data: {
          propertyId,
          profileId: user.id
        }
      })
    }

    revalidatePath(pathname)

    return {message : `Favorite ${favoriteId ? 'removed' : 'added'} successfully`}

  }catch(error){
    console.log(error)
    return errorLogger(error)
  }

  
}

export const fetchFavorites = async() => {

  try {
    const user = await getCurrentUser();

    const favorites = await db.favorite.findMany({
      where: {
        profileId: user.id
      },
      select: {
        property: {
          select: {
            id: true,
            name: true,
            tagline: true,
            price: true,
            country: true,
            image: true,
          },
        },
      }
    });

    return favorites.map((favorite) => favorite.property);

  } catch (error) {
    errorLogger(error);
  }
}

export const fetchPropertyById = async({propertyId}:{propertyId:string}) => {

  try {
    const property = await db.property.findUnique({
      where: {
        id: propertyId
      },
      include:{
        profile: true
      }
    });

    return property;
  } catch (error) {
    errorLogger(error);
  }
}
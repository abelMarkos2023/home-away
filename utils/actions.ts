"use server";
import db from './db';
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { profileSchema } from "./schemas";

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createProfile(prevState: any, formData: FormData) {

   try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }
    console.log(user);
     const fields = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(fields);
    // Here you would typically send the data to your backend API
  // For demonstration, we will just return a success message
    // Here you can handle the validated fields, e.g., save to a database

    await db.profile.create({
      data:{
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress || '',
        profileImage: user.imageUrl || '',
        ...validatedFields, // Spread the validated fields
      }
    });

    // await clerkClient.users.updateUserMetadtata(user.id, {
    //   hasProfile: true,
    // }) 

    const client = await clerkClient()

  client.users.updateUserMetadata(user.id, {
     privateMetadata: {
       hasProfile: true,
     },
    })
     console.log("Validated Fields:", validatedFields);
     
   } catch (error) {
     return {
    message: `${error instanceof Error ? error.message : 'An error occurred'}`,
  };
   
}

redirect('/');

}

export const fetchProfileImage = async() => {
  const user = await currentUser();
  if (!user) return null;

  const profileImage = await db.profile.findUnique({
    where:{
      clerkId: user.id,
    },
    select:{
      profileImage: true,
    }
  })

  return profileImage?.profileImage;
}
import * as zod from 'zod';
import {ZodSchema} from 'zod';



export const validateWithZodSchema = <T>(data: unknown, schema: ZodSchema<T>) => {
    const result = schema.safeParse(data);

    if (!result.success) {
        const errors = result.error.issues.map((err) => err.message).join(", ");
        throw new Error(`Validation failed: ${errors}`);
       // return null;
    }
    return result.data;
}
export const imageSchema = zod.object({
  image: validateFile(),
});

export const profileSchema = zod.object({
    firstName: zod.string().min(3, 'First name must be greater than 3 characters'),
    lastName: zod.string().min(3, 'Last name must be greater than 3 characters'),
    username: zod.string().min(3, 'Username must be greater than 3 characters'),
})


function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ['image/'];
  return zod
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, `File size must be less than 1 MB`)
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, 'File must be an image');
}


export const propertySchema = zod.object({
  name: zod
    .string()
    .min(2, {
      message: 'name must be at least 2 characters.',
    })
    .max(100, {
      message: 'name must be less than 100 characters.',
    }),
  tagline: zod
    .string()
    .min(2, {
      message: 'tagline must be at least 2 characters.',
    })
    .max(100, {
      message: 'tagline must be less than 100 characters.',
    }),
 
  category: zod.string(),
  description: zod.string().refine(
    (description) => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'description must be between 10 and 1000 words.',
    }
  ),
  country: zod.string(),
  guests: zod.coerce.number().int().min(0, {
    message: 'guest amount must be a positive number.',
  }),
   price: zod.coerce.number().int().min(0, {
    message: 'price must be a positive number.',
  }),
  bedrooms: zod.coerce.number().int().min(0, {
    message: 'bedrooms amount must be a positive number.',
  }),
  beds: zod.coerce.number().int().min(0, {
    message: 'beds amount must be a positive number.',
  }),
  baths: zod.coerce.number().int().min(0, {
    message: 'bahts amount must be a positive number.',
  }),
  amenities: zod.string(),
});
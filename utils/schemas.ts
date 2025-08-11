import * as zod from 'zod';
import {ZodSchema} from 'zod';


export const profileSchema = zod.object({
    firstName: zod.string().min(3, 'First name is required'),
    lastName: zod.string().min(3, 'Last name is required'),
    username: zod.string().min(3, 'Username is required'),
})
// import {createClient} from '@supabase/supabase-js';


// const bucket = 'home-away'

// const supabaseUrl = process.env.SUPABASE_URL as string ;
// const supabaseKey = process.env.SUPABASE_KEY as string;

// const supabase = createClient(supabaseUrl, supabaseKey);

// export const uploadImage = async (file: File) => {  

    
//         const timestamp = Date.now();

//     const newname = `${timestamp}-${file.name}`;

//     const { data, error } = await supabase.storage.from(bucket).upload(newname, file, {
//         cacheControl: '3600',
        
//     });

//     if(error || !data) {
//         throw new Error(`Error uploading image: ${error.message}`);
//     }

//    return supabase.storage.from(bucket).getPublicUrl(newname).data.publicUrl;
    
// }

import { createClient } from '@supabase/supabase-js';

const bucket = 'home-away';
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadImage = async (file: File) => {
  try {
    const timestamp = Date.now();
    const newname = `public/${timestamp}-${file.name}`; // <- add 'public/'

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(newname, file, { cacheControl: '3600' });

    if (error || !data) {
      throw new Error(`Error uploading image: ${error.message}`);
    }

    const { data: urlData, error: urlError } = supabase.storage
      .from(bucket)
      .getPublicUrl(newname);

    if (urlError) {
      throw new Error(`Error getting public URL: ${urlError.message}`);
    }

    return urlData.publicUrl;
  } catch (err: any) {
    console.error(err);
    throw err;
  }
};
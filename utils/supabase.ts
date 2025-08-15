import {createClient} from '@supabase/supabase-js';


const bucket = 'home-away'

const supabaseUrl = process.env.SUPABASE_URL as string ;
const supabaseKey = process.env.SUPABASE_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadImage = async (file: File) => {  

    const timestamp = Date.now();

    const newname = `${timestamp}-${file.name}`;

    const { data, error } = await supabase.storage.from(bucket).upload(newname, file, {
        cacheControl: '3600',
        
    });

    if(error || !data) {
        throw new Error(`Error uploading image: ${error.message}`);
    }

   return supabase.storage.from(bucket).getPublicUrl(newname).data.publicUrl;
}
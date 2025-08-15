'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import  SubmitButton  from './SubmitButton';
import { type actionFunction } from '@/utils/types';
import { LucideUser2 } from 'lucide-react';

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

const ImageInputContainer = ({ image, name, action, text, children }: ImageInputContainerProps) => {
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

   
    return (
        <div className=" mb-5 justify-center p-4 border rounded-md shadow-md">
            {
                image ? <Image src={image} alt="Profile Image" width={100} height={100} className="rounded-full mb-4" /> :
                <LucideUser2 className="text-4xl text-gray-500 mb-4 w-24 h-24" />
            }
            <Button onClick = {() => setUpdateFormVisible(!isUpdateFormVisible)} className="w-full mb-4">
                {text}
            </Button>
            {
                isUpdateFormVisible && (
                    <div className="max-w-lg my-4">
                        <FormContainer action={action} >
                            {children}
                            <ImageInput />
                            <SubmitButton text="Update Image" classNames="mt-4" />
                        </FormContainer>
                    </div>
                )
            }
        </div>
    )

}

export default ImageInputContainer
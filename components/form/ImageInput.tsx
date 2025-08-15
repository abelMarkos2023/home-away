import React from 'react'
import { Input } from '../ui/input';

const ImageInput = () => {
    const name = 'image';
  return (
   <div className="mb-2">
    <label htmlFor={name} className="text-sm font-medium capitalize text-gray-700">
        image
    </label>
    <Input
        id={name}
        name={name}
        type="file"
        className="mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary"
        
        accept="image/*"
        placeholder="Upload your image"
    />
   </div>
  )
}

export default ImageInput
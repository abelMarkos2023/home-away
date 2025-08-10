import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';


interface FormInputProps {
    // Define any props you need for the FormInput component
    name: string;
    type: string;
    placeholder?: string;
    defaultValue?: string;
    label?: string;
}
const FormInput = (props: FormInputProps) => {
    const { name, type, placeholder, defaultValue, label } = props;
  return (
    <div className='mb-2'>
        <Label htmlFor={name} className="text-sm font-medium capitalize text-gray-700">
            {label || name}
        </Label>
        <Input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary"
            required
        />
    </div>
  )
}

export default FormInput
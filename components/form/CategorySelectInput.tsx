import React from 'react'
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { categories } from '@/utils/categories';



const name = "category";
const CategorySelectInput = ({defaultValue}:{defaultValue?:string}) => {
  return (
    <div className="mb-2">
        <Label htmlFor={name} className="text-md font-semibold">
          Category
        </Label>
        <Select 
          name={name}
          
          defaultValue={defaultValue || categories[0].label}
         
          required>
          <SelectTrigger id={name} className="mt-1 w-full">
                <SelectValue />
          </SelectTrigger>
           
                <SelectContent>
                {categories.map((category) => (
                <SelectItem key={category.label} value={category.label} >
                    <span className="flex items-center gap-2 w-full cursor-pointer">
                    <category.icon className="w-5 h-5" />
                    <span className='capitalize font-semibold text-lg'>{category.label}</span>
                    </span>
                </SelectItem>
                ))}
                </SelectContent>
   
        </Select>
    </div>  

  )
}

export default CategorySelectInput
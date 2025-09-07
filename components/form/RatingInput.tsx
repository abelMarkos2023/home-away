import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';

const RatingInput = ({name,label}:{name:string,label?:string}) => {

    const numbers = Array.from({ length: 5 }, (_, i) => {
        const value = i + 1;
        return value.toString();
      }).reverse();
  return (
   <div className="my-2 max-w-xs">
    <Label htmlFor={name}>{label}</Label>
    <Select name={name} defaultValue={numbers[0]} required>
        <SelectTrigger id={name} className="mt-1 w-full">
            <SelectValue />
        </SelectTrigger>
        <SelectContent>
            {numbers.map((number) => (
                <SelectItem key={number} value={number}>
                    <span className="flex items-center gap-2 w-full cursor-pointer">
                        {number}
                    </span>
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
   </div>
  )
}

export default RatingInput
import React from 'react'
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { getCountries } from '@/utils/countries';

export default function CountriesSelectInput({defaultValue}:{defaultValue?:string}) {

    const name = "country";
  return (
    <div className="">
        <Label htmlFor={name} className="text-md capitalize font-semibold">
            {name}
        </Label>
        <Select name={name} defaultValue={defaultValue || getCountries()[0].code} required>
            <SelectTrigger id={name} className="mt-1 w-full">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {getCountries().map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                        <span className="flex items-center gap-2 w-full cursor-pointer">
                            {country.flag}
                            <span className='capitalize font-semibold text-lg'>{country.name}</span>
                        </span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
  )
}

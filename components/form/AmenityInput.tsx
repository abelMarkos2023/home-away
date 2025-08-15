'use client';
import { useState } from 'react';
import { amenities, Amenity } from '@/utils/amenities';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '../ui/label';

function AmenitiesInput({ defaultValue }: { defaultValue?: Amenity[] }) {
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
    defaultValue || amenities
  );

  const handleChange = (amenity:Amenity) => {
    setSelectedAmenities(prev =>
      prev.map(a =>
        a.name === amenity.name ? { ...a, selected: !a.selected } : a
      )
    );
  }

  return (
    <section className="my-2">
        <input type="hidden" name="amenities" value ={JSON.stringify(selectedAmenities)} />
        <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity) => (
          <div key={amenity.name} className="flex items-center space-x-2">
            <Checkbox
              checked={selectedAmenities.some(a => a.name === amenity.name && a.selected)}
              onCheckedChange={() => handleChange(amenity)}
              id={amenity.name}
            />
            <Label htmlFor={amenity.name} className="flex text-base capitalize leading-none font-semibold items-center space-x-2">
             
              <span>{amenity.name}</span>
               <amenity.icon className="w-5 h-5" />
            </Label>
            </div>
        ))}
        </div>
    </section>
  );

}
export default AmenitiesInput;
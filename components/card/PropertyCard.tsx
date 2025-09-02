import { formatCurrency } from '@/utils/format';
import type { PropertyCardProps } from '@/utils/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import PropertyRating from './PropertyRating';
import FavoriteToggleButton from './FavoriteToggleButton';
import CountryNameAndFlag from './CountryNameAndFlag';

const PropertyCard = ({property}:{property:PropertyCardProps}) => {

    // You can destructure the property object to access its properties
    const {name, price, image,id:propertyId,country,tagline} = property;
  return (
    <article className="group relative shadow-lg">
        <Link href={`/properties/${propertyId}`}
          className="block w-full h-full">
            <div className='relative h-[300px] mb-3 overflow-hidden rounded-lg'>
              <Image sizes='(max-width:768px) 100vw,50vw' src={image} fill alt={name} className='h-full rounded-lg object-cover group-hover:scale-125 transition-transform duration-500' />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-md font-bold mt-1">{name.substring(0,30)}</h2>
                {/* Property reting */}
                <PropertyRating inPage={false} propertyId={propertyId} />
            </div>
            <p className="mt-1 text-sm text-muted-foregrouf">{tagline.substring(0,40)}</p>
            <div className="flex justify-between items-center">
                <p className="mt-1 text-sm">
                    <span className="font-semibold">{formatCurrency(price)}</span>
                   {" "} Night
                </p>

                {/* Country flag and name */}
                <CountryNameAndFlag country={country} />
            </div>
          </Link>
          <div className="absolute top-5 right-5 z-5">
            {/* FAvorite togglr button */}
            <FavoriteToggleButton propertyId={propertyId}/>
          </div>
    </article>
  )
}

export default PropertyCard
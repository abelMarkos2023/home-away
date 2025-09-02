

import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import PropertyRating from '@/components/card/PropertyRating';
import Amenities from '@/components/properties/Amenities';
import BreadCrumbs from '@/components/properties/BreadCrumbs';
import DateCalender from '@/components/properties/DateCalender';
import Descriptionn from '@/components/properties/Descriptionn';
import DynamicMap from '@/components/properties/DynamicMap';
import PropertyDetails from '@/components/properties/PropertyDetails';
import PropertyImage from '@/components/properties/PropertyImage';
import ShareButton from '@/components/properties/ShareButton';
import UserInfo from '@/components/properties/UserInfo';

import { fetchPropertyById } from '@/utils/actions';
import { redirect } from 'next/navigation';
import React from 'react'



const page = async ({params}:{params:Promise<{id:string}>}) => {

    const {id} = await params;
    const property = await fetchPropertyById({propertyId: id});

    if(!property){
        return redirect('/')
    }
    const {beds,bedrooms,baths,guests} = property;

    const detail = {beds,bedrooms,baths,guests};
  return (
    <section className='py-8'>
      <BreadCrumbs name={property.name} />

      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-semibold capitalize">{property.tagline}</h1>

        <div className="flex items-center gap-x-4">
          {/* Share Button */}
          <ShareButton propertyId={id} name={property.name} />
          <FavoriteToggleButton propertyId={id}/>
        </div>
      </header>
      <PropertyImage imageSrc={property.image} name={property.name} />

      <div className="mt-12 lg:grid lg:grid-cols-12 gap-x-12">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold italic">{property.name}</h1>
            <PropertyRating inPage propertyId={id} />
          </div>

          <PropertyDetails details={detail} />

          <UserInfo userProfile={property.profile} />
          <Descriptionn description={property.description} />
          <Amenities amenities={property.amenities} />
          <DynamicMap countryCode={property.country} />
        </div>
        <div className="lg:col-span-4">
          <DateCalender />
        </div>
      </div>
    </section>
  )
}

export default page
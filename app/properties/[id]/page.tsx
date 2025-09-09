import DynamicBookingWrapper from '@/components/booking/DynamicBookingWrapper';
import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import PropertyRating from '@/components/card/PropertyRating';
import Amenities from '@/components/properties/Amenities';
import BreadCrumbs from '@/components/properties/BreadCrumbs';
import Descriptionn from '@/components/properties/Descriptionn';
import DynamicMap from '@/components/properties/DynamicMap';
import PropertyDetails from '@/components/properties/PropertyDetails';
import PropertyImage from '@/components/properties/PropertyImage';
import ShareButton from '@/components/properties/ShareButton';
import UserInfo from '@/components/properties/UserInfo';
import PropertyReviews from '@/components/reviews/PropertyReviews';
import Submitreview from '@/components/reviews/Submitreview';

import { fetchPropertyById, fetchUserPropertyReview } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'




const page = async ({params}:{params:Promise<{id:string}>}) => {

  const {userId} = await auth();


    const {id} = await params;
    const property = await fetchPropertyById({propertyId: id});
    if(!property){
        return redirect('/')
    }

     const isNotOwner = property.profile.clerkId !== userId

     const showReview = userId && isNotOwner && (!await fetchUserPropertyReview(property.id,userId))

    
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
           {showReview && <Submitreview propertyId={id} />}
          <PropertyReviews propertyId={id} />
         
        </div>
        <div className="lg:col-span-4">
          <DynamicBookingWrapper propertyId={property.id} price={property.price} bookings={property.bookings} />
        </div>
      </div>
    </section>
  )
}

export default page
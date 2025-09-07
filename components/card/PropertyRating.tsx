import { fetchPropertyReview } from '@/utils/actions';
import React from 'react'
import { FaStar } from 'react-icons/fa';

const PropertyRating = async({inPage,propertyId}:{inPage:boolean,propertyId:string}) => {

  const {rating,count:totalRatings} = await fetchPropertyReview(propertyId);

  if(totalRatings === 0) return null
  const className = 'flex items-center gap-1 text-sm text-muted-foreground';
  const countText = totalRatings > 1 ? `reviews` : ` review`;

  const countValue = `(${totalRatings}${inPage ? countText : ''})`;
  return (
    <div className={className}>
      <FaStar className='w-3 h-3'/>
      {rating} {countValue}
    </div>
  )
}

export default PropertyRating
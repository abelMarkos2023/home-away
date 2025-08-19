import React from 'react'
import { FaStar } from 'react-icons/fa';

const PropertyRating = ({inPage,propertyId}:{inPage:boolean,propertyId:string}) => {

  const reting = 4.5; // Example rating, replace with actual data fetching logic
  const totalRatings = 120; // Example total ratings, replace with actual data fetching logic

  const className = 'flex items-center gap-1 text-sm text-muted-foreground';
  const countText = totalRatings > 1 ? `reviews` : ` review`;

  const countValue = `(${totalRatings}${inPage ? countText : ''})`;
  return (
    <div className={className}>
      <FaStar className='w-3 h-3'/>
      {reting} {countValue}
    </div>
  )
}

export default PropertyRating
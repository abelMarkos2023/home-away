import { fetchPropertyReviews } from '@/utils/actions'
import React from 'react'
import Title from '../properties/Title'
import ReviewCard from './ReviewCard'

const PropertyReviews = async({propertyId}:{propertyId:string}) => {

  const reviews = await fetchPropertyReviews(propertyId);

  if(!reviews) return null
  return (
    <div className="mt-8">
      <Title text='Reviews'/>

      <div className="grid md:grid-cols-2 gap-8 mt-4">
        {
          reviews.map(review => {
            const {rating,comment} = review
            const {firstName:name,profileImage:image} = review.profile

            const reviewInfo = {
              rating,
              comment,
              name,
              image,
              propertyId
            }
            return <ReviewCard key={review.id} reviewInfo={reviewInfo}/>
          })
        }
      </div>
    </div>
  )
}

export default PropertyReviews
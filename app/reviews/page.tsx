import FormContainer from '@/components/form/FormContainer'
import { IconButton } from '@/components/form/SubmitButton'
import EmptyList from '@/components/home/EmptyList'
import Title from '@/components/properties/Title'
import ReviewCard from '@/components/reviews/ReviewCard'
import { deleteReviewAction, fetchPropertyReviewsByUser } from '@/utils/actions'
import React from 'react'

const ReviewsPage = async() => {

  const reviews = await fetchPropertyReviewsByUser()

  if(!reviews) return <EmptyList 
    heading='No reviews found'
    message = 'sorry, you have not made any reviews yet'
    buttonText='Back to Home'
    buttonLink='/'
  />

  console.log(reviews)
  
  return (
    <div>
      <Title text='Your Reviews' />

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {
          reviews?.map(review => {
            const {comment,rating} = review
            const {name,image} = review.property
            const reviewInfo = {
              comment,
              rating,
              name,
              image
            }
            return <ReviewCard key={review.id} reviewInfo={reviewInfo}>
                      <Deletereview reviewId={review.id} />
              </ReviewCard>
          })
        }
      </div>
    </div>
  )
}


const Deletereview = ({reviewId}:{reviewId:string}) => {

  const deleteAction = deleteReviewAction.bind(null, {reviewId})

  return (
    <FormContainer action={deleteAction}>

      <IconButton actionType='delete' />
    </FormContainer>
      
  )

    
  
}
export default ReviewsPage
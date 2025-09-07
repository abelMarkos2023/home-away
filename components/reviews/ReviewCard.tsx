import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Image from 'next/image'
import Rating from './Rating'
import Comment from './Comment'


type TReviewCard = {
  reviewInfo:{
    name:string,
    image:string,
    comment:string,
    rating:number,
  }
  children?:React.ReactNode
}
const ReviewCard = ({reviewInfo,children}:TReviewCard) => {
  return (
    <Card className='relative'>
      <CardHeader>
        <div className="flex items-start">
          <Image
            src={reviewInfo.image}
            alt='profile'
            width={50}
            height={50}
            className="rounded-full w-16 h-16 object-cover"
          />
          <div className="ml-4">
            <h6 className="text-lg font-bold capitalize">
              {reviewInfo.name}
            </h6>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>

      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  )
}

export default ReviewCard
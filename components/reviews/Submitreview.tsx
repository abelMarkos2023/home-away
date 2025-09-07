"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import FormContainer from '../form/FormContainer'
import TextAreaInput from '../form/TextAreaInput'
import { createReviewAction } from '@/utils/actions'
import RatingInput from '../form/RatingInput'
import SubmitButton from '../form/SubmitButton'

const Submitreview = ({ propertyId }: { propertyId: string }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false)
  return (
    <div className="mt-4">
      <Button className='cursor-pointer' onClick={() => setIsReviewFormVisible(prev => !prev)}>
        Leave a Review
      </Button>
      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="propertyId" value={propertyId} />
            <RatingInput name="rating" />
            <TextAreaInput
              name="comment"
              labelText="your thoughts on this property"
              defaultValue="Amazing place !!!"
            />
            <SubmitButton text="Submit" />
          </FormContainer>
        </Card>
      )}
    </div>
  )
}

export default Submitreview
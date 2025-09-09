'use client'

import { useProperty } from "@/utils/store"
import FormContainer from "../form/FormContainer"
import { createBookingAction } from "@/utils/actions"
import { useAuth } from "@clerk/nextjs"
import { SignInButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import SubmitButton from "../form/SubmitButton"

const ConfirmBooking = () => {

  const {userId} = useAuth();
   const {range,propertyId} = useProperty(state => state)

  if(!userId){
    return <SignInButton mode="modal">
      <Button className="w-full">Please Sign In to complete booking</Button>
    </SignInButton>
  }

 

  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;

  const formAction = createBookingAction.bind(null,{propertyId,checkIn,checkOut})
  return (
    <FormContainer action={formAction}>
        
          <SubmitButton text="Reserve" classNames="w-full"/>
    </FormContainer>
  )
}

export default ConfirmBooking
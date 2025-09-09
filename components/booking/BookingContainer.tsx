'use client'

import { useProperty } from '@/utils/store'
import React from 'react'
import BookingForm from './BookingForm';
import ConfirmBooking from './ConfirmBooking';
import { calculateTotal } from '@/utils/calculateTotal';

const BookingContainer = () => {

  const {range,price} = useProperty(state => state);

  if(!range || !range.from || !range.to) return null;

  if(range.from.getTime() === range.to.getTime()) return null;

 
  return (
    <div className="w-full">
      <BookingForm range={range} price={price} />
      <ConfirmBooking />
    </div>
  )
}

export default BookingContainer
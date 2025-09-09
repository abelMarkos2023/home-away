import { calculateTotal } from '@/utils/calculateTotal';
import React from 'react'
import { DateRange } from 'react-day-picker';
import { Card, CardTitle } from '../ui/card';

const BookingForm = ({range,price}:{range:DateRange,price:number}) => {

  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;
   const {totalNights,subTotal,cleaning,service,tax,orderTotal} = calculateTotal({checkIn, checkOut, price});

  return (
    <Card className='px-2 py-4 mb-4'>
      <CardTitle className='text-lg mb-4'>Booking Summary</CardTitle>
      <FormRow label = {`$${price} x ${totalNights} nights`} value={`$${subTotal.toFixed(2)}`} />
      <FormRow label = "Cleaning fee" value={`$${cleaning.toFixed(2)}`} />
      <FormRow label = "Service fee" value={`$${service.toFixed(2)}`} />
      <FormRow label = "Occupancy tax & fees" value={`$${tax.toFixed(2)}`} />
      <hr className='my-1' />
      <FormRow label = "Total" value={`$${orderTotal.toFixed(2)}`} />
    </Card>
  )
}


const FormRow = ({label,value}:{label:string,value:string|number}) => (
  <div className="flex justify-between mb-1">
    <div className="text-gray-600 font-semibold">{label}</div>
    <div className="font-bold">{value}</div>
  </div>
)
export default BookingForm
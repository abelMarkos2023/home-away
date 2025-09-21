import CountryNameAndFlag from '@/components/card/CountryNameAndFlag';
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/SubmitButton';
import EmptyList from '@/components/home/EmptyList';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { deleteBookingAction, fetchBookings } from '@/utils/actions'
import { formatCurrency, formatDate } from '@/utils/format';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const BookingsPage = async() => {

  const bookings = await fetchBookings();

  if(bookings === undefined || bookings.length === 0 )  return <EmptyList />
  return (
    <div className="mt-16">
      <h1 className="text-2xl text-center font-bold">Booking Page</h1>
      <p className="my-4 capitalize text-xl">Total Booking : {bookings.length}</p>

      <Table>
        <TableCaption className='mt-4 capitalize'>List of all your bookings</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>TotalNights</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>

        </TableHeader>
        <TableBody>
          {
            bookings.map((booking) => {

              const {id,totalNights,orderTotal,checkIn,checkOut} = booking
              const {id:propertyId,name,country,price,image} = booking.property

              return <TableRow key={id}>
                <TableCell>
                  <Image src={image} alt={name} width={100} height={100} className='rounded-md object-cover' />
                </TableCell>
                <TableCell className='font-medium'>
                  <Link href={`/properties/${propertyId}`}>{name}</Link>
                </TableCell>
                <TableCell className='font-medium'>
                  <CountryNameAndFlag country={country} />
                </TableCell>
                <TableCell className='font-medium'>{formatDate(checkIn)}</TableCell>
                <TableCell className='font-medium'>{formatDate(checkOut)}</TableCell>
                <TableCell className='font-medium'>{formatCurrency(price)}</TableCell>
                <TableCell className='font-medium'>{totalNights} {totalNights > 1 ? 'nights' : 'night'}</TableCell>
                <TableCell className='font-medium'>{formatCurrency(orderTotal)}</TableCell>
                <TableCell className='font-medium'>{booking.paymentStatus ? 'paid' : 'unpaid'}</TableCell>
                <TableCell className='font-medium text-blue-600 cursor-pointer hover:underline'>
                  <DeleteBoking bookingId={id} />
                </TableCell>
              </TableRow>
            })
          }
        </TableBody>
      </Table>
    </div>
  )
}


function DeleteBoking({bookingId}: {bookingId: string}) {

  const deleteAction = deleteBookingAction.bind(null,{bookingId})
  return <FormContainer action={deleteAction}>
    <IconButton actionType='delete' />
  </FormContainer>
}
export default BookingsPage
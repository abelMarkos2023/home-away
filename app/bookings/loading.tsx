'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react'
const Loading = () => {
  return (
    <div className="mt-16">
      <h1 className="text-2xl text-center font-bold">Booking Page</h1>
      <section className="my-4 capitalize text-xl">Total Booking : <Skeleton className='w-10 h-5 inline-block' /></section>

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
            <TableHead>Action</TableHead>
          </TableRow>

        </TableHeader>
        <TableBody>
            {
            [1,2,3,4,5].map((i) => {

              return (<TableRow key={i}> 
                <TableCell>
                  <Skeleton className='w-[100px] h-[100px] rounded-md object-cover' />
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                </TableRow>)
            })}
        </TableBody>
      </Table>
    </div>
  )
}
export default Loading
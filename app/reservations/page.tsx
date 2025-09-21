import { fetchReservations } from '@/utils/actions';
import Link from 'next/link';
import EmptyList from '@/components/home/EmptyList';
import CountryNameAndFlag from '@/components/card/CountryNameAndFlag';

import { formatDate, formatCurrency } from '@/utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import Stats from '@/components/reservations/Stats';

const ReservationPage = async () => {

const reservations = await fetchReservations();

if ((reservations && Array.isArray(reservations) && reservations.length === 0) || reservations === undefined) {
    return <EmptyList heading='No Reservations' message='No reservations found yet ' />
}


  return (
    <div className="mt-16">
        <Stats />
        <h1 className='font-semibold text-2xl my-8'>Your Reservations</h1>
        <Table>
            <TableCaption>List of your reservations</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Property Name</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Nights</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Check In</TableHead>
                    <TableHead>Check Out</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                reservations && reservations.map((reservation) => {
                    const { id, totalNights, orderTotal, checkIn, checkOut } = reservation;
                    const {name,country, image} = reservation.property;

                    return(
                        <TableRow key={id} className='hover:bg-muted/50'>
                            <TableCell>
                                <Image
                                    src={image}
                                    alt={name}
                                    width={100}
                                    height={100}
                                    className="w-[100px] h-[100px] rounded-md object-cover"
                                    priority
                                />
                            </TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell><CountryNameAndFlag country={country} /></TableCell>
                            <TableCell>{totalNights}</TableCell>
                            <TableCell>{formatCurrency(orderTotal)}</TableCell>
                            <TableCell>{formatDate(checkIn)}</TableCell>
                            <TableCell>{formatDate(checkOut)}</TableCell>
                                
                           
                        </TableRow>
                    )

                })
                
                }

            </TableBody>
        </Table>
    </div>
  )
}

export default ReservationPage
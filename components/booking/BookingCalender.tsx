'use client';
import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
// import {toast} from '@/components/ui/sonner';
import { DateRange } from 'react-day-picker';
import { useProperty } from '@/utils/store';

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from '@/utils/calendar';
import { toast } from 'sonner';

const BookingCalender = () => {
    const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  
    const currentDate = new Date()

    const bookings = useProperty((state) => state.bookings);
    const blockedPeriods = generateBlockedPeriods({bookings, today: currentDate});
    const disabledDates = generateDisabledDates(blockedPeriods);
    // const { toast } = useToast();


  useEffect(() => {
    const selectedRange = generateDateRange(range);

    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (disabledDates[date]) {
        setRange(defaultSelected);
        toast.error('Selected range includes unavailable dates. Please choose a different range.');
        return true;
      }
      return false;
    });

    useProperty.setState({range})
  }, [range]);
  return (
    <Calendar  
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='mb-4' 
      disabled={blockedPeriods}
      />
  )
}

export default BookingCalender
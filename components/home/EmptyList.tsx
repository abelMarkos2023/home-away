import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

const EmptyList = ({
  heading = "No Properties Found",
  message = "Try changing your search or filter options. or back to the homepage.",
  buttonText = "Back to Home",
  buttonLink = "/",
}:{
  heading?: string;
  message?: string;
  buttonText?: string;
  buttonLink?: string;
}) => {
  return (
    <div className="mt-4">
      <p className="text-xl font-bold">{heading}</p>
      <p className="text-lg font-semibold">{message}</p>
      <Button className="mt-4" asChild>
        <Link href={buttonLink}>
          {buttonText}  
        </Link>
      </Button>
    </div>
  )
}

export default EmptyList
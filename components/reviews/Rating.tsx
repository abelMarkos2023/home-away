import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';

const Rating = ({rating}:{rating:number}) => {

  const stars = Array.from({length:5},(_,i) => i + 1 <= rating)
  return (
    <div className='flex items-center gap-x-1'>
      {
        stars.map((star,i) => {
          const className = star ? "w-4 h-4 text-yellow-400" : "w-4 h-4 text-muted-foreground";

          return star ? <FaStar key = {i} className={className } /> : <FaRegStar key = {i} className={className } />
        })
      }
    </div>
  )
}

export default Rating
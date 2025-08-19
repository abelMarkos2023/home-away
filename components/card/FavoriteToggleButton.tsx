import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';
const FavoriteToggleButton = ({propertyId}:{propertyId:string}) => {
  return (
    <Button variant='outline' size = "icon" className='p-2 cursor-pointer'>
      <FaHeart className='w-4 h-4' />
      
    </Button>
  )
}

export default FavoriteToggleButton
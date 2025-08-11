import { fetchProfileImage } from '@/utils/actions'
import React from 'react'
import { LuUser } from 'react-icons/lu'

const UserIcon = async () => {

  const profileImage = await fetchProfileImage();

  if(profileImage) {
    return (
      <img src={profileImage} alt="User Profile" className='w-6 h-6 rounded-full object-cover' />
    )
  }
  return (
    <LuUser className='w-6 h-6 rounded-full bg-primary' />
  )
}

export default UserIcon
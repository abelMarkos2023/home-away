import { fetchProfileImage } from '@/utils/actions'
import Image from 'next/image';
import React from 'react'
import { LuUser } from 'react-icons/lu'

const UserIcon = async () => {

  const profileImage = await fetchProfileImage();

  if(profileImage) {
    return (
      <Image width={100} height={100} src={profileImage} alt="User Profile" className='w-6 h-6 rounded-full object-cover' />
    )
  }
  return (
    <LuUser className='w-6 h-6 rounded-full bg-primary' />
  )
}

export default UserIcon
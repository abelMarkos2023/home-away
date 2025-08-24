'use client';

import { SignInButton, SignOutButton } from '@clerk/nextjs';
import React from 'react'
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { FaRegHeart } from 'react-icons/fa';



const SignoutButton = () => {

const handleLogout = () => {

  toast.success("You have been logged out successfully.");
}
  return (
    <SignOutButton redirectUrl='/' >
      <button 
        onClick={handleLogout} 
        className="w-full text-left px-4 py-2 hover:bg-secondary rounded-md transition-colors flex items-center gap-2 cursor-pointer"
      >
        Sign Out
      </button>
    </SignOutButton>
  )
}

export const CardSignInButton = () => {

  return <SignInButton mode = 'modal' >
          <Button asChild variant='outline' size='icon' className='p-2 cursor-pointer'>
            <FaRegHeart />
          </Button>
  </SignInButton>
}
export default SignoutButton
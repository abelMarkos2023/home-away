'use client';

import { SignOutButton } from '@clerk/nextjs';
import React from 'react'
import { toast } from 'sonner';



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

export default SignoutButton
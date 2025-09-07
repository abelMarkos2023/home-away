'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

import { LuTrash2, LuRefreshCcw as ReloadIcon } from 'react-icons/lu';
import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { LucidePenSquare } from 'lucide-react';

/**
 * SubmitButton component that handles form submission.
 * It shows a loading spinner when the form is being submitted.
 */

type buttonSizes = 'sm' | 'default' | 'lg';
type SubmitButtonProps = {
  // Define any props you need for the SubmitButton component
  text:string;
  classNames?: string;
  size?: buttonSizes;
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
     const {pending} = useFormStatus()

     return <Button className='p-2 cursor-pointer' size = 'icon' variant='outline'>
      {
        pending ? <ReloadIcon className="animate-spin" /> : isFavorite ? <FaHeart /> : <FaRegHeart />
      }
     </Button>
    
    }

const SubmitButton = ({ text, classNames,size = 'default' } : SubmitButtonProps) => {

    const {pending} = useFormStatus()
    
  return (
    <Button type='submit' size = {size} disabled={pending} className={`capitalize ${classNames} cursor-pointer`}>
        {
        pending ? (<>
        <ReloadIcon className="mr-2 w-4 h-4 animate-spin" />
        Please wait...
        </> ): text
        }
    </Button>
  )
}


type actionsType = 'edit' | 'delete'
export const IconButton = ({ actionType }: { actionType: actionsType }) => {

  const {pending} = useFormStatus()

  const renderIcon = () => {
    switch(actionType) {
      case 'edit':
        return <LucidePenSquare />
      case 'delete':
        return <LuTrash2 />
      default:
        return null
    }
  }
  return (
    <Button className='p-2 cursor-pointer' size = 'icon' variant='link'>
      {
        pending ? <ReloadIcon className="animate-spin" /> : renderIcon()
      }
    </Button>
  )
}

export default SubmitButton
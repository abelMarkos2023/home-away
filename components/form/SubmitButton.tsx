'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

import { LuRefreshCcw as ReloadIcon } from 'react-icons/lu';
import React from 'react'

/**
 * SubmitButton component that handles form submission.
 * It shows a loading spinner when the form is being submitted.
 */

type SubmitButtonProps = {
  // Define any props you need for the SubmitButton component
  text:string;
  classNames?: string;
};

const SubmitButton = (props: SubmitButtonProps) => {

    const { text, classNames } = props;
    const {pending} = useFormStatus()
  return (
    <Button type='submit' disabled={pending} className={`capitalize ${classNames} cursor-pointer`}>
        {
        pending ? (<>
        <ReloadIcon className="mr-2 w-4 h-4 animate-spin" />
        Please wait...
        </> ): text
        }
    </Button>
  )
}

export default SubmitButton
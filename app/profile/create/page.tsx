// export const dynamic = 'force-dynamic';


import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import SubmitButton from '@/components/form/SubmitButton'
import { createProfile } from '@/utils/actions'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

const CreateProfile = async() => {

  const user = await currentUser();

  if(user?.privateMetadata?.hasProfile) redirect('/profile');

  return (
    <Suspense>
        <h2 className="text-2xl capitalize font-semibold m-6">New User</h2>

        <div className="rounded-md shadow-md">
            <FormContainer action={createProfile}>
                <div className="border p-8 rounded-md shadow-md grid gap-2 md:grid-cols-2">
                    <FormInput name='firstName' type='text' label='First Name' />
                    <FormInput name='lastName' type='text' label='Last Name' />
                    <FormInput name='username' type='text' label='User Name' />
                </div>
                <SubmitButton text='Create Profile' classNames='mt-4 w-full' />
            </FormContainer>
        </div>
    </Suspense>
  )
}

export default CreateProfile
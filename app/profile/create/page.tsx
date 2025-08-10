import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import SubmitButton from '@/components/form/SubmitButton'
import React from 'react'

const CreateProfile = () => {

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function createProfile(prevState: any, formData: FormData) {
         'use server';
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;    
        const email = formData.get('email') as string;
        // Here you would typically send the data to your backend API
        // For demonstration, we will just return a success message
        return {
            message: `Profile created for ${firstName} ${lastName} with email ${email}`
        }
    }
  return (
    <div>
        <h2 className="text-2xl capitalize font-semibold m-6">New User</h2>

        <div className="rounded-md shadow-md">
            <FormContainer action={createProfile}>
                <div className="border p-8 rounded-md shadow-md grid gap-2 md:grid-cols-2">
                    <FormInput name='firstName' type='text' label='First Name' />
                    <FormInput name='lastName' type='text' label='Last Name' />
                    <FormInput name='email' type='email' label='Email' />
                </div>
                <SubmitButton text='Create Profile' classNames='mt-4 w-full' />
            </FormContainer>
        </div>
    </div>
  )
}

export default CreateProfile
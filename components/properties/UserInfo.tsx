import Image from 'next/image'
import React from 'react'


type Props = {
    profileImage: string,
    firstName: string
}
const UserInfo = ({userProfile}:{userProfile: Props}) => {

    const {profileImage, firstName} = userProfile
  return (
    <article className="flex mt-4 gap-4 items-start">
        <Image
        src={profileImage}
        alt={firstName}
        width={50}
        height={50}
        className="rounded-md w-16 h-16 object-cover"
        />
        <div className="flex flex-col">
            <h3 className="text-lg font-bold">Hosted By: {firstName}</h3>
            <p className="text-muted-foreground font-light">Superhost &middot; 2 years hosting</p>
        </div>
        
    </article>
  )
}

export default UserInfo
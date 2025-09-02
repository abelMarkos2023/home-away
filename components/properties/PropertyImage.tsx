import Image from 'next/image'
import React from 'react'

const PropertyImage = ({imageSrc,name}: {imageSrc:string,name:string}) => {
  return (
    <div className="relative h-[400px] md:h-[500px] rounded-lg mt-8">
        <Image src={imageSrc} alt={name} fill sizes ='100vw' className="object-cover rounded-lg" />
    </div>
  )
}

export default PropertyImage
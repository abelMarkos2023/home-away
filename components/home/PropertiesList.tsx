import { PropertyCardProps } from '@/utils/types'
import React from 'react'
import PropertyCard from '../card/PropertyCard'

const PropertiesList = ({properties}:{properties : PropertyCardProps[]}) => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {
        properties.map(property => <PropertyCard key={property.id} property={property} />)
      }
    </div>
  )
}

export default PropertiesList
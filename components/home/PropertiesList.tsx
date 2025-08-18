import { PropertyCardProps } from '@/utils/types'
import React from 'react'
import PropertyCard from '../card/PropertyCard'

const PropertiesList = ({properties}:{properties : PropertyCardProps[]}) => {
  return (
    <div>
      {
        properties.map(property => <PropertyCard key={property.id} property={property} />)
      }
    </div>
  )
}

export default PropertiesList
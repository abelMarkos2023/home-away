import { fetchProperties } from '@/utils/actions'
import { PropertyCardProps } from '@/utils/types'
import React from 'react'
import EmptyList from './EmptyList';
import PropertiesList from './PropertiesList';

const PropertiesContainer = async({search,category}:{search?:string,category?:string}) => {
  
  const properties : PropertyCardProps[] = await fetchProperties({search,category});

  if(properties.length === 0) {
    return <EmptyList  
      heading="No Properties Found"
      message="Try changing your search or filter options, or go back to the homepage."
      buttonText="Back to Home"
      buttonLink="/"
    />
  }
  
  return (
    <PropertiesList properties = {properties} />
  )
}

export default PropertiesContainer
import CategoriesList from '@/components/home/CategoriesList'
import PropertiesContainer from '@/components/home/PropertiesContainer'

import React, { Suspense } from 'react'

const HomePage = async ({searchParams}:{searchParams:Promise<{category?:string,search?:string}>}) => {

  const params = await searchParams;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoriesList category={params?.category} search = {params?.search}/>
      <PropertiesContainer category={params?.category} search = {params?.search} />
     
      </Suspense>
  )
}

export default HomePage
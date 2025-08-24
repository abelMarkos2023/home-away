import CategoriesList from '@/components/home/CategoriesList'
import PropertiesContainer from '@/components/home/PropertiesContainer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const HomePage = async ({searchParams}:{searchParams:Promise<{category?:string,search?:string}>}) => {

  const params = await searchParams
  return (
    <div>
      <CategoriesList category={params?.category} search = {params?.search}/>
      <PropertiesContainer category={params?.category} search = {params?.search} />
     
      </div>
  )
}

export default HomePage
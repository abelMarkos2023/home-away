import CategoriesList from '@/components/home/CategoriesList'
import PropertiesContainer from '@/components/home/PropertiesContainer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const HomePage = ({searchParams}:{searchParams:{category?:string,search?:string}}) => {
  return (
    <div>
      <CategoriesList category={searchParams?.category} search = {searchParams?.search}/>
      <PropertiesContainer category={searchParams?.category} search = {searchParams?.search} />
     
      </div>
  )
}

export default HomePage
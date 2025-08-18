import React from 'react'
import CategoriesList from './CategoriesList'
import PropertiesContainer from './PropertiesContainer'

const Home = ({searchParams}:{searchParams:{category?:string,search?:string}}) => {
  return (
    <div>
        <CategoriesList 
             category={searchParams?.category}
             search={searchParams?.search}
        />
        <PropertiesContainer
            category={searchParams?.category}
            search={searchParams?.search}
        />
    </div>
  )
}

export default Home
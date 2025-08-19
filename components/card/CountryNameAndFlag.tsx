import { getCountryByCode } from '@/utils/countries'
import React from 'react'

const CountryNameAndFlag = ({country}:{country:string}) => {

  const validCountryname = getCountryByCode(country)!;
  const countryName = validCountryname?.name.length > 0 ? `${validCountryname?.name.substring(0,20)}` : validCountryname?.name;

  return (
    <span className="flex items-center gap-2">
      {validCountryname.flag} {countryName}
    </span>
  )
}

export default CountryNameAndFlag
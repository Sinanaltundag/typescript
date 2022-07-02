import React, { FunctionComponent } from 'react'
import { CountryType } from '../types'

interface ICountryProps {
    country: CountryType
    children: React.ReactNode
}

const Country: FunctionComponent<ICountryProps> = (props) => {
    const { country } = props
  return (
    <div>
        {/* to get children like this, we need to add interface "children: React.ReactNode" as above */}
        <div className="countryChildren">{props.children}</div>
        <p>{country.name}</p>
        <p>{country.capital}</p>
        <p>{country.population}</p>
        <p>{country.region}</p>
        <p>{country.area}</p>
        <p>{country.nativeName}</p>
    </div>


  )
}

export default Country
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
{country.name}
{/* to get children like this, we need to add interface "children: React.ReactNode" as above */}
{props.children}
    </div>
  )
}

export default Country
import axios from "axios";
import { useState } from "react";
import Country from "./components/Country";
import { useEffectOnce } from "./Hooks/useEffectOnce";
import { CountryType } from "./types";

const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v2/all"
      );
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffectOnce(() => {
    // console.log('my effect is running');
    getCountries();
    // return () => console.log('my effect is destroying');
  });
  console.log(countries);
  return (
    <div>
      {countries.map((country, index) => (
        <Country key={country.alpha3Code} country={country}>
            <h3>{index+1}</h3>
        </Country>
        ))}
    </div>
    );
}

export default App;

import { useEffect, useState } from 'react';
import Country from "./Country"
import {/* countryByName, */ allCountries} from "./apiRequest";


export default function Countries () {

    const [countryModules, setCountryModules] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await allCountries();
        const modules = data.map((c) => (
          <Country
            img={c.flags.svg}
            key={c.name.common}
            name={c.name.common}
            population={c.population}
            region={c.region}
            capital={c.capital}
          />
        ));
        setCountryModules(modules);
      };
  
      fetchData();
    }, []);
    

    return <section className="countries">{countryModules}</section>;
}
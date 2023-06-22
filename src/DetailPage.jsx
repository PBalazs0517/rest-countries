/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { countryByNameDetailed } from "./apiRequest";
import Backbtn from "./Backbtn";
import Detail from "./Detail";
import Border from "./Border";

export default function Details(props) {
  const [module, setModule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await countryByNameDetailed(props.country);
      console.log(data);
      
      /* Made outside of decleration since it's multiple lines and complex */
      const currenciesProp = [];
      Object.values(data[0].currencies).forEach(a => {currenciesProp.push(a.name)});

      function segment() {
        const populationWSegmentation = (data[0].population).toString();
        let revStr = populationWSegmentation.split("").reverse();
        revStr = sliceIntoChunks(revStr);
        revStr.forEach(a => a.reverse());
        revStr.forEach((a, i) => revStr[i] = a.join(""));
        revStr.reverse();
        return revStr;
      }
      function sliceIntoChunks(arr) {
        const res = [];
        for (let i = 0; i < arr.length; i += 3) {
            const chunk = arr.slice(i, i + 3);
            res.push(chunk);
        }
        return res;
      }
 
      let borders = [];
      data[0].borders.forEach(b => borders.push(b));
      borders = borders.map(b => { return <Border key={b} name={b} /> })

      const newModuleItem = (
        <Detail 
          img={data[0].flags.svg}
          name={data[0].name.common}
          native={(Object.values(data[0].name.nativeName)[0] === undefined) ? "" : Object.values(data[0].name.nativeName)[0].common}
          population={segment().join(",")}
          region={data[0].region}
          sub={data[0].subregion}
          capital={data[0].capital}
          tld={data[0].tld.join(", ")}
          currencies={currenciesProp.join(", ")}
          languages={Object.values(data[0].languages).join(", ")}
          borders={borders}
        />
      )
      setModule(newModuleItem)
    };
    fetchData();
  }, []);

  return (
    <>
      <Backbtn />
      {module}
    </>
  )
}
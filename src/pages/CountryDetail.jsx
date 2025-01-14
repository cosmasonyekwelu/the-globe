import React, { useEffect } from "react";
import EachCountry from "../components/EachCountry";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [eachCountry, setEachCountry] = useState({});
  useEffect(() => {
    const getEachData = async () => {
      const fetchEachAPI = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );

      const eachJasonAPI = await fetchEachAPI.json();

      console.log(eachJasonAPI[0]);
      setEachCountry(eachJasonAPI[0]);
    };
    getEachData();
  }, []);

  return (
    <div>
      <EachCountry eachCountry={eachCountry} />
    </div>
  );
};

export default CountryDetail;

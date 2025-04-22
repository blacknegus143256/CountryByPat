import React from "react";
import { useParams } from "react-router-dom";
import CountryDetails from "../components/CountryDetails";

const CountryPage = ({ countries }) => {
  const { code } = useParams();
  const country = countries.find(c => c.cca3 === code);

  if (!country) return <p>Loading country data...</p>;

  return <CountryDetails country={country} countries={countries} />

  ;
};

export default CountryPage;

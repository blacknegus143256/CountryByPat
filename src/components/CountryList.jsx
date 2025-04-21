// src/components/CountryList.jsx
import React from 'react';

const CountryList = ({ countries, onSelect }) => {
  return (
    <div style={{ padding: "20px" }}>
      {countries.map((country) => (
        <div key={country.name.common} onClick={() => onSelect(country.name.common)} style={{ cursor: 'pointer', marginBottom: "10px" }}>
          <strong>{country.name.common}</strong>
        </div>
      ))}
    </div>
  );
};

export default CountryList;

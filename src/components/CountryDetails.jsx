import React from "react";
import { Typography, Card, CardContent, Divider, Button } from "@mui/material";
import Flag from "./Flag";
import Borders from "./Borders";
import {  useNavigate  } from "react-router-dom";

const CountryDetails = ({ country }) => {
  const currency = country.currencies ? Object.values(country.currencies)[0]?.name : "N/A";
  const languages = country.languages ? Object.values(country.languages).join(", ") : "N/A";
  const navigate = useNavigate();

  return (
    
    <Card sx={{ maxWidth: 600, margin: "2rem auto", padding: 2 }}>
      <Button onClick={() => navigate(-1)} variant="contained" sx={{ m: 2 }}>
        ⬅ Back
      </Button>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {country.name.common}
        </Typography>
        
        <Flag flagUrl={country.flags.png} />

        <Divider sx={{ my: 2 }} />

        <Typography><strong>Capital:</strong> {country.capital?.[0]}</Typography>
        <Typography><strong>Region:</strong> {country.region} / {country.subregion}</Typography>
        <Typography><strong>Population:</strong> {country.population.toLocaleString()}</Typography>
        <Typography><strong>Area:</strong> {country.area.toLocaleString()} km²</Typography>
        <Typography><strong>Coordinates:</strong> {country.latlng.join(", ")}</Typography>
        <Typography><strong>Timezones:</strong> {country.timezones.join(", ")}</Typography>
        <Typography><strong>Currency:</strong> {currency}</Typography>
        <Typography><strong>Languages:</strong> {languages}</Typography>

        <Divider sx={{ my: 2 }} />

        <Borders borders={country.borders} />
      </CardContent>
    </Card>
  );
};

export default CountryDetails;

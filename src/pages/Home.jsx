import React, { useState } from "react";
import {
  Box, TextField, MenuItem, Grid, Typography, Card, CardContent, CardMedia
} from "@mui/material";
import { Link } from "react-router-dom";

const Home = ({ countries }) => {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = regionFilter ? country.region === regionFilter : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Explore Country Information</Typography>

      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search by Country"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Filter by Region"
            variant="outlined"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {filteredCountries.map((country) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3}>
            <Card
              component={Link}
              to={`/country/${country.cca3}`}
              sx={{ textDecoration: "none", height: "100%" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={country.flags.png}
                alt={`${country.name.common} flag`}
              />
              <CardContent>
                <Typography variant="h6">{country.name.common}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Capital: {country.capital?.[0] || "N/A"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Region: {country.region}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;

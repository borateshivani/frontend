import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/properties").then((res) => {
      setProperties(res.data);
    });
  }, []);

  return (
    <Grid container spacing={3}>
      {properties.map((property) => (
        <Grid item xs={12} sm={6} md={4} key={property.PropertyID}>
          <Card>
            <CardContent>
              <Typography variant="h5">{property.Title}</Typography>
              <Typography variant="body1">{property.Description}</Typography>
              <Typography variant="body2">{property.Location}</Typography>
              <Typography variant="subtitle1">${property.BasePrice}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyList;

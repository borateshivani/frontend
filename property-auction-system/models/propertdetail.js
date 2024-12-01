import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Button } from "@mui/material";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/properties/${id}`).then((res) => {
      setProperty(res.data);
    });
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4">{property.Title}</Typography>
      <Typography variant="body1">{property.Description}</Typography>
      <Typography variant="subtitle1">Location: {property.Location}</Typography>
      <Typography variant="subtitle2">Base Price: ${property.BasePrice}</Typography>
      <Button variant="contained" color="primary">
        Place a Bid
      </Button>
    </Container>
  );
};

export default PropertyDetail;

import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MyMap = () => {
  const apiKey = "AIzaSyBNkfSp5Glgbz2qrWRyWwWpfeODDI0Qp_w";

  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 9.9983521,
    lng: -84.1218915,
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MyMap;

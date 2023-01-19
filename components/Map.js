import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
function Map({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  // console.log(coordinates);

  const center = getCenter(coordinates);

  // console.log(center);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // latitude: center.latitude,
    // longitude: center.longitude,
    zoom: 8,
  });
  return (
    <div>
      <ReactMapGL
        style={{ height: "200vh" }}
        mapStyle={`mapbox://styles/neerajyadav1696/cld33cgme000101roa663olxp/`}
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextviewport) => setViewport(nextviewport)}
      />
    </div>
  );
}

export default Map;

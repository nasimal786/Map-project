import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const CityMap = ({ selectedCity, cities }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };
  const center = selectedCity
    ? selectedCity.position
    : { lat: 20.5937, lng: 78.9629 };

  const [hoveredMarker, setHoveredMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setHoveredMarker(marker);
  };

  const handleMarkerMouseOut = () => {
    setHoveredMarker(null);
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={selectedCity ? 10 : 5}
      className={selectedCity ? "" : "city-map-full-width"}
    >
      {cities.map((city) => (
        <Marker
          key={city.name}
          position={city.position}
          onClick={() => handleMarkerClick(city)}
          onMouseOver={() => handleMarkerClick(city)}
          onMouseOut={handleMarkerMouseOut}
        >
          {hoveredMarker === city && (
            <InfoWindow onCloseClick={handleMarkerMouseOut}>
              <div>
                <h3>{city.name}</h3>
                <p>{city.info}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}

      {selectedCity && (
        <Marker
          position={selectedCity.position}
          onMouseOver={() => handleMarkerClick(selectedCity)}
          onMouseOut={handleMarkerMouseOut}
        />
      )}
    </GoogleMap>
  );
};
export default CityMap;

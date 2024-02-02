// App.js
import React, { useState } from "react";

import CitySidebar from "./CitySidebar";
import CityMap from "./CityMap";

const cities = [
  {
    name: "Delhi",
    position: { lat: 28.6139, lng: 77.209 },
    info: "New Delhi, historically known as Indraprastha, is the capital of India and a part of the National Capital Territory of Delhi. New Delhi is the seat of all three branches of the Government of India, hosting the Rashtrapati Bhavan, Sansad Bhavan, and the Supreme Court.",
    famousPlaces: ["India Gate", "Red Fort", "Qutub Minar"],
  },
  {
    name: "Mumbai",
    position: { lat: 19.076, lng: 72.8777 },
    info: "Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva.",
    famousPlaces: ["Gateway of India", "Marine Drive", "Elephanta Caves"],
  },
  {
    name: "Kolkata",
    position: { lat: 22.5726, lng: 88.3639 },
    info: "Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals.",
    famousPlaces: [
      "Victoria Memorial",
      "Howrah Bridge",
      "Dakshineswar Kali Temple",
    ],
  },
];

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
  };

  const handleCloseSidebar = () => {
    setSelectedCity(null);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <ul>
          <li key={"indi"} onClick={handleCloseSidebar}>
            IndiaMap
          </li>
          {cities.map((city) => (
            <li key={city.name}>
              <div
                key={city.name}
                onClick={() => handleSelectCity(city)}
                className="city-item"
              >
                {city.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CitySidebar selectedCity={selectedCity} onClose={handleCloseSidebar} />
      <CityMap selectedCity={selectedCity} cities={cities} />
    </div>
  );
};

export default App;

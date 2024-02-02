import React from 'react';


const CitySidebar = ({ selectedCity, onClose }) => {
  const isOpen = !!selectedCity;

  return (
    <div className={`city-sidebar ${isOpen ? 'open' : 'close'}`}>
      {isOpen && (
        <div>
          <h2>{selectedCity.name}</h2>
          <div className="city-info">{selectedCity.info}</div>
          <div className="famous-places">
            <h3>Famous Places</h3>
            <ul>
              {selectedCity.famousPlaces.map((place, index) => (
                <span key={index} className='famouplaces'>{place}</span>
              ))}
            </ul>
          </div>
        </div>
      )}
      {isOpen && <p onClick={onClose}>
      <img src="./image/close.png" alt="closebtn" className='closebtn'/>
      </p>}
    </div>
  );
};

export default CitySidebar;

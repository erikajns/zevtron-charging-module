import React, { createContext, useState } from 'react';

export const StationContext = createContext();

export const StationProvider = ({ children }) => {
  const [stationId, setStationId] = useState(null);

  return (
    <StationContext.Provider value={{ stationId, setStationId }}>
      {children}
    </StationContext.Provider>
  );
};

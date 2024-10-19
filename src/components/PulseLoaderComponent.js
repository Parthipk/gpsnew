import React from 'react';
import { PulseLoader } from 'react-spinners';
import './PulseLoaderComponent.css'; // Import the CSS file for styling

const PulseLoaderComponent = () => {
  return (
    <div className="loader">
      <PulseLoader color="#003366" />
    </div>
  );
};

export default PulseLoaderComponent;

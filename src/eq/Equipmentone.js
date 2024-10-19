// Equipmentone.js
import React from 'react';

import Parttwo from '../Product/Parttwo';

import ImgTexone from '../eq/ImgTexOne'
import FeOne from './FeOne';
import FormOne from './FormOne';
import Foot from '../comp/Foot';

import Oone from '../Product/Oone';





function Equipmentone() {
  return (
    <div className="equipmentone-container">
        <Parttwo/>
     <Oone/>
        <br></br><br></br><br></br><br></br><br></br>
       <ImgTexone/>
       <FeOne/>
       <br></br><br></br><br></br><br></br><br></br>
      <FormOne/>
      <br></br><br></br><br></br><br></br><br></br>
      <Foot/>
    </div>
  );
}

export default Equipmentone;

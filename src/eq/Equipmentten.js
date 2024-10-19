// Equipmentone.js
import React from 'react';

import Parttwo from '../Product/Parttwo';
import Partthree from '../Product/Partthree';

import Foot from '../comp/Foot';
import ImgTexTwo from './ImgTexTwo';
import FeTwo from './FeTwo';
import FormTwo from './FormTwo';






function Equipmentten() {
  return (
    <div className="equipmentone-container">
     
        <Parttwo/>
        <Partthree/>
        <br></br><br></br><br></br><br></br><br></br>
        <ImgTexTwo/>
        <FeTwo/>
       <br></br><br></br><br></br><br></br><br></br>
        <FormTwo/>
      <br></br><br></br><br></br><br></br><br></br>
      <Foot/>
    </div>
  );
}

export default Equipmentten;

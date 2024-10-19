// Equipmentone.js
import React from 'react';

import Parttwo from '../Product/Parttwo';
import Partthree from '../Product/Partthree';

import Foot from '../comp/Foot';
import ImgTexFive from './ImgTexFive';
import FeFive from './FeFive';
import FormFive from './FormFive';
import Five from '../Product/Five';






function Equipmentfive() {
  return (
    <div className="equipmentone-container">
        <Parttwo/>
        <Five/>
        <br></br><br></br><br></br><br></br><br></br>
        <ImgTexFive/>
        <FeFive/>
       <br></br><br></br><br></br><br></br><br></br>
        <FormFive/>
      <br></br><br></br><br></br><br></br><br></br>
      <Foot/>
    </div>
  );
}

export default Equipmentfive;

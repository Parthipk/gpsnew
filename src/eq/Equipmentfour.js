// Equipmentone.js
import React from 'react';

import Parttwo from '../Product/Parttwo';

import FeOne from './FeOne';
import FormFour from './FormFour';
import Foot from '../comp/Foot';
import Four from '../Product/Four';
import ImgTexFour from './ImgTexFour';
import FeFour from './FeFour';






function Equipmentfour() {
  return (
    <div className="equipmentone-container">
        <Parttwo/>
        
        <Four/>
        <br></br><br></br><br></br><br></br><br></br>
       <ImgTexFour/>
       <FeFour/>
       <br></br><br></br><br></br><br></br><br></br>
      <FormFour/>
      <br></br><br></br><br></br><br></br><br></br>
      <Foot/>
    </div>
  );
}

export default Equipmentfour;

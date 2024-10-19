// Equipmentone.js
import React from 'react';

import Parttwo from '../Product/Parttwo';
import Partthree from '../Product/Partthree';

import Foot from '../comp/Foot';
import ImgTexSix from './ImgTexSix';
import FeSix from './FeSix';
import FormSix from './FormSix';
import Six from '../Product/Six';






function Equipmentsix() {
  return (
    <div className="equipmentone-container">
        <Parttwo/>
        <Six/>
        <br></br><br></br><br></br><br></br><br></br>
        <ImgTexSix/>
        <FeSix/>
       <br></br><br></br><br></br><br></br><br></br>
        <FormSix/>
      <br></br><br></br><br></br><br></br><br></br>
      <Foot/>
    </div>
  );
}

export default Equipmentsix;

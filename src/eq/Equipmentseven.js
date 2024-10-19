// Equipmentone.js
import React from 'react';

import Parttwo from '../Product/Parttwo';
import Partthree from '../Product/Partthree';

import Foot from '../comp/Foot';
import ImgTexSeven from './ImgTexSeven';
import FeSeven from './FeSeven';
import FormSeven from './FormSeven';
import Seven from '../Product/Seven';


function Equipmentseven() {
  return (
    <div className="equipmentone-container">
        <Parttwo/>
        <Seven/>
        <br></br><br></br><br></br><br></br><br></br>
        <ImgTexSeven/>
        <FeSeven/>
       <br></br><br></br><br></br><br></br><br></br>
        <FormSeven/>
      <br></br><br></br><br></br><br></br><br></br>
      <Foot/>
    </div>
  );
}

export default Equipmentseven;

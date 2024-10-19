// Equipmentone.js
import React from 'react';

import Parttwo from '../Product/Parttwo';
import Partthree from '../Product/Partthree';

import Foot from '../comp/Foot';
import ImgTexTwo from './ImgTexThree';

import FormTwo from './FormTwo';
import ImgTexThree from './ImgTexThree';
import FeThree from './FeThree';
import Three from '../Product/Three';
import FormThree from './FormThree';






function Equipmentthree() {
  return (
    <div className="equipmentone-container">
    
        <Parttwo/>
        <Three/>
        <br></br><br></br><br></br><br></br><br></br>
        <ImgTexThree/>
        <FeThree/>
       <br></br><br></br><br></br><br></br><br></br>
       <FormThree/>
        
      <br></br><br></br><br></br><br></br><br></br>
      <Foot/>
    </div>
  );
}

export default Equipmentthree;

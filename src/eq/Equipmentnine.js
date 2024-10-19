// Equipmentone.js
import React from 'react';

import Parttwo from '../Product/Parttwo';
import Partthree from '../Product/Partthree';

import Foot from '../comp/Foot';

import FormTwo from './FormTwo';
import ImgTexNine from './ImgTexNine';
import FeNine from './FeNine';
import FormNine from './FormNine';
import Book from '../Product/Book';




function Equipmentnine() {
  return (
    <div className="equipmentone-container">
        <Parttwo/>
        <Book/>
        <br></br><br></br><br></br><br></br><br></br>
        <ImgTexNine/>
        <FeNine/>
       <br></br><br></br><br></br><br></br><br></br>
        <FormNine/>
      <br></br><br></br><br></br><br></br><br></br>
      <Foot/>
    </div>
  );
}

export default Equipmentnine;

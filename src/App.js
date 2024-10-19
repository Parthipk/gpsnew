import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navebar from './components/Navebar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import ImageAndTable from './components/ImageAndTable';
import Text from './components/Text';
import TextWithTables from './components/TextWithTables';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import LogoGallery from './components/LogoGallery';
import Dashboard from './components/Dashboard';
import Carousel from './components/Carousel';
import BoxDisplay from './components/BoxDisplay';
import Navbar_About from './comp/Navbar_About';
import Land_About from './comp/Land_About';
import Sectiontwo from './comp/Sectiontwo';
import Sectionthree from './comp/Sectionthree';
import Sectionfour from './comp/Sectionfour';
import Sectionfive from './comp/Sectionfive';
import SectionNew from './comp/SectionNew';
import Foot from './comp/Foot';
import Phaseone from './Patients/Phaseone';
import Phasetwo from './Patients/Phasetwo';
import Phasethree from './Patients/Phasethree';
import Phasefour from './Patients/Phasefour';
import Phasefive from './Patients/Phasefive';
import Phasesix from './Patients/Phasesix';
import Partone from './Product/Partone';
import Parttwo from './Product/Parttwo';
import Partthree from './Product/Partthree';
import Partfive from './Product/Partfive';
import Partsix from './Product/Partsix';
import Equipmentone from './eq/Equipmentone';
import Equipmenttwo from './eq/Equipmenttwo';
import Equipmentthree from './eq/Equipmentthree';
import Equipmentfour from './eq/Equipmentfour';
import Equipmentfive from './eq/Equipmentfive';
import Equipmentsix from './eq/Equipmentsix';
import Equipmentseven from './eq/Equipmentseven';
import Equipmenteigth from './eq/Equipmenteigth';
import Equipmentnine from './eq/Equipmentnine';
import Equipmentten from './eq/Equipmentten';
import M2 from './Provider/M2';
import M3 from './Provider/M3';
import M4 from './Provider/M4';
import Mone from './Provider/Mone';
import Sales from './comp/Sales';
import SalesNav from './comp/SalesNav';
import ProBook from './comp/ProBook';
import Blog1 from './Blogs/Blog1';
import Blog2 from './Blogs/Blog2';
import Blog3 from './Blogs/Blog3';
import Blog4 from './Blogs/Blog4';
import StickyIcons from './components/StickyIcons';
import Photo from './Provider/Photo';
import L1 from './Tower/L1';
import L2 from './Tower/L2';
import L3 from './Tower/L3';
import L5 from './Tower/L5';
import L4 from './Tower/L4';
import ScrollToTop from './components/ScrollToTop.js'; 
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  
  return (
    <Router>
         <ScrollToTop /> 
      <Routes>
        <Route path="/" element={
          <div>
            <Navebar />
            <LandingPage />
          
            
            <LogoGallery />
  
            <About />
            <div id="products">
            <Testimonial />
            </div>
            <br></br><br></br>
            <br></br><br></br><br></br>
            <TextWithTables />
            
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <BoxDisplay />
            <br></br><br></br>
            {/* <Dashboard /> */}
            {/* <Carousel /> */}
            <br></br><br></br>
            {/* <br></br><br></br><br></br> */}
            <Footer />
          </div>
        } />
        <Route path="/about-us" element={
          <>
            <Navbar_About />
            <Land_About />
            <br></br><br></br><br></br><br></br>
            <Sectiontwo />
            <br></br><br></br><br></br><br></br><br></br>
            <Sectionthree />
            <br></br><br></br><br></br>
            <Sectionfour />
            <SectionNew/>
            <br></br><br></br><br></br><br></br>
            <Foot />
          </>
        } />
    <Route path="/Tower" element={
          <div>
          <L1/>
          <L2/>
          <L4/>
          <L3/>
        
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <L5/>
          <br></br><br></br><br></br><br></br>
          <Foot />
          </div>
        } />





        <Route path="/ForPatients" element={
          <div>
            <Phaseone />
            <Phasetwo />
            <br></br><br></br><br></br><br></br>
            <Phasefour />
            <br></br><br></br><br></br><br></br>
            <Phasethree />
            <Phasefive />
            <br></br><br></br>
            <Phasesix />
            <br></br><br></br>
            {/* <Sectionfive /> */}
            <SectionNew/>
            <br></br><br></br><br></br><br></br><br></br>
            <Foot />
          </div>
        } />
        <Route path="/ForProduct" element={
          <>
            <Parttwo />
            <Partthree />
            <br></br><br></br><br></br><br></br><br></br>
            <Partone />
            <br></br><br></br><br></br><br></br><br></br>
            <Partfive />
            <Partsix />
            <br></br><br></br><br></br><br></br><br></br>
            <Foot />
          </>
        } />

  <Route path="/Privacy" element={  <PrivacyPolicy/>} />
        <Route path="/equipmentone" element={<Equipmentone />} />
        <Route path="/equipmenttwo" element={<Equipmenttwo />} />
        <Route path="/equipmentthree" element={<Equipmentthree />} />
        <Route path="/equipmentfour" element={<Equipmentfour />} />
        <Route path="/equipmentfive" element={<Equipmentfive />} />
        <Route path="/equipmentsix" element={<Equipmentsix />} />
        <Route path="/equipmentseven" element={<Equipmentseven />} />
        <Route path="/equipmenteigth" element={<Equipmenteigth />} />
        <Route path="/equipmentnine" element={<Equipmentnine />} />
        <Route path="/equipmentten" element={<Equipmentten />} />


        <Route path="/ForProviders" element={
          <>
            <Mone />
            <M2 />
            <br></br><br></br><br></br><br></br>
            <M3 />
            <br></br>
            <M4 />
            <br></br><br></br><br></br><br></br>
            <Photo/>
            <br></br><br></br><br></br><br></br>
            <Sectionfive />
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <Foot />
          </>
        } />
        <Route path="/appointment" element={<Equipmentnine />} />
        <Route path="/Sales" element={
          <>
            <SalesNav />
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <Sales />
          </>
        } />
        <Route path="/ProBook" element={<ProBook />} />
        <Route path="/blog" element={<Blog1 />} />
        <Route path="/blog1" element={<Blog2 />} />
        <Route path="/blog2" element={<Blog3 />} />
        <Route path="/blog3" element={<Blog4 />} />
      </Routes>

   
      <StickyIcons />

    </Router>
  );
}

export default App;

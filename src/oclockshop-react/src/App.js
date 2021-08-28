import React from 'react';
import './assets/css/app.css';
/*import Header from './components/Header';
import CarouselOclock from './components/CorouselOclock';
import Products from './components/Products';
import Dashboard from './components/Dashboard';*/
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';


function App() {
  return (
    
      <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    </React.Fragment>
     
    
  );
}

export default App;

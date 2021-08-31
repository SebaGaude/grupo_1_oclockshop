import React from 'react';
import './assets/css/app.css';
import ContentWrapper from './components/ContentWrapper';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
      <Router>
          <React.Fragment>
            <div id="wrapper">
              <ContentWrapper />
            </div>
        </React.Fragment>
      </Router>
     
    
  );
}

export default App;

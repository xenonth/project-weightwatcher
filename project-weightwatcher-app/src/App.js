import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
// imported for user authentication


//import page files 
import Header from "./components/navbar"
import PBoard from "./components/gyprockButtons/PBoard"
import WRBoard from "./components/gyprockButtons/WRBoard"
import Unispan from './components/gyprockButtons/Unispan';
import Villa from './components/gyprockButtons/Villa';

function App() {
  
  return (
    <Router>
      <Header />
        <Route exact path="/pboard" component={PBoard}/>
        <Route exact path="/wrboard" component={WRBoard}/>
        <Route exact path="/unispan" component={Unispan}/>
        <Route exact path="/villa" component={Villa} />
    </Router>
  );
  
}

export default App;

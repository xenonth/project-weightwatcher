import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
// imported for user authentication


//import page files 
import Header from "./components/navbar"
import PBoard from "./components/gyprockButtons/PBoard"

function App() {
  
  return (
    <Router>
      <Header />
        <Route exact path="/pboard" component={PBoard}/>
    </Router>
  );
  
}

export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import PortFolioDetails from './components/PortFolioDetails/PortFolioDetails';
import Error404 from './components/404/404';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Portfolio/Portfolio"  element={<PortFolioDetails />} />
          <Route path='/Portfolio' element={<Home />} />
          <Route path='/Portfolio/*' element={<Error404 />}/>
        </Routes>

      </Router>

    </>
  )
}

export default App
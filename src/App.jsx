import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import PortFolioDetails from './components/PortFolioDetails/PortFolioDetails';


const App = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/Portfolio/Portfolio/" element={<PortFolioDetails />} />
          <Route path='/Portfolio' element={<Home />} />
        </Routes>

      </Router>

    </>
  )
}

export default App
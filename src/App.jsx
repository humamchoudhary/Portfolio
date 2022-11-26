import React from 'react'
import {
  HashRouter,
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
      <HashRouter>
        <Routes>
          <Route path="/Portfolio/Portfolio"  element={<PortFolioDetails />} />
          <Route path='/Portfolio' element={<Home />} />
          <Route path='/Portfolio/*' element={<Error404 />}/>
        </Routes>

      </HashRouter>

    </>
  )
}

export default App
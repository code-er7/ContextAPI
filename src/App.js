import React from "react";
import CustomCom from "./components/CustomCom";
import Items from "./components/Items";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Kart from "./components/Kart";


const App = () => {
  return (
     <Router>
       <Routes>
          <Route path="/" element={ <Items/>}/>
          <Route path="/kart" element={<Kart/>}/>
       </Routes>
     </Router>
  );
};

export default App;

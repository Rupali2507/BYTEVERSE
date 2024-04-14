import { BrowserRouter , Route , Routes} from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg.js";
import Layout from "./components/pages/layout.js"
import Home from "./components/pages/Home.js"
import CONTACT from "./components/pages/CONTACT.js";




function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route  index element={<Home/>} />
       <Route path="CONTACT" element ={<CONTACT/>} />
        <Route path="loginreg" element={<LoginReg/>} />
       
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

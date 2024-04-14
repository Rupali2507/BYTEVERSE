import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg.js";
import Layout from "./components/pages/layout.js"
import Home from "./components/pages/Home.js"
import CONTACT from "./components/pages/CONTACT.js";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail.js";
import ResetPassword from "./components/pages/auth/ResetPassword.js";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="CONTACT" element={<CONTACT />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
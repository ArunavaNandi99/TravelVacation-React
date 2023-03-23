import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from "./components/welcome/Welcome";
import SignIn from "./components/signIn/Signin";
import Signup from "./components/signup/Signup";

import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div classNama="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          <Route exact path="/signin" element={<SignIn/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

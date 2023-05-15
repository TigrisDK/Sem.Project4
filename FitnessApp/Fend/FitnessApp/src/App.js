import React from 'react';
import Main from './Components/Main';
import {Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Calories from './Components/Calories';
import Activity from './Components/Activity';
import "./Components/NavBar.css"
import Logout from './Components/Logout';
import Tracking from './Components/Tracking';
import PrivateRoutes from './Components/PrivateRoute';
import SignUp from './SignUp';
import TrainingsProgram from './Components/TrainingsPrograms';
import User from './Components/User';


function App() {
  const token = localStorage.getItem("token")

   //if(!token){
    // return <Login/>
   // }
   

  return (
    <>
    <nav>
    <img src='/images/FA.png' alt='FitnessApp' height={42} ></img>
      <u1>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/User">User</Link></li>
        <li><Link to="/Calories">Calories</Link></li>
        <li><Link to="/Activity">Activity</Link></li>
        <li><Link to="/Tracking">Tracking</Link></li>
        <li><Link to="/TrainingsPrograms">TrainingPrograms</Link></li>
        <li><Link to="/SignUp">SignUp</Link></li>
        <li><Link to="/Logout">Logout</Link></li>
      </u1>
    </nav>
    <Routes>
      <Route element={<PrivateRoutes/>}>
      </Route>
      <Route path="/User" element={<User/>} ></Route>
      <Route path="/Activity" element={<Activity/>} ></Route>
      <Route path="/Calories" element={<Calories/>} ></Route>
      <Route path="/" element={<Main/>} ></Route>
      <Route path="/Tracking" element={<Tracking/>} ></Route>
      <Route path="/Logout" element={<Logout/>} ></Route>
      <Route path="/Login" element={<Login/>} ></Route>
      <Route path="/SignUp" element={<SignUp/>} ></Route>
      <Route path="/TrainingsPrograms" element={<TrainingsProgram/>} ></Route>
    </Routes>
    </>

    
  );
}

export default App;

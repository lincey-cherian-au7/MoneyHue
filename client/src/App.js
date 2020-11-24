import React from 'react';
import './App.css';
//import SignUp from './Components/SignUp/SignUp';
// import SignIn from './Components/SignIn/SignIn'
import Navigation from './Components/Navigation/Navigation'
// import LoanApplication from './Components/LoanApplication/LoanApplication';
//import MainPage from './Components/MainPage/MainPage';
import HomePage from  './Components/HomePage/HomePage'



function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <SignIn/> */}
      {/* <MainPage/ */}
      {/* <LoanApplication/> */}
      <HomePage/>
    </div>
  );
}

export default App;

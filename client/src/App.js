import React from 'react';
import './App.css';
//import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn'
import Navigation from './Components/Navigation/Navigation'
import MainPage from './Components/MainPage/MainPage';


function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <SignIn/> */}
      <MainPage/>
    </div>
  );
}

export default App;

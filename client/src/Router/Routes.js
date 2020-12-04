import React from 'react';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Navigation from '../Components/Navigation/Navigation';
import FooterCard from '../Components/FooterCard/FooterCard'
import SignUp from '../Components/SignUp/SignUp';
import Main from '../Components/MainPage/MainPage'
import SignIn from  '../Components/SignIn/SignIn'

const  Routes=()=> {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/register'exact component={SignUp}/>
                <Route path='/login'exact component={SignIn}/>

            </Switch>
            <FooterCard/>
        </BrowserRouter>
        
    )
}

export default Routes

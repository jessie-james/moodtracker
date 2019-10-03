import React from "react"
import {Route, Switch} from "react-router-dom"
import Nav from "./Nav";
import Login from './Auth/login';
import './moodtrackmain.css'
import Signup from "./Auth/signup";
import TherapistDash from "./TherapistSide";
import AddClient from "./TherapistSide/AddClientSurvey/index.js"
import CreateSurvey from "./TherapistSide/AddClientSurvey/CreateSurvey.js"
import ClientProfile from "./TherapistSide/CurrentClients/ClientProfile"
// import ClientProfile from './TherapistSide/CurrentClients/FullProfile/ClientProfile.js'
import ProtectedRoute from "./Auth/ProtectedRoute";


function App() {
    return (
        <div className="app-wrapper">
            <Nav/>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/therapistdashboard" component={TherapistDash} />
                <ProtectedRoute path="/addclient" component={AddClient} />
                <ProtectedRoute path="/addsurvey" component={CreateSurvey} />
                <ProtectedRoute path="/clientProfile/:_id/" component ={ClientProfile}/>
                <Route exact path="/" component={Login}/>
            </Switch>
        </div>
    )
}

export default App;

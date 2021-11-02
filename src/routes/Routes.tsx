import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import DoctorViewEmptyState from "../components/doctorViews/DoctorViewEmptyState";
import RestorePassword from "../components/restorePassword/RestorePassword";
import SendEmail from "../components/sendEmail/SendEmail";
import SignIn from "../components/signIn/SignIn";
import SignUp from "../components/signUp/SignUp";
import Error404 from "../components/error404/Error404";

export const PATH = {
    PATIENTS: '/patients',
    RESTORE_PASSWORD: '/restore-password',
    SEND_EMAIL: '/send-email',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.PATIENTS}/>}/>
                <Route path={PATH.PATIENTS} render={() => <DoctorViewEmptyState/>}/>
                <Route path={PATH.RESTORE_PASSWORD} render={() => <RestorePassword/>}/>
                <Route path={PATH.SEND_EMAIL} render={() => <SendEmail/>}/>
                <Route path={PATH.SIGN_IN} render={() => <SignIn/>}/>
                <Route path={PATH.SIGN_UP} render={() => <SignUp/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
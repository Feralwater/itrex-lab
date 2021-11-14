import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import RestorePassword from "../component/restorePassword/RestorePassword";
import SendEmail from "../component/sendEmail/SendEmail";
import SignIn from "../component/signIn/SignIn";
import SignUp from "../component/signUp/SignUp";
import Error404 from "../component/error404/Error404";
import DoctorViewTemplate from "../component/doctorViews/doctorViewTemplate/DoctorViewTemplate";
import AppointmentsTemplate from "../component/appointments/AppointmentsTemplate";
import MakeAppointment from "../component/appointments/MakeAppointment";
import {TIME_SLOTS} from "../mockData/doctors";

export const PATH = {
    PATIENTS: '/patients',
    RESTORE_PASSWORD: '/restore-password',
    SEND_EMAIL: '/send-email',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    APPOINTMENTS: '/appointments',
    MAKE_APPOINTMENT: '/make-an-appointment',
}

function Routes() {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PATH.PATIENTS}/>}/>
            <Route path={PATH.PATIENTS} render={() => <DoctorViewTemplate/>}/>
            <Route path={PATH.RESTORE_PASSWORD} render={() => <RestorePassword/>}/>
            <Route path={PATH.SEND_EMAIL} render={() => <SendEmail email={"example@exam.com"}/>}/>
            <Route path={PATH.SIGN_IN} render={() => <SignIn/>}/>
            <Route path={PATH.SIGN_UP} render={() => <SignUp/>}/>
            <Route path={PATH.APPOINTMENTS} render={() => <AppointmentsTemplate/>}/>
            <Route path={PATH.MAKE_APPOINTMENT} render={() => <MakeAppointment timeSlots={TIME_SLOTS}/>}/>
            <Route render={() => <Error404/>}/>
        </Switch>
    )
}

export default Routes
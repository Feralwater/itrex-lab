"use strict";

import Error404 from "./views/pages/error404.js";
import LoginController from "./controllers/login-controller.js";
import DoctorController from "./controllers/doctor-controller.js";
import {parseRequestURL} from './services/Utils.js'

const loginController = new LoginController
const doctorController = new DoctorController

const routes = {
    '/patients': {
        controller: doctorController,
        method: 'patients'
    },
    '/sign-in': {
        controller: loginController,
        method: 'singIn'
    },
    '/sign-up': {
        controller: loginController,
        method: 'singUp'
    },
    '/restore-password': {
        controller: loginController,
        method: 'restorePassword'
    },
    '/send-email': {
        controller: loginController,
        method: 'sendEmail'
    },
};

const error = {
    controller: Error404,
    method: 'error'
}

const router = async () => {
    const root = document.getElementById('root');
    const request = parseRequestURL()
    const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')//
    const rout = routes[parsedURL] ? routes[parsedURL] : error
    root.innerHTML = await rout.controller.render(rout.method);
    rout.controller.afterRender();
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);

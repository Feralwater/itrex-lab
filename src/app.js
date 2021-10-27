"use strict";

import SignIn from './views/pages/sign-in.js'
import SignUp from './views/pages/sign-up.js'
import RestorePassword from './views/pages/restore-password.js'
import SendEmail from './views/pages/send-email.js'


import Utils from './services/Utils.js'
import Error404 from "./views/pages/error404.js";
import Patients from "./views/pages/patients.js";

const routes = {
    '/patients': Patients,
    '/sign-in': SignIn,
    '/sign-up': SignUp,
    '/restore-password': RestorePassword,
    '/send-email': SendEmail,
};

const router = async () => {
    const root = document.getElementById('root');
    const request = Utils.parseRequestURL()
    const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')//
    const page = routes[parsedURL] ? routes[parsedURL] : Error404
    root.innerHTML = await page.render();
    await page.after_render();

}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);

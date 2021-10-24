"use strict";

// import Home from './views/doctor-view.patients.empty-state.html'
// import SignIn from './views/pages/About.js'
// import SignUp from './views/pages/PostShow.js'
// import Register from './views/pages/Register.js'
// import RestorePassword from './views/pages/error404.js'
// import SetResetLink from './views/components/Navbar.js'


import Utils from './services/Utils.js'
import Error404 from "./views/pages/error404.js";
import Patients from "./views/pages/patients.js";

const routes = {
    // '/home/:id': Home,
    '/patients': Patients,
    // '/sign-in': SignIn,
    // '/signup': SignUp,
    // '/register': Register,
    // '/restorepassword': RestorePassword,
    // '/setresetlink': SetResetLink,
};

const router = async () => {
    const root = document.getElementById('root');
    const request = Utils.parseRequestURL()
    const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    const page = routes[parsedURL] ? routes[parsedURL] : Error404
    root.innerHTML = await page.render();
    await page.after_render();

}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);

import BaseController from "./base-controller.js";
import authorizationLayouts from '../views/layouts/authorization.js'
import userModel from '../models/user-model.js'
import SignInView from '../views/pages/sign-in.js'
import SignUpView from '../views/pages/sign-up.js'
import RestorePasswordView from "../views/pages/restore-password.js";
import SendEmailView from "../views/pages/send-email.js";

export default class LoginController extends BaseController {
    constructor() {
        super();
        this.layout = authorizationLayouts;
        this.models = userModel
    }

    singIn() {
        return this.renderView(SignInView, this.models.getPatients())
    }

    singUp() {
        return this.renderView(SignUpView, this.models.getPatients())
    }

    restorePassword() {
        return this.renderView(RestorePasswordView, this.models.getPatients())
    }

    sendEmail() {
        return this.renderView(SendEmailView, this.models.getPatients())
    }

}
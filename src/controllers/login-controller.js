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

    async singIn() {
        return await this.renderView(SignInView, this.models.getPatients())
    }

    async singUp() {
        return await this.renderView(SignUpView, this.models.getPatients())
    }

    async restorePassword() {
        return await this.renderView(RestorePasswordView, this.models.getPatients())
    }

    async sendEmail() {
        return await this.renderView(SendEmailView, this.models.getPatients())
    }

}
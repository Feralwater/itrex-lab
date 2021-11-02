import BaseController from "./base-controller.js";
import mainLayouts from "../views/layouts/main.js";
import userModel from "../models/user-model.js";
import PatientsView from "../views/pages/patients.js";

export default class DoctorController extends BaseController {
    constructor() {
        super();
        this.layout = mainLayouts;
        this.models = userModel
    }

    patients() {
        return this.renderView(PatientsView, this.models.getPatients())
    }
}
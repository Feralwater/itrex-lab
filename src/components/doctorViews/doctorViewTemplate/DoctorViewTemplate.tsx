import React from 'react';
import Header from "../../header/Header";
import style from "./DoctorViewTemplate.module.scss"
import {getPatients} from "../../../actions/patients";
import DoctorViewFullState from "../doctorViewFullState/DoctorViewFullState";
import DoctorViewEmptyState from "../doctorViewEmptyState/DoctorViewEmptyState";
import PatientsContainerHeader from "./patientsContainerHeader/PatientsContainerHeader";

const DoctorViewTemplate = () => {
    const patients = getPatients()
    return (
        <>
            <Header/>
            <div className={style.body}>
                <main className={style.bodyDoctorView}>
                    <div className={style.patients}>
                        <PatientsContainerHeader/>
                        <div
                            className={patients.length > 0 ? style.patients__container : style.patients__container_empty}>
                            {patients.length > 0 ? <DoctorViewFullState patients={patients}/> : <DoctorViewEmptyState/>}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default DoctorViewTemplate;
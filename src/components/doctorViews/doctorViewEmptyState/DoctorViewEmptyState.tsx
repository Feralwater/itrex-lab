import React from 'react';
import {ReactComponent as MedicalHistory} from '../../svgImages/medical-history.svg';
import style from './DoctorViewEmptyState.module.scss'

const DoctorViewEmptyState = () => {
    return (
        <div className={style.patients_empty__container}>
            <div className={style.patients__medical_history}>
                <MedicalHistory/>
                <div className={style.patients__medical_history_text}>
                    <span>You have no patients yet.</span>
                    <span>To create a patient profile, please contact your administrator.</span>
                </div>
            </div>
        </div>
    );
};

export default DoctorViewEmptyState;
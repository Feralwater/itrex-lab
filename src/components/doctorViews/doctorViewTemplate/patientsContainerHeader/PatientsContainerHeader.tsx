import React from 'react';
import style from './PatientsContainerHeader.module.scss'

const PatientsContainerHeader = () => {
    return (
        <>
            <div className={style.patients__buttons_container}>
                <a href="#" className={[style.patients__btn, style.patients__btn_blue].join(' ')}>Patients</a>
                <a href="#" className={[style.patients__btn, style.patients__btn_white].join(' ')}>Resolutions</a>
            </div>
            <div className={style.patients__header}>
                <h1 className={style.patients__title}>my patients</h1>
            </div>
        </>
    );
};

export default PatientsContainerHeader;
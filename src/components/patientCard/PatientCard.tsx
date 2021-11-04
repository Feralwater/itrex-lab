import React from 'react';
import {PatientType} from "../doctorViews/doctorViewFullState/DoctorViewFullState";
import {ReactComponent as Clock} from '../../svgImages/clock-icon.svg';
import {ReactComponent as Board} from '../../svgImages/board-icon.svg';
import {statuses} from "../../actions/patients";
import style from "./PatientCard.module.scss"

const PatientCard: React.VFC<PatientType> = ({
                                                 avatar,
                                                 firstName,
                                                 lastName,
                                                 status,
                                                 time,
                                                 description,
                                             }) => {
    const statusClasses = {
        [statuses.confirmed]: style.patient__confirm_green,
        [statuses.canceled]: style.patient__confirm_red,
        [statuses.waiting]: style.patient__confirm_blue,
    }
    const statusDescriptionClasses = {
        [statuses.confirmed]: "Appointment is confirmed",
        [statuses.canceled]: "Appointment is canceled",
        [statuses.waiting]: "Waiting for confirmation...",
    }
    return (
        <div className={style.patient__card}>
            <div className={style.patient__header}>
                <div className={style.patient__info}>
                    <img className={style.patient__info_image} src={avatar} alt="user avatar"/>
                    <div className={style.patient__data}>
                        <p className={style.patient__name}>{firstName + " " + lastName}</p>
                        <div className={style.patient__status}>
                            <div className={style.patient__confirm + " " + statusClasses[status]}/>
                            <div>{statusDescriptionClasses[status]}</div>
                        </div>
                    </div>
                </div>
                <button className={style.patient__settings_button}/>
            </div>
            <div className={style.patient__body}>
                <div className={style.patient__time}>
                    <div className={style.patient__time_icon}>
                        <Clock/>
                    </div>
                    <div className={style.patient__time_text}>{time}</div>
                </div>
                <div className={description ? style.patient__description : style.patient__description_empty}>
                    <div className={style.patient__description_icon}>
                        <Board/>
                    </div>
                    <div className={style.patient__description_text}>{description}</div>
                </div>
            </div>
        </div>
    );
};

export default PatientCard;
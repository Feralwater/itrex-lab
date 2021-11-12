import React from 'react';
import {PatientType} from "../doctorViews/doctorViewFullState/DoctorViewFullState";
import {ReactComponent as Clock} from '../../svgImages/clock-icon.svg';
import {ReactComponent as Board} from '../../svgImages/board-icon.svg';
import {ReactComponent as Heart} from '../../svgImages/heart-icon.svg';
import {statuses} from "../../mockData/patients";
import {
    AppointmentStatus,
    SettingsButton,
    UserCard,
    UserCardBody, UserCardBodyAppointmentConfirm, UserCardBodyDescription, UserCardBodyDescriptionText,
    UserCardBodyTime,
    UserCardBodyTimeText,
    UserCardHeader,
    UserCardImageContainer,
    UserCardName,
    UserData,
    UserInformation,
} from "./PatientCardStyles";
import {UserImage, UserImageContainer, UserName} from '../header/HeaderStyles';
import Button from "../button/Button";

const PatientCard: React.VFC<PatientType> = ({
                                                 avatar,
                                                 firstName,
                                                 lastName,
                                                 status,
                                                 time,
                                                 description,
                                                 role
                                             }) => {
    const statusColor = {
        [statuses.confirmed]: '#34C197',
        [statuses.canceled]: '#FF2567',
        [statuses.waiting]: '#7297FF',
    }
    const statusDescription = {
        [statuses.confirmed]: "Appointment is confirmed",
        [statuses.canceled]: "Appointment is canceled",
        [statuses.waiting]: "Waiting for confirmation...",
    }

    function isStatus(status: string | undefined) {
        if (status) {
            return (
                <>
                    <UserCardBodyAppointmentConfirm color={statusColor[status]}/>
                    <div>{statusDescription[status]}</div>
                </>)
        } else {
            return <div>{"Therapist"}</div>
        }
    }

    return (
        <UserCard>
            <UserCardHeader>
                <UserData>
                    <UserCardImageContainer>
                        <UserImage src={avatar} alt="user avatar"/>
                    </UserCardImageContainer>
                    <UserInformation>
                        <UserCardName>{firstName + " " + lastName}</UserCardName>
                        <AppointmentStatus>
                            {isStatus(status)}
                        </AppointmentStatus>
                    </UserInformation>
                </UserData>
                <Button type={"button"} onClick={() => {
                }} styledComponent={SettingsButton}/>
            </UserCardHeader>
            <UserCardBody>
                <UserCardBodyTime>
                    <Clock/>
                    <UserCardBodyTimeText>{time}</UserCardBodyTimeText>
                </UserCardBodyTime>
                <UserCardBodyDescription isDescription={description.length > 0}>
                    {role === "doctor" ? <Board/> : <Heart/>}
                    <UserCardBodyDescriptionText>{description}</UserCardBodyDescriptionText>
                </UserCardBodyDescription>
            </UserCardBody>
        </UserCard>
    );
};

export default PatientCard;
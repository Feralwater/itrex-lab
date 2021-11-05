import React from 'react';
import {PatientType} from "../doctorViews/doctorViewFullState/DoctorViewFullState";
import {ReactComponent as Clock} from '../../svgImages/clock-icon.svg';
import {ReactComponent as Board} from '../../svgImages/board-icon.svg';
import {statuses} from "../../actions/patients";
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
                            <UserCardBodyAppointmentConfirm color={statusColor[status]}/>
                            <div>{statusDescription[status]}</div>
                        </AppointmentStatus>
                    </UserInformation>
                </UserData>
                <Button type={"button"} onClick={() => {
                }} styledComponent={SettingsButton}/>
            </UserCardHeader>
            <UserCardBody>
                <UserCardBodyTime>
                    <div>
                        <Clock/>
                    </div>
                    <UserCardBodyTimeText>{time}</UserCardBodyTimeText>
                </UserCardBodyTime>
                <UserCardBodyDescription isDescription={description.length > 0}>
                    <div>
                        <Board/>
                    </div>
                    <UserCardBodyDescriptionText>{description}</UserCardBodyDescriptionText>
                </UserCardBodyDescription>
            </UserCardBody>
        </UserCard>
    );
};

export default PatientCard;
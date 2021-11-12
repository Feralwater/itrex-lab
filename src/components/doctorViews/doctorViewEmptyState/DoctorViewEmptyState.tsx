import React from 'react';
import {ReactComponent as MedicalHistory} from '../../../svgImages/medical-history.svg';
import {MedicalHistoryContainer, MedicalHistoryText} from "./DoctorViewEmptyStateStyles";
import {dictionary} from "../../../dictionary/dictionary";

const DoctorViewEmptyState = () => {
    return (
        <>
            <MedicalHistoryContainer>
                <MedicalHistory/>
                <MedicalHistoryText>
                    <span>{dictionary.doctorViewEmptyState.medicalHistoryTextPart1}</span>
                    <span>{dictionary.doctorViewEmptyState.medicalHistoryTextPart2}</span>
                </MedicalHistoryText>
            </MedicalHistoryContainer>
        </>
    );
};

export default DoctorViewEmptyState;
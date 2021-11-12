import React, {useState} from 'react';
import {ReactComponent as SuccessIcon} from '../../svgImages/check-circle.svg';
import {ReactComponent as ErrorIcon} from '../../svgImages/error-icon.svg';
import {ReactComponent as Close} from '../../svgImages/close-icon.svg';
import Button from "../button/Button";
import {
    CloseButton,
    ErrorMessageBody,
    ErrorMessageTitle,
    ErrorMessageText,
    ErrorMessageTitleText
} from "./MessageStyles";
import {dictionary} from "../../dictionary/dictionary";

type MessageTemplatePropsType = {
    isSuccess: boolean
}

const MessageTemplate: React.VFC<MessageTemplatePropsType> = ({isSuccess}) => {

    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(true);

    return (<>
        {showErrorMessage &&
        (<ErrorMessageBody isSuccess={isSuccess}>
            <ErrorMessageTitle>
                {isSuccess ? <SuccessIcon/> : <ErrorIcon/>}
                {isSuccess
                    ? <ErrorMessageTitleText>{dictionary.messageTemplate.messageTitleSuccess}</ErrorMessageTitleText>
                    : <ErrorMessageTitleText>{dictionary.messageTemplate.messageTitleError}</ErrorMessageTitleText>
                }
                <Button type={"button"} onClick={() => setShowErrorMessage(false)}
                        styledComponent={CloseButton}><Close/></Button>
            </ErrorMessageTitle>
            <ErrorMessageText>
                {isSuccess
                    ? dictionary.messageTemplate.successMessageText
                    : dictionary.messageTemplate.errorMessageText
                }
            </ErrorMessageText>
        </ErrorMessageBody>)}
    </>);
};

export default MessageTemplate;

import React, {useState} from 'react';
import {ReactComponent as SuccessIcon} from '../../svgImages/check-circle.svg';
import {ReactComponent as ErrorIcon} from '../../svgImages/error-icon.svg';
import {ReactComponent as Close} from '../../svgImages/close-icon.svg';
import {
    CloseButton,
    ErrorMessageBody,
    ErrorMessageTitle,
    ErrorMessageText,
    ErrorMessageTitleText
} from "./Message.styles";
import {MessagePropsType} from "./Message.types";
import {dictionary} from "../../dictionary/dictionary";


const Message: React.VFC<MessagePropsType> = ({isSuccess}) => {

    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(true);

    return (<>
        {showErrorMessage &&
        (<ErrorMessageBody isSuccess={isSuccess}>
            <ErrorMessageTitle>
                {isSuccess ? <SuccessIcon/> : <ErrorIcon/>}
                {isSuccess
                    ? <ErrorMessageTitleText>{dictionary.message.messageTitleSuccess}</ErrorMessageTitleText>
                    : <ErrorMessageTitleText>{dictionary.message.messageTitleError}</ErrorMessageTitleText>
                }
                <CloseButton onClick={() => setShowErrorMessage(false)}><Close/></CloseButton>
            </ErrorMessageTitle>
            <ErrorMessageText>
                {isSuccess
                    ? dictionary.message.successMessageText
                    : dictionary.message.errorMessageText
                }
            </ErrorMessageText>
        </ErrorMessageBody>)}
    </>);
};

export default Message;
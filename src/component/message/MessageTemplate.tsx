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
} from "./MessageStyles";

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
                    ? <ErrorMessageTitleText>Success message goes here</ErrorMessageTitleText>
                    : <ErrorMessageTitleText>Error message goes here</ErrorMessageTitleText>
                }
                <CloseButton onClick={() => setShowErrorMessage(false)}><Close/></CloseButton>
            </ErrorMessageTitle>
            <ErrorMessageText>
                {isSuccess
                    ? "We show this message if something awesome has happened. You are awesome too"
                    : "We show this message if something irreparable has happened. But there is nothing irreparable"
                }
            </ErrorMessageText>
        </ErrorMessageBody>)}
    </>);
};

export default MessageTemplate;
import { Dispatch, SetStateAction } from 'react';

export interface NotificationProps {
    isSuccess: boolean
    message: string
    showNotification: boolean
    setShowNotification: Dispatch<SetStateAction<boolean>>;
}

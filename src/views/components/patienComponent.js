import {statuses} from "../../models/user-model.js";


const patientComponent = {
    render: ({
                       avatar,
                       firstName,
                       lastName,
                       status,
                       time,
                       description,
                   }) => {
        const statusClasses = {
            [statuses.confirmed]: 'patient__confirm_green',
            [statuses.canceled]: 'patient__confirm_red',
            [statuses.waiting]: 'patient__confirm_blue',
        }
        const statusDescriptionClasses = {
            [statuses.confirmed]: "Appointment is confirmed",
            [statuses.canceled]: "Appointment is canceled",
            [statuses.waiting]: "Waiting for confirmation...",
        }
        return `
            <div class="patient__card">
                <div class="patient__header">
                    <div class="patient__info">
                        <img class="patient__info-image" src="${avatar}" alt="user avatar">
                        <div class="patient__data">
                            <p class="patient__name">${firstName + " " + lastName}</p>
                            <div class="patient__status">
                                <div class="patient__confirm ${statusClasses[status]}"></div>
                                <div>${statusDescriptionClasses[status]}</div>
                            </div>
                        </div>
                    </div>
                    <button class="patient__settings-button"></button>
                </div>
                <div class="patient__body">
                    <div class="patient__time">
                        <div class="patient__time_icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 9V9.5H11H13C13.1326 9.5 13.2598 9.55268 13.3536 9.64645C13.4473 9.74022 13.5 9.86739 13.5 10C13.5 10.1326 13.4473 10.2598 13.3536 10.3536C13.2598 10.4473 13.1326 10.5 13 10.5H10C9.86739 10.5 9.74022 10.4473 9.64645 10.3536C9.55268 10.2598 9.5 10.1326 9.5 10V5C9.5 4.86739 9.55268 4.74022 9.64645 4.64645C9.74022 4.55268 9.86739 4.5 10 4.5C10.1326 4.5 10.2598 4.55268 10.3536 4.64645C10.4473 4.74022 10.5 4.86739 10.5 5V9ZM4.72208 2.10104C6.28435 1.05717 8.12108 0.5 10 0.5C11.2476 0.5 12.4829 0.745725 13.6355 1.22314C14.7881 1.70056 15.8354 2.40033 16.7175 3.28249C17.5997 4.16464 18.2994 5.21191 18.7769 6.36451C19.2543 7.5171 19.5 8.75244 19.5 10C19.5 11.8789 18.9428 13.7157 17.899 15.2779C16.8551 16.8402 15.3714 18.0578 13.6355 18.7769C11.8996 19.4959 9.98946 19.684 8.14664 19.3175C6.30382 18.9509 4.61108 18.0461 3.28249 16.7175C1.95389 15.3889 1.0491 13.6962 0.68254 11.8534C0.31598 10.0105 0.504112 8.1004 1.22314 6.36451C1.94218 4.62861 3.15982 3.14491 4.72208 2.10104ZM5.27765 17.0675C6.67547 18.0015 8.31886 18.5 10 18.5C12.2543 18.5 14.4163 17.6045 16.0104 16.0104C17.6045 14.4163 18.5 12.2543 18.5 10C18.5 8.31886 18.0015 6.67547 17.0675 5.27765C16.1335 3.87984 14.806 2.79037 13.2528 2.14702C11.6996 1.50368 9.99057 1.33535 8.34173 1.66333C6.69289 1.9913 5.17834 2.80085 3.98959 3.98959C2.80085 5.17834 1.9913 6.69289 1.66333 8.34173C1.33535 9.99057 1.50368 11.6996 2.14702 13.2528C2.79037 14.806 3.87983 16.1335 5.27765 17.0675Z" fill="white" stroke="#DCE0EC"/>
                            </svg>
                        </div>
                        <div class="patient__time_text">${time}</div>
                    </div>
                    <div class=${description ? "patient__description" : "no-patient__description"}>
                        <div class="patient__description_icon">
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 2V2.5H12H13C13.663 2.5 14.2989 2.76339 14.7678 3.23223C15.2366 3.70107 15.5 4.33696 15.5 5V17C15.5 17.663 15.2366 18.2989 14.7678 18.7678C14.2989 19.2366 13.663 19.5 13 19.5H3C2.33696 19.5 1.70107 19.2366 1.23223 18.7678C0.763392 18.2989 0.5 17.663 0.5 17V5C0.5 4.33696 0.763392 3.70107 1.23223 3.23223C1.70107 2.76339 2.33696 2.5 3 2.5H4H4.5V2C4.5 1.60218 4.65804 1.22064 4.93934 0.93934C5.22064 0.658035 5.60218 0.5 6 0.5H10C10.3978 0.5 10.7794 0.658035 11.0607 0.93934C11.342 1.22064 11.5 1.60218 11.5 2ZM6 1.5H5.5V2V4V4.5H6H10H10.5V4V3V2V1.5H10H6ZM4.5 4V3.5H4H3C2.60217 3.5 2.22064 3.65804 1.93934 3.93934C1.65804 4.22064 1.5 4.60218 1.5 5V17C1.5 17.3978 1.65804 17.7794 1.93934 18.0607C2.22065 18.342 2.60218 18.5 3 18.5H13C13.3978 18.5 13.7794 18.342 14.0607 18.0607C14.342 17.7794 14.5 17.3978 14.5 17V5C14.5 4.60218 14.342 4.22064 14.0607 3.93934C13.7794 3.65804 13.3978 3.5 13 3.5H12H11.5V4C11.5 4.39782 11.342 4.77936 11.0607 5.06066C10.7794 5.34196 10.3978 5.5 10 5.5H6C5.60218 5.5 5.22064 5.34197 4.93934 5.06066C4.65804 4.77936 4.5 4.39782 4.5 4Z" fill="white" stroke="#DCE0EC"/>
                            </svg>
                        </div>
                        <div class="patient__description_text">${description}</div>
                    </div>
                </div>
            </div>
        `
    },
}

export default patientComponent;
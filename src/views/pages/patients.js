import Layout from '../layouts/main.js'
import {getPatients} from "../../services/webAPI.js";
import patientComponent from "../components/patienComponent.js";

const Patients = {
    layout: Layout,
    render: async (props) => {
        const patients = getPatients();
        const content = `
                <div class="patients">
            <div class="patients__buttons-container">
                <a href="#" class="patients__btn patients__btn_blue">Patients</a>
                <a href="#" class="patients__btn patients__btn_white">Resolutions</a>
            </div>
            <div class="patients__header">
                <h1 class="patients__title">my patients</h1>
                <div class="patients__utils">
                    <div class="fast-search">
                        <form class="fast-search__form" action="/" method="get" autocomplete="off">
                            <input class="fast-search__input" type="text" placeholder="Search">
                            <label class="custom-select-label" for="sort-select">Sort by:</label>
                            <select id="sort-select" class="custom-select">
                                <option value="Date">Date</option>
                                <option value="Name">Name</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <div class="${patients.length > 0 ? "patients__container" : "no-patients__container"}">
            ${patients.length > 0 ?
            (await Promise.all(patients.map((patient) => patientComponent.render(patient)))).join("")
            : `<div class="patients__medical-history">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2:1170)">
                    <path d="M26.4335 120H93.5675C99.9627 120 105.242 114.992 105.242 108.835V27.4076C105.242 21.2515 99.9627 16.2096 93.5675 16.2096H82.9838V9.91648C82.9886 9.27667 82.7381 8.66239 82.2883 8.20876C81.8375 7.75513 81.2251 7.50091 80.5862 7.49997H71.3445C69.5206 3.14514 64.9815 -5.62299e-06 59.8763 -5.62299e-06H59.8375C54.8703 -0.0415881 50.369 2.92117 48.443 7.49997H39.2835C37.9302 7.49146 36.8169 8.5641 36.7743 9.91648V16.2096H26.4335C20.0383 16.2096 14.7583 21.2515 14.7583 27.4076V108.835C14.7583 114.992 20.0383 120 26.4335 120V120ZM41.613 12.3387H50.1658C51.2696 12.3387 52.2336 11.5911 52.5086 10.5213C53.3695 7.17392 56.389 4.83585 59.8451 4.83869H59.8696C63.4221 4.83869 66.5077 7.19093 67.208 10.4278C67.4481 11.542 68.4328 12.3377 69.5725 12.3387H78.1452V24.4354H41.613V12.3387ZM19.597 27.4076C19.597 23.9194 22.7062 21.0483 26.4335 21.0483H36.7743V26.7829C36.8103 28.1504 37.915 29.2476 39.2835 29.2741H80.5862C81.932 29.2382 82.9999 28.1287 82.9838 26.7829V21.0483H93.5675C97.2939 21.0483 100.403 23.9194 100.403 27.4076V108.835C100.403 112.324 97.2939 115.161 93.5675 115.161H26.4335C22.7062 115.161 19.597 112.324 19.597 108.835V27.4076Z"
                          fill="#DCE0EC"/>
                    <path d="M42.1593 90.9674H77.842C79.1783 90.9674 80.2614 89.8844 80.2614 88.5481C80.2614 87.2127 79.1783 86.1287 77.842 86.1287H42.1593C40.823 86.1287 39.74 87.2127 39.74 88.5481C39.74 89.8844 40.823 90.9674 42.1593 90.9674Z"
                          fill="#DCE0EC"/>
                    <path d="M34.901 100.645H85.0998C86.4361 100.645 87.5192 99.5617 87.5192 98.2254C87.5192 96.8901 86.4361 95.8061 85.0998 95.8061H34.901C33.5647 95.8061 32.4817 96.8901 32.4817 98.2254C32.4817 99.5617 33.5647 100.645 34.901 100.645Z"
                          fill="#DCE0EC"/>
                    <path d="M43.3066 65.3225H52.742V74.7579C52.742 76.0942 53.8251 77.1773 55.1614 77.1773H64.8388C66.1751 77.1773 67.2582 76.0942 67.2582 74.7579V65.3225H76.6937C78.03 65.3225 79.113 64.2394 79.113 62.9031V53.2257C79.113 51.8903 78.03 50.8063 76.6937 50.8063H67.2582V41.3708C67.2582 40.0355 66.1751 38.9515 64.8388 38.9515H55.1614C53.8251 38.9515 52.742 40.0355 52.742 41.3708V50.8063H43.3066C41.9702 50.8063 40.8872 51.8903 40.8872 53.2257V62.9031C40.8872 64.2394 41.9702 65.3225 43.3066 65.3225ZM45.7259 55.645H55.1614C56.4977 55.645 57.5808 54.562 57.5808 53.2257V43.7902H62.4195V53.2257C62.4195 54.562 63.5025 55.645 64.8388 55.645H74.2743V60.4837H64.8388C63.5025 60.4837 62.4195 61.5677 62.4195 62.9031V72.3386H57.5808V62.9031C57.5808 61.5677 56.4977 60.4837 55.1614 60.4837H45.7259V55.645Z"
                          fill="#DCE0EC"/>
                </g>
                <defs>
                    <clipPath id="clip0_2:1170">
                        <rect width="120" height="120" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <div class="patients__medical-history-text">
                <span>You have no patients yet.</span>
                <span>To create a patient profile, please contact your administrator.</span>
            </div>
        </div>
            `}
       </div>
        </div>
        `
        return await Layout.render(content)
    },
    after_render: async () => {
    }

}

export default Patients;
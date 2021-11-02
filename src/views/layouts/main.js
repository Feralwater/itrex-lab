import Header from "../components/header.js";
import {getMe} from "../../models/user-model.js";
import {onNavigate} from "../../services/utils.js";


const Main = {
    render: (main) => {
        const me = getMe()
        if (!me) {
            onNavigate("/sign-in");
            return
        }
        return `
<div class="body" >
        <header class="header">${Header.render({user: me})}</header>
        <main class="body-doctor-view">${main}</main>
        </div>
        `
    },

}

export default Main;
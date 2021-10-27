import Header from "../components/header.js";
import {getMe} from "../../services/webAPI.js";
import Utils from "../../services/Utils.js";

const afterRenderArray = [
    Header,
]
const Main = {
    render: async (main) => {
        const me = getMe()
        if (!me) {
            Utils.onNavigate("/sign-in");
            return
        }
        return `
        <header class="header">${await Header.render({user: me})}</header>
        <main class="body-doctor-view">${main}</main>
        `
    },
    after_render: async () => {
        afterRenderArray.forEach(one => one.after_render())
    }

}

export default Main;
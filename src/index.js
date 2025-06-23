import { init_ui } from "./components/init_ui";
import { Home } from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";

const tab_map = {
    "home": Home,
    "about": About,
    "menu": Menu,
}

document.addEventListener("DOMContentLoaded", () => {
    const {nav_btns, content_div} = init_ui();
    for (const btn of nav_btns) {
        btn.addEventListener("click", (e)=> {
            content_div.replaceChildren();
            tab_map[btn.getAttribute("data-tab")]({content_div});
        })
    }
})

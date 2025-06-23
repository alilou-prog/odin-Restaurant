import { init_ui } from "./components/init_ui";
import { Home } from "./components/home";

document.addEventListener("DOMContentLoaded", () => {
    const {nav_btns, content_div} = init_ui();
    for (const btn of nav_btns) {
        if ([...btn.classList].includes("home")) {
            btn.addEventListener("click", (e) => {
                Home({ content_div });
            })
        }
    }
})

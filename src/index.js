import { nav_tabs } from "./Restaurant_ui"

document.addEventListener("DOMContentLoaded", () => { init_ui(); })

// task 3
function init_ui() {
    const header = document.createElement("header")
    for(let tab of nav_tabs) {
        const btn = document.createElement("button");
        btn.textContent = tab.label;
        header.appendChild(btn);
    }
    const content_div = document.createElement("div");
    content_div.id = "content";
    document.body.appendChild(header);
}

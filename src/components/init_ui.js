const nav_tabs = [
    {label: "Home", class: "home",},
    {label: "Menu", class: "menu",},
    {label: "About", class: "about",},
]

export const ui = {
    nav_btns: [],
}

export function init_ui() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const nav_btns = []
    for(let tab of nav_tabs) {
        const btn = document.createElement("button");
        btn.textContent = tab.label;
        btn.classList.add(tab.class);
        nav.appendChild(btn);

        ui.nav_btns.push(btn);
    }
    header.appendChild(nav);
    const content_div = document.createElement("div");
    content_div.id = "content";
    document.body.appendChild(header);
}
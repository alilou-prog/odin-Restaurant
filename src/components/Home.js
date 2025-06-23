function Home({content_div}) {
    const h1 = document.createElement("h1");
    h1.textContent = "Home";
    content_div.appendChild(h1);
}

export {Home}
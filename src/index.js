import "./styles.css"
import { homePage } from "./components/home-page/home-page"
import { menuPage } from "./components/menu-page/menu-page"
import { contactPage } from "./components/contact-page/contact-page"

function loadPage(pageFunction) {
    const content = document.querySelector("#content")
    content.innerHTML = ""
    content.appendChild(pageFunction())
}

document.addEventListener("DOMContentLoaded", () => {
    loadPage(homePage)
})

document.querySelector("#home-btn").addEventListener("click", () => loadPage(homePage))
document.querySelector("#menu-btn").addEventListener("click", () => loadPage(menuPage))
document.querySelector("#contact-btn").addEventListener("click", () => loadPage(contactPage))
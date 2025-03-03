import "./styles.css"
import { homePage } from "./components/home-page/home-page"
import { menuPage } from "./components/menu-page/menu-page"
import { contactPage } from "./components/contact-page/contact-page"

console.log("Hello from JS!")

const content = document.querySelector("#content")
content.appendChild(contactPage())
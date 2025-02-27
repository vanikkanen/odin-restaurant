import "./styles.css"
import { homePage } from "./components/home-page/home-page"

console.log("Hello from JS!")

const content = document.querySelector("#content")
content.appendChild(homePage())
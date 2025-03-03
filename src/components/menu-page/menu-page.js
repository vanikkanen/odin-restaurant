import "./styles.css"
import {dishes} from "./menu-data"

export function menuPage() {
    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")

    for (const dish of dishes) {
        const menuItemElement = menuItem(dish.title, dish.description, dish.image)
        menuContainer.appendChild(menuItemElement)
    }

    return menuContainer
}

function menuItem(title, description, image) {

    const itemContainer = document.createElement("div")
    itemContainer.classList.add("menu-item")

    const titleElement = document.createElement("h3")
    titleElement.textContent = title
    titleElement.classList.add("menu-item-title")

    const descriptionElement = document.createElement("p")
    descriptionElement.textContent = description
    descriptionElement.classList.add("menu-item-description")

    const imgElement = document.createElement("img")
    imgElement.src = image
    imgElement.classList.add("menu-promo-image")

    itemContainer.appendChild(titleElement)
    itemContainer.appendChild(descriptionElement)
    itemContainer.appendChild(imgElement)

    return itemContainer
}
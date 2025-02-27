import "./styles.css"
import crispyKingdomImage from "../../assets/crispy-kingdom.png"

export function homePage() {
    const homeContainer = document.createElement("div")
    homeContainer.classList.add("home-container")

    homeContainer.innerHTML = `
        <div class="home-text-container">
                <div class="home-title">Crispy Kingdom</div>
                <div class="home-headline">Crispy. Golden. Irresistible. Welcome to Fry Heaven!</div>
                <div class="home-promo-text">At Crispy Kingdom, fries aren’t just a side—they’re the main event. We take the humble fry and turn it into a masterpiece, with gourmet toppings, handcrafted dipping sauces, and bold flavors from around the world. Whether you love them classic, cheesy, or loaded, we’ve got a crispy creation just for you.</div>
                <div class="home-promo-bullets">
                    <p class="promo-bullet">🔥 Hand-cut & made fresh daily</p>
                    <p class="promo-bullet">🧀 Indulgent toppings & unique flavors</p>
                    <p class="promo-bullet">🌍 Inspired by global street food</p>
                    <p class="promo-bullet">📍 Visit us today & taste fries like never before!</p>
                </div>
                
        </div>
    `

    const img = document.createElement("img")
    img.src = crispyKingdomImage
    img.classList.add("home-promo-image")
    homeContainer.appendChild(img)

    return homeContainer
}
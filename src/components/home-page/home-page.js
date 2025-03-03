import "./styles.css"
import crispyKingdomImage from "../../assets/crispy-kingdom.png"

export function homePage() {
    const homeContainer = document.createElement("div")
    homeContainer.classList.add("home-container")

    homeContainer.innerHTML = `
        <div class="home-title heading-text">Crispy Kingdom</div>
        <div class="home-headline body-text">Crispy. <span class="accent-text">Golden.</span> Irresistible. Welcome to Fry Heaven!</div>
        <div class="home-promo-text body-text">At <span class="special-text">Crispy Kingdom</span>, fries aren’t just a side—they’re the main event. We take the humble fry and turn it into a masterpiece, with gourmet toppings, handcrafted dipping sauces, and bold flavors from around the world. Whether you love them classic, cheesy, or loaded, we’ve got a crispy creation just for you.</div>
        <div class="home-promo-bullets">
            <p class="promo-bullet body-text">🔥 Hand-cut & made fresh daily</p>
            <p class="promo-bullet body-text">🧀 Indulgent toppings & unique flavors</p>
            <p class="promo-bullet body-text">🌍 Inspired by global street food</p>
            <p class="promo-bullet body-text">📍 Visit us today & taste fries like never before!</p>
        </div>
    `

    return homeContainer
}
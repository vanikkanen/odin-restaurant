import "./styles.css"

const contactInformation = {
    email: "contact@crispykingdom.com",
    phoneNumber: "(555) 123-CRISPY (555-123-2747)",
    address: "123 Golden Fry Lane, Flavor Town, FT 98765",

}
import { contactInfo } from "./contact-data"

export function contactPage() {
    const contactContainer = document.createElement("div")
    contactContainer.classList.add("contact-container")

    const contactTitle = document.createElement("h1")
    contactTitle.textContent = "Contact Information"
    contactTitle.classList.add("contact-title")
    contactContainer.appendChild(contactTitle)

    const contactInformation = document.createElement("div")
    contactInformation.classList.add("contact-information")
    contactInformation.innerHTML = `
        <h2>Contact Us</h2>
        <p><strong>📍 Address:</strong> ${contactInfo.address}</p>
        <p><strong>📞 Phone:</strong> ${contactInfo.phone}</p>
        <p><strong>📧 Email:</strong> <a href="mailto:${contactInfo.email}">${contactInfo.email}</a></p>
        <p><strong>📲 Social Media:</strong></p>
        <ul>
            <li><strong>Instagram:</strong> ${contactInfo.socialMedia.instagram}</li>
            <li><strong>Facebook:</strong> ${contactInfo.socialMedia.facebook}</li>
            <li><strong>Twitter:</strong> ${contactInfo.socialMedia.twitter}</li>
        </ul>
        <h3>Hours of Operation</h3>
        <p>🕒 <strong>Monday – Thursday:</strong> ${contactInfo.hours.mondayThursday}</p>
        <p>🕒 <strong>Friday – Saturday:</strong> ${contactInfo.hours.fridaySaturday}</p>
        <p>🕒 <strong>Sunday:</strong> ${contactInfo.hours.sunday}</p>
    `
    contactContainer.appendChild(contactInformation)
    return contactContainer
}

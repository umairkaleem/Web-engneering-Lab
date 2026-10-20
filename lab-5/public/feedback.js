import { getRequired } from "./utils.js";
function setError(input, messageElement, message) {
    input.classList.toggle("error", message.length > 0);
    input.setAttribute("aria-invalid", String(message.length > 0));
    messageElement.textContent = message;
}
function isValidEmail(value) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
}
function clearError(input, messageElement) {
    setError(input, messageElement, "");
}
const form = getRequired("#feedback-form");
const nameInput = getRequired("#name");
const emailInput = getRequired("#email");
const nameError = getRequired("#name-error");
const emailError = getRequired("#email-error");
const status = getRequired("#form-status");
nameInput.addEventListener("input", () => clearError(nameInput, nameError));
emailInput.addEventListener("input", () => clearError(emailInput, emailError));
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameMessage = nameInput.value.trim() ? "" : "Please enter your name.";
    const emailMessage = !emailInput.value.trim()
        ? "Please enter your email address."
        : (!isValidEmail(emailInput.value.trim()) ? "Please enter a valid email address." : "");
    setError(nameInput, nameError, nameMessage);
    setError(emailInput, emailError, emailMessage);
    if (nameMessage || emailMessage) {
        status.textContent = "Please fix the errors above.";
        (nameMessage ? nameInput : emailInput).focus();
        return;
    }
    status.textContent = "Thank you! Your feedback has been checked.";
});

import { getRequired } from "./utils.js";

function setError(input: HTMLInputElement, messageElement: HTMLElement, message: string): void {
  input.classList.toggle("error", message.length > 0);
  input.setAttribute("aria-invalid", String(message.length > 0));
  messageElement.textContent = message;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clearError(input: HTMLInputElement, messageElement: HTMLElement): void {
  setError(input, messageElement, "");
}

const form = getRequired<HTMLFormElement>("#feedback-form");
const nameInput = getRequired<HTMLInputElement>("#name");
const emailInput = getRequired<HTMLInputElement>("#email");
const nameError = getRequired<HTMLElement>("#name-error");
const emailError = getRequired<HTMLElement>("#email-error");
const status = getRequired<HTMLElement>("#form-status");

nameInput.addEventListener("input", () => clearError(nameInput, nameError));
emailInput.addEventListener("input", () => clearError(emailInput, emailError));

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  let valid = true;

  const nameMessage = nameInput.value.trim() ? "" : "Please enter your name.";
  const emailMessage = !emailInput.value.trim()
    ? "Please enter your email address."
    : (!isValidEmail(emailInput.value.trim()) ? "Please enter a valid email address." : "");

  setError(nameInput, nameError, nameMessage);
  setError(emailInput, emailError, emailMessage);

  if (nameMessage || emailMessage) {
    valid = false;
  }

  if (!valid) {
    status.textContent = "Please fix the errors above.";
    (nameMessage ? nameInput : emailInput).focus();
    return;
  }

  status.textContent = "Thank you! Your feedback has been checked.";
});

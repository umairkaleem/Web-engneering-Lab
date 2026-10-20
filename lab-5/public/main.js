import { getRequired, makeCounter } from "./utils.js";
const form = getRequired("#feedback-form");
const status = getRequired("#form-status");
const counter = makeCounter();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const target = event.target;
    if (!(target instanceof HTMLFormElement))
        return;
    const nameInput = getRequired("#name", target);
    const emailInput = getRequired("#email", target);
    if (!nameInput.value.trim() || !emailInput.validity.valid || !emailInput.value.trim()) {
        status.textContent = "Please correct the highlighted fields.";
        return;
    }
    status.textContent = `Form checked successfully. Submission ${counter()}.`;
});

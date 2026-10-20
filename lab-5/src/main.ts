import { getRequired, makeCounter } from "./utils.js";

const form = getRequired<HTMLFormElement>("#feedback-form");
const status = getRequired<HTMLElement>("#form-status");
const counter = makeCounter();

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const target = event.target;
  if (!(target instanceof HTMLFormElement)) {
    return;
  }

  const nameInput = getRequired<HTMLInputElement>("#name", target);
  const emailInput = getRequired<HTMLInputElement>("#email", target);

  if (!nameInput.value.trim() || !emailInput.validity.valid || !emailInput.value.trim()) {
    status.textContent = "Please correct the highlighted fields.";
    return;
  }

  status.textContent = `Form checked successfully. Submission ${counter()}.`;
});

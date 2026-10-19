import { delay, makeCounter } from "./utils.js";

const status = document.querySelector("#status");
const tbody = document.querySelector("#schedule tbody");
const nextBooking = makeCounter();

tbody.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button) return;

  const day = button.dataset.day;
  status.textContent = `Updating ${day}…`;
  await delay(1000); 
  
  button.closest("tr").classList.toggle("selected");
  const count = document.querySelectorAll("#schedule tr.selected").length;
  status.textContent =
    `Booking #${nextBooking()} confirmed for ${day}. ${count} slot(s) booked.`;
});

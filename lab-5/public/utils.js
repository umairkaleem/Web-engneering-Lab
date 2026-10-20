export function delay(milliseconds) {
    return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}
export function makeCounter(start = 0) {
    let count = start;
    return function () {
        count += 1;
        return count;
    };
}
export function getRequired(selector, root = document) {
    const element = root.querySelector(selector);
    if (!element) {
        throw new Error(`Required element not found: ${selector}`);
    }
    return element;
}
export function describeSlot(slot) {
    return `${slot.label} (#${slot.id}) - ${slot.available ? "available" : "booked"}`;
}
const booking = { id: 12, label: "Morning slot", available: true, room: "A1" };
console.log(describeSlot(booking));

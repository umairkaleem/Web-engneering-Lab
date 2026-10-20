export function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

export function makeCounter(start = 0): () => number {
  let count: number = start;
  return function (): number {
    count += 1;
    return count;
  };
}

export function getRequired<T extends Element>(selector: string, root: ParentNode = document): T {
  const element = root.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Required element not found: ${selector}`);
  }
  return element;
}

export interface Slot {
  id: number;
  label: string;
  available: boolean;
}

export function describeSlot(slot: Slot): string {
  return `${slot.label} (#${slot.id}) - ${slot.available ? "available" : "booked"}`;
}

// Structural typing: an object with these required properties satisfies Slot.
const booking = { id: 12, label: "Morning slot", available: true, room: "A1" };
console.log(describeSlot(booking));

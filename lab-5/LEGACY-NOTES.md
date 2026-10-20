# Legacy JavaScript Lab Notes

## Task 2: jQuery calls and native equivalents

| jQuery | Native JavaScript equivalent |
|---|---|
| `$(document).ready(fn)` | `document.addEventListener("DOMContentLoaded", fn)` |
| `$("#name")` | `document.querySelector("#name")` |
| `$(".item")` | `document.querySelectorAll(".item")` |
| `.val()` | `.value` |
| `.text("Hello")` | `.textContent = "Hello"` |
| `.on("click", fn)` | `.addEventListener("click", fn)` |

## Three legacy code smells

1. Depending on a library for simple DOM operations that native browser APIs already support.
2. Repeating selectors and validation logic in multiple places.
3. Using inline event handlers or mixing JavaScript behavior directly into HTML.

## Task 6: Example TypeScript errors to record

These are examples of errors that strict TypeScript can report before code is typed correctly:

1. `Object is possibly 'null'` when using `document.querySelector(...)` without checking its result.
2. `Property 'value' does not exist on type 'EventTarget'` when accessing `event.target.value` without narrowing the target.

The exact errors depend on the starter code and the edits made during the lab.

## Task 8: Structural typing

The `booking` object in `src/utils.ts` contains `id`, `label`, and `available`, so it satisfies the `Slot` interface. Its extra `room` property is allowed when the object is passed as a variable. This is structural typing.

## Task 11: Deliberate type error

Temporarily add this line to a TypeScript file:

```ts
const count: number = "five";
```

Run `npm run typecheck`. TypeScript should report that a string cannot be assigned to a number. Remove or correct the line, then run the check again.

## Task 12: Evidence checklist

- [ ] Keyboard: tab through all controls and confirm the focus indicator is visible.
- [ ] Submit the empty form and verify error messages and `aria-invalid`.
- [ ] Run Lighthouse and save a screenshot of the report.
- [ ] Confirm no jQuery request appears in the Network panel.
- [ ] Commit `src/`, `public/`, `tsconfig.json`, `package.json`, and `LEGACY-NOTES.md`.
- [ ] Push the repository to GitHub.

A Lighthouse score of 100 cannot be guaranteed by source code alone; run the audit in your own browser and address any reported issues.

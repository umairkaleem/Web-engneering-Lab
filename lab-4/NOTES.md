# Lab 04 Notes

## Task 2: Specificity and the cascade

| Selector | Specificity | Wins on |
|---|---|---|
| `nav ul li a` (before fix) | (0,0,4) | loses to any class |
| `:where(nav ul li) a` (after fix) | (0,0,1) | loses to `.nav-link` |
| `.nav-link` | (0,1,0) | non-current link (darkgreen) |
| `a[aria-current="location"]` | (0,1,1) | current link (crimson) |

Specificity is compared left to right and never added, so four element selectors
still lose to one class. `!important` would jump over specificity and turn both
links green, so instead the over-specific selector was lowered with `:where()`,
which always contributes zero specificity. All three rules sit in the same
`components` layer, so layer order does not decide the winner; specificity does.

## Task 11: Event loop prediction

```js
console.log("1 start");
setTimeout(() => console.log("2 timeout"), 0);
Promise.resolve().then(() => console.log("3 promise"));
console.log("4 end");
```

**Predicted order:** 1 start, 4 end, 3 promise, 2 timeout
**Actual order (Console):** 1 start, 4 end, 3 promise, 2 timeout

**Why:** The synchronous lines run first on the call stack, printing `1 start` and
`4 end`. `setTimeout` hands its callback to the browser, which queues it in the
task queue after 0 ms. The promise callback goes into the microtask queue. When the
stack is empty, the event loop empties all microtasks before taking the next task,
so `3 promise` prints before `2 timeout`.

**Closure:** `makeCounter` returns an inner function that keeps using `count` after
`makeCounter` has returned, so each booking gets the next number (#1, #2, ...).

**async/await:** `await delay(1000)` pauses only the click handler. The call stack
is free during the wait, so the page stays responsive.

## Lighthouse (Accessibility)
- Light mode: 100 (screenshot attached)
- Dark mode (emulated): 100 (screenshot attached)

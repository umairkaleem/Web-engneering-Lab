# Web Engineering Lab 06
## Task coverage
1. `demo/page.mjs`, `demo/build-static.mjs`, and generated `demo/dist/ssg.html`.
2. `demo/server.mjs` provides `/csr`, `/ssr`, `/ssg`, `/isr`, and `/stream`.
3. `RENDERING-NOTES.md` gives a checklist for refresh, View Source, and JavaScript-disabled testing. Record your own browser observations.
4. `RENDERING-NOTES.md` includes the streaming test instructions; enter your own TTFB and total time from DevTools.
5. `RENDERING-NOTES.md` includes strategy recommendations for blog, live stock dashboard, and account page.
6. Vite + React + TypeScript app scaffold and `styles.css`.
7. `app/src/types.ts`, `Greeting.tsx`, and `StatusMessage.tsx`.
8. `app/src/SlotRow.tsx` uses a conditional class and `onToggle` callback.
9. `app/src/SlotTable.tsx` maps slots and uses `key={slot.day}`.
10. `app/src/App.tsx` stores bookings with `useState` and updates immutably.
11. Build/preview instructions and CSR/View Source/Lighthouse verification below.
12. `AI-USAGE.md` and Git commit/push instructions below.

## Run the rendering demo (project root)
```powershell
node demo/build-static.mjs
node demo/server.mjs
```
Open `http://localhost:3000` and test `/csr`, `/ssr`, `/ssg`, `/isr`, and `/stream`. Stop with Ctrl+C.

## Run the React app
```powershell
cd app
npm install
npm run dev
```

## Task 11: production build, preview and accessibility
In `app/`, run: 
```powershell
npm run build
npm run preview
```
Open the preview URL printed by Vite. Use Ctrl+U (View Page Source): the initial document should contain the empty `<div id="root"></div>` rather than the rendered office-hours table, demonstrating client-side rendering. Test keyboard navigation with Tab and activate buttons using Enter or Space. Run Chrome DevTools Lighthouse with **Accessibility** selected and save a screenshot of the result. The target in the lab statement is 100; this must be measured in your own browser and is not pre-claimed here.

## Task 12: AI declaration and GitHub submission
Review and edit `AI-USAGE.md` so it truthfully describes your own use. From the project root: 
```powershell
git init
git add demo app RENDERING-NOTES.md AI-USAGE.md README.md
git commit -m "Complete Web Engineering Lab 06 tasks 1-12"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/web-engineering-lab.git
git push -u origin main
```
Replace the remote URL with your actual repository URL. If the repository already has a Git history, do not run `git init` again; add, commit and push normally.

## What you must still verify yourself
- Task 3: run the route checks and record what you actually observe.
- Task 4: enter actual Network-panel measurements for `/stream`.
- Task 11: run the build, preview, keyboard checks and Lighthouse; capture your evidence.
- Task 12: use your real GitHub URL and complete the push.

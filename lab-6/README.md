
# Web Engineering Lab 06
## Rendering Strategies and React

This lab focuses on understanding different website rendering strategies and building a simple interactive application using React and TypeScript.

I created a Node.js demo to explore how different rendering methods work, including CSR, SSR, SSG, ISR, and Streaming. I also used browser developer tools to observe page source, loading behavior, and network performance.

Along with the demo, I developed an office-hours booking application where users can view available slots and select or cancel a booking. This helped me understand how React components work together and how data is passed and updated in an application.

## Technologies Used

- HTML and CSS
- JavaScript
- Node.js
- React
- TypeScript
- Vite
- Chrome DevTools
- Lighthouse

## Rendering Strategies

- **CSR (Client-Side Rendering):** The browser renders the page using JavaScript.
- **SSR (Server-Side Rendering):** The server generates HTML when a request is received.
- **SSG (Static Site Generation):** HTML pages are generated in advance.
- **ISR (Incremental Static Regeneration):** Static pages can be regenerated to update their content.
- **Streaming:** Page content is sent to the browser in parts.

## React Application

The office-hours booking application demonstrates:

- Reusable React components
- Passing data through props
- TypeScript interfaces and types
- Event handling and callback functions
- State management using `useState`
- Updating state without directly modifying existing data
- Selecting and cancelling office-hour bookings

## Running the Project

### Rendering Demo

Run these commands from the project root:

```powershell
node demo/build-static.mjs
node demo/server.mjs
```

Open `http://localhost:3000` in your browser and explore the rendering routes:

- `/csr`
- `/ssr`
- `/ssg`
- `/isr`
- `/stream`

### React Application

Open a new terminal and run:

```powershell
cd app
npm install
npm run dev
```

Open the local URL shown in the terminal.

### Production Build

Inside the `app` folder, run:

```powershell
npm run build
npm run preview
```

Use the preview URL shown in the terminal to test the production build.

## Testing and Evaluation

The project can be checked using browser developer tools to inspect page source, observe network timing, test keyboard navigation, and evaluate accessibility using Lighthouse.

## Learning Outcomes

Through this lab, I gained practical experience with website rendering strategies, React component-based development, TypeScript, state management, production builds, and basic performance and accessibility testing.

# Portfolio

A single-page developer portfolio built with Next.js. It presents sections for hero, about, skills, experience, projects, education, leadership, and contact, with motion and a dark ocean/cyan theme.

## Tech stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **UI:** React 19, [Tailwind CSS](https://tailwindcss.com/) 4
- **Motion & UX:** [Framer Motion](https://www.framer.com/motion/), [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)
- **Icons:** [Lucide React](https://lucide.dev/) (plus small SVGs for LinkedIn/GitHub where Lucide no longer ships brand icons)
- **Primitives:** Radix UI (toast, slot), class-variance-authority, clsx, tailwind-merge

## Prerequisites

- **Node.js** 20+ (recommended; matches typical Next.js requirements)
- **npm** (or use `pnpm` / `yarn` with equivalent commands)

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server (with Turbopack by default in this Next.js setup):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command       | Description                          |
| ------------- | ------------------------------------ |
| `npm run dev` | Start dev server with hot reload     |
| `npm run build` | Create an optimized production build |
| `npm start`   | Run the production server (after `build`) |
| `npm run lint` | Run ESLint                         |

## Customizing content

Most copy and structured data live in **`data/portfolio.js`** (personal info, about text, skills, jobs, projects, education, etc.). Edit that file to update names, links, and project entries without touching layout code.

Styling tokens and utilities are in **`app/globals.css`**. Section components are under **`components/portfolio/`**.

## Project layout (high level)

```
app/
  layout.tsx      # Root layout, global CSS, toast host
  page.tsx        # Home page → portfolio shell
  globals.css     # Theme and shared styles
components/
  portfolio/      # Page sections (Hero, About, …)
  ui/               # Shared UI (button, toast, …)
data/
  portfolio.js      # Site content
```

## License

Private project; adjust this section if you publish the repo publicly.

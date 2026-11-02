# Amir Rezgui — Portfolio

A personal portfolio website replicating the minimalist olive-natural design system, UX, and architecture of the reference aesthetic (`#5E6E2A`, warm paper surface `#FCFCF6`, `#F5F5EC` background).

## Tech Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript & JavaScript
- **Styling**: Tailwind CSS v4 + Space Grotesk / JetBrains Mono / Inter typography
- **Internationalization**: Bilingual EN / FR with localStorage persistence and system language detection
- **AI Chat Widget**: Floating assistant with `/api/chat` Vercel Serverless Function (Gemini / Mistral / OpenAI integration with local grounded fallback)
- **Deployment**: Vercel / GitHub Pages

## Architecture & Folder Structure

```
/api
  chat.js             # Vercel serverless function for the AI assistant
/public
  /assets             # Profile photo, CVs (EN & FR), OG images
  favicon.svg         # Custom AR monogram icon
  robots.txt          # SEO crawler instructions
  sitemap.xml         # XML sitemap
  404.html            # Custom error fallback page
/src
  /components
    Navbar.jsx        # Sticky navigation with language/theme toggles and CV download
    Hero.jsx          # Eyebrow, H1, value proposition, facts box, photo with fallback
    ProjectCard.jsx   # Individual project card with tags, metrics, and links
    ProjectsSection.jsx # 2-column desktop grid for selected work groups
    Timeline.jsx      # Vertical career & education history
    Skills.jsx        # Grouped technical toolkit blocks & spoken languages
    Beyond.jsx        # Personal narrative, leadership/community cards, certifications
    ImageCard.jsx     # Reusable card for leadership and community activities
    Contact.jsx       # Accent gradient CTA banner with contact buttons
    Footer.jsx        # Copyright & quick navigation
    ChatWidget.jsx    # Floating AI assistant grounded on real profile
    ThemeContext.jsx  # Dark/Light mode manager
    LangContext.jsx   # EN/FR language provider
    useScrollReveal.js # IntersectionObserver scroll animations
  content.ts          # Single typed source of truth (EN & FR)
  index.css           # Design tokens, color palette, animations
  main.jsx            # React root
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run local development server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173).

### 3. Build for production

```bash
npm run build
```

## Environment Variables

For the AI Assistant on Vercel:

| Variable | Description | Optional |
|---|---|---|
| `GEMINI_API_KEY` | Google Gemini API Key for dynamic LLM responses | Yes (fallback grounded engine active if omitted) |
| `OPENAI_API_KEY` | Alternative OpenAI API Key | Yes |
| `MISTRAL_API_KEY`| Alternative Mistral AI API Key | Yes |

## Editing Content

All copy, project details, metrics, and translations are located in a single typed file:
👉 `src/content.ts`

Any edits to `en` or `fr` update the entire website automatically.

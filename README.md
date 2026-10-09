# Compliance Insights Blog

A responsive blog application that provides practical insights into ISO certification, quality management, audit readiness, compliance, and business improvement.

Built with Next.js App Router, TypeScript, and Tailwind CSS. The application uses a local JSON file as its data source, with no database or external CMS required.

## Features

### Blog Listing
- Displays 10 articles per page.
- Provides URL-based pagination that supports direct links and browser refreshes.
- Uses reusable blog cards for consistent presentation.
- Displays article cover images, categories, titles, excerpts, authors, publication dates, and reading times.
- Handles invalid pagination values gracefully.

### Blog Detail Pages
- Provides individual pages for all 50 articles using dynamic routes.
- Displays the full article content and metadata.
- Includes previous and next article navigation.
- Handles unknown article slugs with a custom 404 page.

### User Experience
- Responsive layouts for mobile, tablet, and desktop screens.
- Consistent typography, spacing, and category badges.
- Accessible navigation and visible keyboard focus states.
- Loading UI for the blog listing.
- Error boundary with retry and navigation options.

## Technology Stack

- **Next.js 16** — App Router and server-rendered pages
- **React** — UI components
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Styling
- **Local JSON** — Blog data source
- **Next.js Image** — Image optimization

## Requirements

Install the following before running the application:

- Node.js 20 or later
- npm

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Aarthi1720/compliance-insights-blog.git
cd compliance-insights
```

> If the cloned repository creates a directory with a different name, navigate into that directory before continuing.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server after building |
| `npm run lint` | Runs the configured lint script, if available |
| `npx tsc --noEmit` | Checks TypeScript without generating output |

## Project Structure

```text
compliance-insights/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── not-found.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BlogCard.tsx
│   └── Pagination.tsx
├── data/
│   └── posts.json
├── lib/
│   ├── posts.ts
│   └── types.ts
└── public/
    └── images/
```

## Data Source

All blog posts are stored locally in `data/posts.json`.

The dataset contains 50 sample articles across five categories:

- ISO Certification
- Quality Management
- Audit Readiness
- Compliance
- Business Improvement

Each article includes:

- `slug`
- `title`
- `excerpt`
- `coverImage`
- `category`
- `author`
- `publishedAt`
- `readTimeMinutes`
- `content`

The sample article text and cover images were created for demonstration purposes using AI assistance. They are mock content and should not be treated as authoritative compliance or certification advice.

## Routing and Pagination

### Blog Listing

```text
/blog
/blog?page=2
/blog?page=3
```

Pagination is controlled through the URL query parameter `page`. The application retrieves the requested slice of posts on the server instead of sending the entire dataset for every listing page.

The listing uses 10 posts per page, resulting in five pages for the current 50-post dataset.

Invalid page values are handled without crashing the application.

### Blog Details

```text
/blog/iso-certification-guide
/blog/quality-management-principles
/blog/audit-readiness-checklist
```

The dynamic route `app/blog/[slug]/page.tsx` retrieves the corresponding article using its slug.

Unknown slugs display the custom not-found page.

## Validation

Run the following commands before submitting changes:

```bash
npx tsc --noEmit
npm run build
```

These checks have passed during development.

## Future Improvements

Potential improvements include:

- Deploying the application to a hosting platform.
- Adding automated tests.
- Improving article discovery with search and category filters.
- Replacing mock content with reviewed, production-ready articles.

## License

This project was created for educational and technical assessment purposes.
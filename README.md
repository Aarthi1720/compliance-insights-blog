# Compliance Insights Blog

A responsive blog application built for a consulting and compliance business. It provides practical insights into ISO certification, quality management, audit readiness, compliance, and business improvement.

The application includes a paginated blog listing, category filtering, individual article pages, and responsive layouts for desktop, tablet, and mobile devices.

## 🔗 Live Demo

**Live Website:** https://compliance-insights-blog.vercel.app

**GitHub Repository:** https://github.com/Aarthi1720/compliance-insights-blog

## Features

### Blog Listing

- Displays 10 articles per page.
- Uses URL-based pagination that supports browser refreshes and shareable links.
- Retrieves the requested page of articles on the server.
- Provides category filters for browsing related articles.
- Preserves the selected category when navigating between pages.
- Displays article cover images, categories, titles, excerpts, authors, publication dates, and reading times.
- Handles invalid page numbers and unsupported categories gracefully.

### Blog Detail Pages

- Provides an individual page and URL for each article.
- Displays the article title, category, cover image, author, publication date, reading time, and full content.
- Includes navigation back to the blog listing.
- Provides previous and next article navigation.
- Displays a custom not-found experience for unknown article slugs.

### User Experience and Accessibility

- Responsive layouts for mobile, tablet, and desktop screens.
- Consistent typography, spacing, colors, and category badges.
- Visible keyboard focus styles.
- Semantic page structure and accessible navigation labels.
- Loading UI for the blog listing.
- An error boundary with retry and navigation options.
- Empty and invalid-request states.

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
cd compliance-insights-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server after building |
| `npm run lint` | Runs ESLint |
| `npx tsc --noEmit` | Checks TypeScript without generating output |

## Project Structure

```text
compliance-insights-blog/
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
├── public/
│   └── images/
├── package.json
├── tsconfig.json
└── README.md
```

## Data Source

All blog posts are stored locally in `data/posts.json`.

The dataset contains 50 sample articles across five categories:

- ISO Certification
- Quality Management
- Audit Readiness
- Compliance
- Business Improvement

Each article includes the following fields:

- `slug`
- `title`
- `excerpt`
- `coverImage`
- `category`
- `author`
- `publishedAt`
- `readTimeMinutes`
- `content`

The sample article content and cover images were created for demonstration purposes using AI assistance. They are mock content and should not be treated as authoritative compliance or certification advice.

## Routing and Pagination

### Blog Listing

The blog listing supports the following URL patterns:

```text
/blog
/blog?page=2
/blog?page=3
```

The current page is controlled through the `page` query parameter. Pagination links preserve the current page in the URL, allowing users to refresh the browser or share a link to a specific page.

The listing uses 10 posts per page for the current 50-post dataset.

Posts are filtered and sliced on the server before they are rendered. The listing therefore sends the selected page of articles to the browser rather than passing the entire dataset to the listing UI.

Invalid page values, including zero, negative numbers, non-numeric values, and page numbers beyond the available range, are handled gracefully.

### Category Filtering

Users can filter articles by category.

Example URLs:

```text
/blog?category=ISO%20Certification
/blog?category=Quality%20Management
/blog?category=Audit%20Readiness
/blog?category=Compliance
/blog?category=Business%20Improvement
```

Filtering is performed before pagination, so the page count reflects the number of articles in the selected category.

The selected category is preserved when users navigate between pages.

### Blog Details

Individual articles use dynamic routes based on their slugs.

Examples:

```text
/blog/iso-certification-guide
/blog/quality-management-principles
/blog/audit-readiness-checklist
```

The dynamic route `app/blog/[slug]/page.tsx` retrieves the corresponding article from the local data source.

Unknown slugs display the custom not-found page.

## Key Technical Decisions

### Local JSON Data Source

The assessment requires a local JSON dataset without a database or CMS. The articles are stored in `data/posts.json`.

Data access and pagination logic are separated into `lib/posts.ts`, while the shared `BlogPost` type is defined in `lib/types.ts`.

This separation helps keep data access independent from the UI and makes a future data-source replacement easier.

### Server-Side Pagination

The application filters and slices the post collection on the server before rendering the blog listing.

The `page` query parameter keeps pagination state in the URL, supporting refreshes and shareable links.

### Reusable Blog Cards

The `BlogCard` component receives a typed post object through its props. It does not load or manage the data source itself.

This keeps the card reusable and separates presentation from data access.

### Dynamic Article Routes

Individual articles use their slugs as route parameters. The same page implementation renders different articles based on the requested slug.

### Category-Aware Pagination

Category filtering occurs before pagination. The pagination component preserves the selected category when generating navigation URLs.

This ensures that moving to another page does not unexpectedly reset the category filter.

## Validation

The following checks passed during development:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

The application was also tested manually for blog navigation, category filtering, pagination, and article detail pages.

## Future Improvements

Potential improvements include:

- Adding automated tests for pagination and category filtering.
- Expanding accessibility testing.
- Replacing mock content with reviewed, production-ready articles.
- Adding search functionality if required in the future.

## License

This project was created for educational and technical assessment purposes.
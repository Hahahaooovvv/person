# Person Zack

A Next.js personal site with articles, news, and Markdown-based content rendering. Supports LaTeX math formulas, code blocks, tables, and GitHub Issues-powered comments via Utterances.

## Quick Start

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
```

### Start production server

```bash
pnpm start
```

---

## Markdown Configuration

### Where to add / edit Markdown content

1. **Create or edit `.md` files** in `app/(articles)/md/` directory.
   - Example: `app/(articles)/md/example.md`

2. **Register articles** in `app/(articles)/list.ts`:
   - Import the markdown file: `import mdExample from "./md/example.md"`
   - Add a new entry to `articleList` with fields:
     - `id` – unique identifier (used in URLs, e.g. `/details?id=1`)
     - `title` – article title
     - `description` – short summary (used in list views)
     - `content` – the imported markdown string
     - `createdAt` – date string (`YYYY-MM-DD`)
     - `group` – `"Article"` or `"News"` (determines which page lists it)
     - `tag` – category label for filtering
     - `cover` – (optional) image path for list items

Example:

```ts
import myPost from "./md/my-post.md";

{
  id: "5",
  title: "My New Post",
  description: "A brief description of the post.",
  content: myPost,
  createdAt: "2026-02-11",
  group: "Article",
  tag: "Tutorial",
  cover: "/home/image_project.png",
}
```

### Supported Markdown features

- GFM (tables, task lists, strikethrough)
- LaTeX math (inline `$...$` and block `$$...$$`)
- Code blocks with syntax highlighting
- Obsidian-style callouts (`> [!tip]`, `> [!note]`, `> [!warning]`)
- Images, HTML video, iframes

---

## Utterances Comments

The [Utterances](https://github.com/utterance/utterances) component adds comment sections to article detail pages, using GitHub Issues as the backend.

### Setup

1. **Install the Utterances app** on your GitHub account:
   - Go to [github.com/apps/utterances](https://github.com/apps/utterances)
   - Click **Install** and authorize it for the repo where you want comments stored

2. **Configure the repo** in your environment:
   - Copy `.env.example` to `.env.local`
   - Set `NEXT_PUBLIC_UTTERANCES_REPO` to your GitHub repo in `owner/repo` format:

   ```
   NEXT_PUBLIC_UTTERANCES_REPO=your-username/your-repo
   ```

   Example: `NEXT_PUBLIC_UTTERANCES_REPO=zhangdengchuan/person-zack_old`

3. Restart the dev server after changing env variables.

### Behaviour

- Comments appear at the bottom of each article on `/details?id=<article-id>`
- Each article URL maps to a separate GitHub Issue (using `issue-term="url"`)
- If the env variable is empty or unset, the comments section is hidden

---

## Project Structure

```
alex/
├── app/
│   ├── (articles)/
│   │   ├── list.ts          # Article list and metadata
│   │   └── md/              # Markdown source files
│   ├── (component)/
│   │   ├── utterances/      # Comments widget
│   │   └── ...
│   ├── article/             # Article list page
│   ├── news/                # News list page
│   ├── details/             # Article detail page
│   └── ...
├── public/                  # Static assets
└── ...
```

---

## Scripts

| Command     | Description                |
| ----------- | -------------------------- |
| `pnpm dev`  | Start development server    |
| `pnpm build`| Build for production       |
| `pnpm start`| Run production server      |
| `pnpm lint` | Run ESLint                 |

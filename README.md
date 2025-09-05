# Modernizing and optimizing the code

Starting as a number of HTML pages, it slowly grew into a PHP site with a MySQL database.
Over the years, this became too unwieldy, and evolved into spaghetti code.
After mucking about with many frameworks like Bootstrap and Foundation, it landed on Astro, which seems to be the best fit so far.
However, the code is quite fragmented and it is starting to become unwieldy once again.

This time I will be using AI to plan the structure to streamline and make it easy to maintain and update. As it stands, it is a mess when you need to update some things.

# Project Structure

```

“	&ldquo;		Left double quotation mark					Alt + 0147
”	&rdquo;		Right double quotation mark					Alt + 0148

‘	&lsquo;		Left single quotation mark					Alt + 0145
’	&rsquo;		Right single quotation mark					Alt + 0146

«	&laquo;		Double left angle quotation mark			Alt + 0174
»	&raquo;		Double right-pointing angle quotation mark	Alt + 0175

‹	&lsaquo;	Single left-pointing angle quotation mark	Alt + 0139
›	&rsaquo;	Single right-pointing angle quotation mark	Alt + 0155
```

```
root/
├── public/								# Static assets
│	├── favicon.png 					# Website favicon
│	└── images/ 						# Images for pharaohs, artifacts, etc.
├── src/								# Source code
│	├── content.config.ts				# Content Collections config
│	├── components/						# Reusable Astro components
│	│	├── Footer.astro				# Footer with links and contact info
│	│	└── Header.astro				# Rendering the navigation
│	├── layouts/						# Page layouts
│	│	└── Layout.astro				# Layout for pages
│	├── pages/							# Routes (Astro pages)
│	│	├── kinglists/					#
│	│	│	└── [kinglist].astro		# Dynamic route for specific kinglist
│	│	├── pharaohs/
│	│	│	├── index.astro				# Pharaohs overview
│	│	│	└── [pharaoh].astro			# Dynamic route for ALL pharaohs, 1 page each
│	│	├── dynasty/					# Dynasties section
│	│	│	└── 1.md					# markdown for each dynasty pages 1-30 etc
│	│	├── resources/
│	│	│	├── index.astro				# Resources overview
│	│	│	├── glossary.astro			# Glossary of terms
│	│	│	└── bibliography.astro		# Scholarly sources
│	│	├── community/
│	│	│	├── index.astro				# Community overview
│	│	│	├── forum.astro				# Forum/messageboard?
│	│	│	└── blog.astro				# Blog/articles
│	│	├── index.astro					# Homepage
│	│	├── about.astro					# About page
│	│	├── dynasties.astro				# All the dynasties
│	│	├── kinglists.astro				# Kinglists overview
│	│	├── pharaohs.astro				# All the known pharaohs listed
│	│	├── periods.astro				# Egyptian historical periods
│	│	└── archaeology.astro			# Archaeological evidence
│	├── scripts/						# JavaScript for interactivity
│	│	└── scripts.js					# if needed
│	└── styles/							# CSS/SCSS for styling
│		 └── global.css					# Gallery styles
├── astro.config.mjs					# Astro configuration
├── package.json						# Node.js dependencies
├── postcss.config.cjs					# PostCSS
├── tsconfig.json						# TypeScript configuration (if used)
└── README.md							# Project documentation
```

## Well well...

```text

Key Points to Prevent Duplicate URLs
Pharaohs:
Data: src/content/pharaohs/pharaohs.json contains all ~300 pharaohs, with fields like id, name, titles (Horus name, Nebty name, etc.), and more.

Route: src/pages/pharaohs/[pharaoh].astro generates URLs (e.g., /pharaohs/khufu) by querying pharaohs.json via content collections.

No .md Files: Since we’re using JSON, there are no individual khufu.md files, eliminating the risk of duplicate URLs.

Dynamic Routes: The getStaticPaths function in [pharaoh].astro ensures each pharaoh gets exactly one URL based on the id field (e.g., khufu).

Dynasties:
Data: Markdown files like src/content/dynasties/dynasty_4.md store dynasty content.

Route: src/pages/dynasties/[dynasty].astro generates URLs (e.g., /dynasties/4th-dynasty) using slugs from the Markdown files’ frontmatter or filenames.

No Overlap: Dynasties have distinct URLs (e.g., /dynasties/4th-dynasty) separate from pharaohs (/pharaohs/khufu). No duplicate routes exist.

Articles:
Data: Markdown files like src/content/articles/women_pharaohs.md store blog content.

Route: src/pages/community/blog.astro (or a dynamic [article].astro) renders articles with URLs like /community/blog/women-pharaohs.

No Overlap: Articles are under /community/blog/, distinct from pharaohs and dynasties.

Kinglists:
Data: JSON files like src/content/kinglists/turin_kinglist.json.

Route: src/pages/kinglists/[kinglist].astro generates URLs like /kinglists/turin.

No Overlap: Kinglist URLs are unique and separate.



```

# Pharaoh.SE - refurbishing the old dog

A **modern, fast, and scholarly** web archive of **Ancient Egyptian history** — built with **Astro**, **TypeScript**, **Tailwind CSS**, and **Content Collections**.

The site started out as a number of HTML pages and slowly evolved into a PHP site with a MySQL database.
Over the years, this became unwieldy and evolved into a monstrosity of spaghetti code.
After experimenting with frameworks such as Bootstrap and Foundation for years, I finally found Astro.
However, the code is a mess and needs to be rewritten from scratch. Like everyone else, I will gladly take assistance from the AIs with the more intricate coding. Old man brain hurts!

[Live Website](#) | [Contribute](#)

---

## Features

- **Static Site Generation** – Blazing fast with Astro
- **Dynamic Routes** – `[slug].astro`, `[id].md`, `[king].astro`
- **Content Collections** – Type-safe Markdown & JSON
- **Dark Mode** – Toggle with `localStorage`
- **SEO Optimized** – Open Graph, JSON-LD, sitemap
- **PDF & Media Library** – Books, SVGs, images
- **Responsive Design** – Mobile-first with Tailwind
- **Interactive Elements** – Filters, galleries, timelines

---

# Project Structure

```
root/
├── public/									# Static assets (served as-is)
│	├── favicon.png							# Website favicon
│	├── pdf/								# PDF documents (books, articles)
│	├── svg/								# Scalable vector graphics
│	└── images/								# Images: pharaohs, artifacts, obelisks, etc.
│
├── src/									# Source code
│	├── assets/								# Astro-optimized assets (images, fonts)
│	│
│	├── components/							# Reusable UI components
│	│	├── footer.astro					# Site footer with links & contact
│	│	├── Head.astro						# Shared <head> metadata & SEO
│	│	├── ThemeToggle.astro				# Dark/light mode switch
│	│	└── header.astro					# Navigation bar
│	│
│	├── data/								# JSON data files (obelisks, pharaohs, etc.)
│	│
│	├── layouts/							# Page templates
│	│	└── Layout.astro					# Main layout wrapper for all pages
│	│
│	├── pages/								# Website routes (Astro + Markdown)
│	│	├── articles/						# Scholarly articles & resources
│	│	│	└── index.astro
│	│	│
│	│	├── authors/						# Ancient historians & Egyptologists
│	│	│	├── [slug].astro				# Dynamic author page (e.g., `/authors/manetho`)
│	│	│	└── index.astro					# List of all authors
│	│	│
│	│	├── dynasty/						# Egyptian dynasties
│	│	│	├── [id].md						# Dynamic Markdown page per dynasty
│	│	│	└── 1.md, 2.md…					# Individual dynasty pages (1–30+)
│	│	│
│	│	├── kinglists/						# Royal canon & king lists
│	│	│	├── turin/						# Turin King List (papyrus)
│	│	│	│	├── library/
│	│	│	│	│	├── books/
│	│	│	│	│	│	└── [book].astro	# Links to PDFs
│	│	│	│	│	└── index.astro			# Bibliography
│	│	│	│	└── [col].astro				# Column-specific views
│	│	│	├── [slug].astro				# Specific king list (e.g., Abydos, Saqqara)
│	│	│	└── index.astro					# Overview of all king lists
│	│	│
│	│	├── periods/						# Historical periods (OK, MK, NK, etc.)
│	│	│	├── [pd].astro					# Dynamic period page
│	│	│	└── index.astro					# All periods overview
│	│	│
│	│	├── pharaohs/						# Individual pharaoh profiles
│	│	│	├── [king].astro				# Dynamic page per ruler (e.g., `/pharaohs/ramesses-ii`)
│	│	│	└── index.astro					# Full list of pharaohs
│	│	│
│	│	├── index.astro						# Homepage
│	│	├── dynasties.astro					# Complete dynasty timeline
│	│	└── about.astro						# Project info & credits
│	│
│	├── styles/								# Global styles
│	│	└── global.css						# Base CSS (resets, typography)
│	│
│	└── content.config.ts					# Astro Content Collections schema
│
├── astro.config.mjs						# Astro build & integration settings
├── package.json							# Dependencies & scripts
├── postcss.config.mjs						# PostCSS pipeline
├── tsconfig.json							# TypeScript configuration
├── tailwind.config.mjs						# Tailwind CSS design system
└── README.md								# Project documentation
```

# TO DO's

There are plenty of things that needs attention.

- **Redirects** from old URLs to the new structure, old: `/pharaoh/Narmer` new: `/pharaohs/Narmer`.
  There are **_many_** redirects that needs to be determined and fixed
- Add more here
- and here

# Ancient Egypt Digital Archive

A **modern, fast, and scholarly** web archive of **Ancient Egyptian history** — built with **Astro**, **TypeScript**, **Tailwind CSS**, and **Content Collections**.

Explore **pharaohs**, **dynasties**, **king lists**, **periods**, **ancient authors**, and **academic resources** in a clean, accessible, and fully responsive interface.

[Live Demo](#) | [Documentation](#) | [Contribute](#)

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

# Modernizing and optimizing the code

Starting as a number of HTML pages, it slowly grew into a PHP site with a MySQL database.
Over the years, this became too unwieldy, and evolved into a monstrosity of spaghetti code.
After mucking about with many frameworks like Bootstrap and Foundation, it landed on Astro, which seems to be the best fit so far.
However, the code is quite fragmented and it is starting to become unwieldy once again.

It is not easy to maintain and updates are a pain. So, this is hopefully the solution. Who knows?

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

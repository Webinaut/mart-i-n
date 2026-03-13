# Mart.I.N - Revitalise Your Website

Website: [Mart.I.N](https://mart-i-n.com.au/)
Github: [mart-i-n](https://github.com/Webinaut/mart-i-n)

## Description

This is a static SPA aimed at organisations with outdated and/or amateur websites. It presents a reason to engage which follows the "features-advantages-benefits" principle. It has links to my front-end developer website.

## Features

- [Astro](https://astro.build/) static website stored in a Github repo and hosted on Netlify.
- No use of Tailwind or any other opinionated CSS framework.
- Uses the [Pure CSS](https://pure-css.github.io/) framework (SASS forked version) - designed to be unopinionated and minimalistic. It provides a basic, lightweight CSS foundation for this website.
- CSS written using the [BEM (Block Element Modifier)](https://getbem.com/) naming methodology. This ensures consistency and understandability of classes as well as overcoming potential specificity issues. There is no nesting within the CSS, making it easier to understand and maintain.
- [Animejs](https://animejs.com/) used for animation of navbar, hero image, borders and portfolio slider.

## Organisation

- All page sections are contained within their own components
- Layout file stacks components
- Only page, index.astro, used for page title and description
- SCSS Files:
  - main.scss: load partials and define type selectors
  - \_color-palette.scss: color pallette used with pure css stylesheet
  - \_bem-styles.scss: global styles using bem naming methodology
- scoped SCSS definitions within component files
- Animejs scripts within component files

### Structure

```
└── 📁src
    └── 📁components
        ├── Benefits.astro
        ├── Contact.astro
        ├── FAQ.astro
        ├── Footer.astro
        ├── Header.astro
        ├── Organisation.astro
        ├── Why.astro
    └── 📁images
        ├── (all)
    └── 📁layouts
        ├── Layout.astro
    └── 📁pages
        ├── index.astro
    └── 📁scripts
        ├── menu.js
    └── 📁styles
        ├── _bem-styles.scss
        ├── _color-palette.scss
        └── main.scss
```

# This is portfolio site build by Javier Lo

Below are the tech stack used for this site. Note that TypeScript is not used but you can always install it.

- Vite
- React
- JavaScript
- TailwindCSS

## What is this?

A one page Vite's website template with a simple Markdown blog implemented.

## What it contains
- Home page
- Blog page

## Components
- BackButton
- ExternalLink
- A simple LigthBoxModal that supports most media including videos
- BlogPreview (List of most recent blogposts)
- ExplorationsGrid (List of most recent projects)

## How to write blogpost
- You just have to add your own .md file in src/post/createyourownpost.md
- Ensure that you have all the Frontmatter metadata filled in


## Important note
- Install nodePolyfills due to Buffer not being supported in Vite + React [Read Here](https://www.npmjs.com/package/vite-plugin-node-polyfills)


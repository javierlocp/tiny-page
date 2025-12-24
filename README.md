# This is portfolio site build by Javier Lo

Below are the tech stack used for this site. Note that I intentionally didn't use TypeScript here but you can always use it.

- Vite
- React
- JavaScript
- TailwindCSS

## What is this?

A tiny React website built with Vite with a simple Markdown blog.

## What it contains

- Home page
- Blog page

## Components

- BlogPreview (List of most recent blogposts)
- A simple LigthBoxModal for ExplorationsGrid that supports most media including videos
- ExplorationsGrid (List of most recent projects)

## How to write blogpost

- You just have to add your own .md file in src/post/createyourownpost.md
- Ensure that you have all the Frontmatter metadata filled in

## Important note

- Install nodePolyfills due to Buffer not being supported in Vite + React [Read Here](https://www.npmjs.com/package/vite-plugin-node-polyfills)

# Pixabay Image Search

A responsive image search application built with **Vite**, **JavaScript**,
**Axios**, and the **Pixabay API**.

The app allows users to search for photos by keyword, display results in a clean
image gallery, view image statistics, and open large previews in a lightbox
modal.

## Live Demo

[View live project](https://larimar4you.github.io/pixabay-image-search/)

## Repository

[GitHub repository](https://github.com/Larimar4you/pixabay-image-search)

## Preview

![Pixabay Image Search preview](./preview.png)

## Features

- Search images by keyword
- Fetch image data from the Pixabay API
- Display results in a responsive gallery
- Show image statistics:
  - Likes
  - Views
  - Comments
  - Downloads

- Open large image previews in a modal window
- Refresh SimpleLightbox after rendering new images
- Show notifications for empty results and request errors
- Display a loader while data is being fetched
- Clear previous search results before rendering new ones
- Handle empty input validation with custom notification logic

## Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript**
- **Vite**
- **Axios**
- **Pixabay API**
- **SimpleLightbox**
- **iziToast**
- **GitHub Pages**

## Project Structure

```txt
src/
  css/
    reset.css
    styles.css
    form_and_gallery.css
  js/
    pixabay-api.js
    render-functions.js
  main.js
index.html
```

## Core Logic

### API Service

The `pixabay-api.js` file contains the function responsible for making HTTP
requests to the Pixabay API.

```js
getImagesByQuery(query);
```

It receives a search query, sends a request with the required parameters, and
returns the response data.

### Rendering Functions

The `render-functions.js` file contains all UI rendering helpers.

```js
createGallery(images);
clearGallery();
showLoader();
hideLoader();
```

These functions are responsible for creating gallery markup, clearing previous
results, controlling the loader, and refreshing the SimpleLightbox instance
after new images are added.

### Application Entry Point

The `main.js` file contains the main application logic:

- handling form submission
- validating user input
- calling the API service
- rendering the gallery
- showing notifications
- handling errors
- controlling the loader state

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Larimar4you/pixabay-image-search.git
```

Go to the project folder:

```bash
cd pixabay-image-search
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is deployed to **GitHub Pages**.

Production build uses the repository base path:

```bash
vite build --base=/pixabay-image-search/
```

Live page:

```txt
https://larimar4you.github.io/pixabay-image-search/
```

## Author

Created by **Lara Kosta** Fullstack Developer in progress with a focus on
JavaScript, React, Backend development, and AI-powered automation.

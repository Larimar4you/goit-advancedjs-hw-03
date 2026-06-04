# Image Search App

A responsive image search application built with **Vite**, **JavaScript**, and
the **Pixabay API**. The app allows users to search for images by keyword, view
search results in a gallery, and open images in a lightbox modal.

## Live Demo

[View live page](https://larimar4you.github.io/goit-advancedjs-hw-03/)

## Repository

[GitHub repository](https://github.com/Larimar4you/goit-advancedjs-hw-03)

## Features

- Search images by keyword
- Fetch images from Pixabay API
- Display image cards in a responsive gallery
- Show image statistics:
  - Likes
  - Views
  - Comments
  - Downloads

- Open large image previews using SimpleLightbox
- Show user notifications with iziToast
- Display loader while data is being fetched
- Clear previous results before a new search
- Handle empty search results and request errors

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Vite
- Axios
- Pixabay API
- SimpleLightbox
- iziToast
- GitHub Pages

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

## Main Files

### `pixabay-api.js`

Contains the function responsible for HTTP requests to the Pixabay API.

```js
getImagesByQuery(query);
```

The function receives a search query, sends a request with the required
parameters, and returns response data.

### `render-functions.js`

Contains UI rendering functions:

```js
createGallery(images);
clearGallery();
showLoader();
hideLoader();
```

This file is responsible for creating gallery markup, clearing the gallery,
controlling the loader, and refreshing SimpleLightbox after new images are
added.

### `main.js`

Contains the main application logic:

- form submit handling
- input validation
- API request execution
- gallery rendering
- error handling
- iziToast notifications

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/Larimar4you/goit-advancedjs-hw-03.git
```

Go to the project folder:

```bash
cd goit-advancedjs-hw-03
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

## Deployment

The project is deployed to GitHub Pages.

Production build command:

```bash
vite build --base=/goit-advancedjs-hw-03/
```

## Author

Created by **Lara Kosta AI × Fullstack**

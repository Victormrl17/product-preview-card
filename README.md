# Make It Real - Product Preview Card Component

This is a solution to the Product Preview Card Component project for the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size.
- See hover and focus states for interactive elements.

### Screenshot

<div align="center">
  <img src="public/design/desktop-design.jpg" alt="Landing" />
</div>

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- React
- Mobile-first workflow

### What I learned

This project helped me solidify my understanding of responsive design principles and CSS Flexbox layout. I also improved my skills in handling hover and focus states effectively.

```html
<div class="product-card">
  <img src="product-image.jpg" alt="Product Image" />
  <h2>Product Title</h2>
  <p>Product description goes here.</p>
  <button>Add to Cart</button>
</div>
```

```css
.product-card {
  display: flex;
  flex-direction: column;
  background-color: hsl(30, 38%, 92%);
  padding: 20px;
}
```

### Continued development

I would like to further explore accessibility features and how to enhance user experience, particularly for keyboard navigation and screen readers.

### Useful resources

- **CSS Tricks on Flexbox**: This guide helped me understand how to use Flexbox effectively. You can check it out [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

- **Responsive Design Basics**: A great resource for understanding responsive design principles. Find it [here](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/).

## Author

- Victor Ramirez - [@Victormrl17](https://github.com/Victormrl17)

## Acknowledgments

A special thanks to Make it Real, especially [@khriztianmoreno](https://github.com/khriztianmoreno) for the valuable feedback during daily meetings and demos, and to [@nayruthCalla](https://github.com/nayruthCalla) for the support and review.

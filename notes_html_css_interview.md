# HTML5 & CSS3 Fresher Interview Quick Reference

## HTML5 Core Concepts

1. **`<div>` vs `<span>`**
   - `<div>` is a generic **block-level** container used to group sections/cards together; it starts on a new line and takes 100% width.
   - `<span>` is a generic **inline-level** container used to style a specific word or phrase inside text without breaking the line.

2. **Why use Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)?**
   - **SEO:** Search engines understand page structure and main content better.
   - **Accessibility:** Screen readers allow keyboard navigation directly to `<nav>` or `<main>`.
   - **Maintainability:** Eliminates "div soup" and makes code readable.

3. **Why is the `alt` attribute on `<img>` important?**
   - Displays fallback text when an image fails to load, describes the image to screen readers for visually impaired users, and improves Google Image SEO.

4. **Tables (`<table>`, `<tr>`, `<th>`, `<td>`) & Cell Merging**
   - `colspan`: Merges cells **horizontally** across columns.
   - `rowspan`: Merges cells **vertically** down across rows.

5. **Forms: `GET` vs `POST`**
   - `GET`: Appends form data to the URL query string (used for searches; unsafe for passwords).
   - `POST`: Sends form data inside the HTTP request body (used for login, registration, and sensitive data).

---

## CSS3 Core Concepts

1. **Ways to Apply CSS**
   - **Inline:** `style="..."` directly on the HTML element (highest priority).
   - **Internal:** `<style>...</style>` inside `<head>`.
   - **External:** `<link rel="stylesheet" href="style.css">` (industry standard).

2. **Class (`.`) vs ID (`#`)**
   - **Class (`.`):** Reusable across multiple elements (`className` in React).
   - **ID (`#`):** Unique to a single element on the page.

3. **The CSS Box Model**
   - Layers from inside to outside: **Content &rarr; Padding &rarr; Border &rarr; Margin**.
   - **Margin vs Padding:** Padding is inner space between content and border; Margin is outer space outside the border pushing neighbors away.
   - **`box-sizing: border-box;`:** Ensures `padding` and `border` stay inside the declared `width` and `height`.

4. **`display: none` vs `visibility: hidden`**
   - `display: none`: Completely removes the element from layout flow (takes zero space).
   - `visibility: hidden`: Hides the element visually, but preserves its empty space in the layout.

5. **How to Center a Div (Flexbox)**
   ```css
   .parent {
       display: flex;
       justify-content: center; /* Horizontal centering */
       align-items: center;     /* Vertical centering */
   }
   ```

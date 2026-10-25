# # Blog Application

A responsive blog application built using React and Vite.

## Features

- View all blog posts
- Create new blog posts
- Read individual blog posts
- Edit existing blog posts
- Delete blog posts
- Search blog posts by title
- Filter blog posts by category
- Form validation
- Success notifications
- Responsive user interface

## Technologies Used

- React
- Vite
- JavaScript
- HTML
- CSS
- React Router DOM
- Redux Toolkit
- React Redux
- Context API

## Installation and Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal to use the application.

## Application Routes

| Route | Purpose |
|---|---|
| `/` | Home page |
| `/create` | Create a blog post |
| `/blog/:id` | View a blog post |
| `/edit/:id` | Edit a blog post |

## State Management

- Redux Toolkit manages blog post data.
- Context API manages notification messages.

## Data Storage

This project currently uses in-memory state management. Changes to blog posts may be lost when the page is refreshed.

## Author

Aswathy Krishna
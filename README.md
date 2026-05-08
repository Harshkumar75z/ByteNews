# ByteNews

ByteNews is a full-stack MERN application that scrapes the top stories from Hacker News and displays them in a modern glassmorphism UI.  
Users can register, login, and bookmark stories using JWT-based authentication.

---

# Features

## Web Scraper
- Scrapes top 10 stories from Hacker News
- Extracts:
  - Title
  - URL
  - Points
  - Author
  - Posted Time
- Stores stories in MongoDB
- Runs automatically on server start
- Can also be triggered manually using API

---

## Authentication
- User Registration
- User Login
- User Logout
- JWT Authentication
- Protected Routes

---

## Story Features
- View all stories
- View story details
- Bookmark stories
- Remove bookmarks
- Protected bookmarks page

---

## Frontend
- React + Tailwind CSS
- Modern Glassmorphism UI
- Responsive Design
- Toast Notifications
- Authentication State Management

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM
- React Hot Toast

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Axios
- Cheerio

---

# Folder Structure

## Backend

```bash
backend/
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│
├── scraper/
├── app.js
├── server.js

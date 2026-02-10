# 🎬 CineQuest

CineQuest is a personal movies and TV shows tracking application that allows users to record what they have watched, rate titles, and write personal reviews — all in one place.

The core idea behind CineQuest is simple: **track your movie journey and compare your ratings with others**, similar to IMDb, but built from scratch to demonstrate real-world software engineering skills.

CineQuest Frontend is the **client-side application** for CineQuest. It focuses on delivering a clean, responsive user experience while consuming the CineQuest Backend API.

This project demonstrates **modern frontend practices**, API consumption, state management, and authentication handling.

---

## ✨ Features

- 🔐 Authentication (JWT-based)
- 🔍 Search movies & TV shows
- ⭐ Rate and review watched titles
- 📚 Personal watch history
- 💡 Clean, minimal UI

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **Axios**
- **Tailwind CSS**
- **shadcn**
- **framer motion**

---

## 📁 Project Structure

```bash
src/
├── api/            # API clients
├── app/            # App setup & configuration
├── assets/         # Static files (images, icons, fonts)
├── components/     # Reusable UI components
├── features/       # Feature-based pages & logic
├── lib/            # Helpers & utilities
└── main.tsx
```

---

## 🔗 Backend Integration

- Communicates with CineQuest Backend via REST API
- JWT token is stored securely in HTTP-Only Cookies
- Token is attached to requests automatically

Example:

```http
Cookie: accessToken=<token>
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- Running CineQuest Frontend

### Installation

```bash
git clone https://github.com/Supanat-pra/cinequest-frontend.git
cd cinequest-frontend
npm install
```

### Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

### Run in Development

```bash
npm run dev
```

---

## 🧠 UI & Architecture Principles

- Component-driven design
- Clear separation of pages and logic
- Minimal global state
- Strong typing with TypeScript

---

## 📈 Future Improvements

- Pagination & infinite scrolling
- Better loading & error states
- Accessibility improvements

---

## 👤 Author

**Supanat Prakobkham**  
Frontend for CineQuest Project

---

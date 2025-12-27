# Full Stack AI Ticketing System

This project is a full-stack AI-powered ticketing system with a React frontend and Node.js/Express backend. It features user authentication, ticket management, admin controls, and AI-powered utilities.

## Features
- User signup and login (JWT authentication)
- Ticket creation and management
- Admin dashboard
- AI utilities (e.g., auto-reply, suggestions)
- Email notifications
- Protected routes
- Responsive UI with a navbar

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT
- **AI Utilities:** Custom logic in `utils/ai.js`
- **Email:** Nodemailer

## Folder Structure
```
backend/
  controllers/      # Route handlers
  inngest/          # Inngest event functions
  middleware/       # Auth middleware
  models/           # Mongoose models
  routes/           # Express routes
  utils/            # AI and mail utilities
  index.js          # Entry point
  package.json      # Backend dependencies
frontend/
  src/
    components/     # Navbar, auth check, etc.
    pages/          # React pages (login, signup, tickets, admin)
    main.jsx        # App entry
    index.css       # Styles
  public/           # Static assets
  package.json      # Frontend dependencies
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with:
   ```env
   VITE_SERVER_URL=http://localhost:5000
   ```
4. Start the frontend dev server:
   ```sh
   npm run dev
   ```

### Inngest (Optional)
If using Inngest for event-driven features:
1. In the backend folder, run:
   ```sh
   npm run inngest-dev
   ```

## Usage
- Visit `http://localhost:5173` for the frontend.
- Use `/signup` and `/login` to create or access your account.
- Create and manage tickets.
- Admins can access `/admin` for extra controls.

## License
MIT

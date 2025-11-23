# 🦤 Dodo Payments Assignment

A robust, pixel-perfect replication of a Figma design paired with a rate-limited API and a custom frontend queue system. This project demonstrates high-fidelity UI implementation using Next.js and Tailwind CSS, along with a resilient architecture for handling API rate limits gracefully.

## 🚀 Features

- **Pixel-Perfect UI**: Meticulous implementation of the provided Figma design
- **Rate-Limited API**: Custom backend enforcing strict request limits (10 req/min)
- **Smart Queue System**: Frontend request management to prevent 429 errors
- **Responsive Design**: Seamless experience across all device sizes
- **Modern Stack**: Built with the latest Next.js 16 and Tailwind CSS 4

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Icons** | Lucide React |
| **UI Primitives** | Radix UI |
| **Package Manager** | Bun |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **Bun**: Recommended package manager (install via [bun.sh](https://bun.sh))
- **Git**: For cloning the repository

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ikunal-04/dodo.git
cd assignment
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Start the Application

```bash
# Start the development server
bun dev
```

The application will be available at:
- **Dashboard**: `http://localhost:3000`
- **Queue Demo**: `http://localhost:3000/queue`

## 🏗️ Architecture & Design Decisions

### API Rate Limiting
The backend implements a **Fixed Window Counter** algorithm. It tracks requests in 60-second windows. If a client exceeds 10 requests within a window, the server responds with a `429 Too Many Requests` status. This stateless approach is efficient and sufficient for the assignment's scope.

### Frontend Queue System (`useApiQueue`)
To handle the strict rate limits without degrading user experience, the frontend uses a custom queue hook:
- **Sequential Processing**: Requests are processed one at a time.
- **Concurrency Control**: Ensures only one "in-flight" request exists.
- **Automatic Backoff**: If a 429 is encountered, the system pauses based on the `Retry-After` header.

### Component Architecture
The UI is built using a **Compound Component** pattern where appropriate. Reusable components (Cards, Buttons, Inputs) are separated from business logic, ensuring maintainability and scalability. Radix UI primitives are used to ensure accessibility without compromising on the custom design.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/echo/       # Backend API endpoint with rate limiting
│   ├── queue/          # Frontend demo page for the queue system
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main dashboard page
├── components/         # Reusable UI components
│   ├── ui/             # Base UI elements (Buttons, Cards, etc.)
│   └── dashboard/      # Dashboard-specific widgets
├── hooks/
│   └── useApiQueue.ts  # Custom hook implementing the request queue logic
└── lib/                # Utility functions
```

# Pertamina Dashboard Application

## Overview

This is a full-stack dashboard web application built to replicate a Pertamina (Indonesian oil company) operational status monitoring interface. The application displays real-time status information for terminal, kilang (refinery), and intransit operations with visual charts and status indicators. The dashboard features pixel-perfect responsive design matching the provided reference design with mobile and tablet optimizations.

**Current Status**: Successfully migrated from Express.js backend to Next.js-only architecture with API routes. Updated UI with official Pertamina logo and improved mobile responsiveness.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with a clear separation between frontend and backend components:

### Frontend Architecture
- **Framework**: Next.js 15 with React 18 and TypeScript (converted from Vite)
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom Pertamina brand colors
- **Charts**: Chart.js for donut charts and data visualization
- **State Management**: TanStack Query for server state management
- **Routing**: Next.js App Router (converted from Wouter)
- **Build Tool**: Next.js for development and production builds

### Backend Architecture
- **Runtime**: Next.js API Routes (App Router)
- **Language**: TypeScript throughout
- **API Design**: RESTful API endpoints via Next.js API routes
- **Data Storage**: In-memory storage with interface for future database integration
- **Development**: Next.js development server with hot reload

## Key Components

### Frontend Components
1. **Header**: Fixed-position header spanning full width with Pertamina branding and user profile
2. **Sidebar**: Icon-only vertical navigation bar with click-to-expand functionality
3. **SubmenuPanel**: Slide-out panels showing submenu items with smooth animations
4. **StatusCard**: Reusable cards showing submission progress, review, and approval status
5. **DonutChart**: Custom Chart.js implementation for progress visualization
6. **StatusList**: Lists of regional statuses with color-coded indicators

### Responsive Design Features
- **Fixed Header**: Header spans full width and remains fixed at top of viewport
- **Icon-Only Sidebar**: Vertical sidebar shows only navigation icons with slide-out submenus
- **Slide-Out Panels**: Clicking icons reveals submenu panels that slide from right of sidebar
- **Mobile Overlay**: On small screens, sidebar and submenus overlay content with backdrop
- **Adaptive Layout**: 3-column desktop layout adapts for various screen sizes
- **Smooth Animations**: Transition effects for opening/closing panels and mobile interactions

### Backend Components
1. **Storage Layer**: Abstracted storage interface with in-memory implementation (/lib/storage.ts)
2. **API Routes**: Next.js API routes for dashboard and region status data (/app/api/dashboard/)
3. **Middleware**: Next.js middleware for CORS and request handling

### Database Schema
- **Users**: Basic user information with username, password, and work title
- **Dashboard Status**: Status tracking for different operation types (terminal, kilang, intransit)
- **Region Status**: Regional status information with completion tracking

## Data Flow

1. **Client Request**: React components use TanStack Query to fetch data
2. **API Layer**: Next.js API routes handle HTTP requests
3. **Storage Layer**: Abstract storage interface provides data access
4. **Response**: JSON data returned to client for rendering

The application uses a unidirectional data flow pattern where:
- UI components trigger data fetches through query hooks
- Next.js API routes retrieve data from storage layer
- Components re-render automatically when data updates

## External Dependencies

### Database & ORM
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL for production (configured but not actively used)

### UI & Styling
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Next.js**: Full-stack React framework with built-in API routes
- **TypeScript**: Type safety across the entire stack
- **TanStack Query**: Server state management and data fetching

## Deployment Strategy

### Development
- Single Next.js development server for frontend and API routes
- Hot module replacement for rapid development
- TypeScript compilation with strict type checking

### Production Build
1. **Full Stack**: Next.js builds optimized React bundle with API routes
2. **Static Generation**: Automatic optimization for static pages
3. **Deployment**: Single Next.js application handles both frontend and backend

### Environment Configuration
- Development: `NODE_ENV=development` with Next.js development server
- Production: `NODE_ENV=production` with optimized build
- Database: `DATABASE_URL` environment variable for PostgreSQL connection

The application is designed to be deployed on platforms like Replit, Vercel, or any Next.js hosting environment with minimal configuration required.

## Recent Changes (July 30, 2025)

- **Architecture Migration**: Successfully migrated from Express.js backend to Next.js-only architecture
- **API Routes**: Moved all backend logic to Next.js API routes (/app/api/dashboard/)
- **Storage Layer**: Relocated storage logic to shared library (/lib/storage.ts)
- **Dependencies**: Removed Express-related dependencies (express, cors, @types/express)
- **UI Updates**: Updated to official Pertamina logo and improved mobile user profile interaction
- **Mobile UX**: Implemented clickable user profile with overlay on mobile while keeping logo always visible
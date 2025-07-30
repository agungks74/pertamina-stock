# Pertamina Dashboard Application

## Overview

This is a full-stack dashboard web application built to replicate a Pertamina (Indonesian oil company) operational status monitoring interface. The application displays real-time status information for terminal, kilang (refinery), and intransit operations with visual charts and status indicators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with a clear separation between frontend and backend components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom Pertamina brand colors
- **Charts**: Chart.js for donut charts and data visualization
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout
- **API Design**: RESTful API endpoints
- **Data Storage**: In-memory storage with interface for future database integration
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Frontend Components
1. **Header**: Displays Pertamina branding, user welcome message, and profile
2. **Sidebar**: Navigation menu with icons and hierarchical structure
3. **StatusCard**: Reusable cards showing submission progress, review, and approval status
4. **DonutChart**: Custom Chart.js implementation for progress visualization
5. **StatusList**: Lists of regional statuses with color-coded indicators

### Backend Components
1. **Storage Layer**: Abstracted storage interface with in-memory implementation
2. **API Routes**: RESTful endpoints for dashboard and region status data
3. **Express Server**: HTTP server with middleware for logging and error handling

### Database Schema
- **Users**: Basic user information with username, password, and work title
- **Dashboard Status**: Status tracking for different operation types (terminal, kilang, intransit)
- **Region Status**: Regional status information with completion tracking

## Data Flow

1. **Client Request**: React components use TanStack Query to fetch data
2. **API Layer**: Express routes handle HTTP requests
3. **Storage Layer**: Abstract storage interface provides data access
4. **Response**: JSON data returned to client for rendering

The application uses a unidirectional data flow pattern where:
- UI components trigger data fetches through query hooks
- API endpoints retrieve data from storage layer
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
- **Vite**: Build tool with HMR support
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast bundling for production builds

## Deployment Strategy

### Development
- Vite dev server for frontend with proxy to Express backend
- Hot module replacement for rapid development
- TypeScript compilation with strict type checking

### Production Build
1. **Frontend**: Vite builds optimized React bundle to `dist/public`
2. **Backend**: ESBuild bundles Node.js server to `dist/index.js`
3. **Deployment**: Single Node.js process serves both static files and API

### Environment Configuration
- Development: `NODE_ENV=development` with Vite middleware
- Production: `NODE_ENV=production` serving static files
- Database: `DATABASE_URL` environment variable for PostgreSQL connection

The application is designed to be deployed on platforms like Replit, Vercel, or any Node.js hosting environment with minimal configuration required.
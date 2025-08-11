# Portfolio Website

## Overview

This is a modern, responsive portfolio website built for engineering students to showcase their projects, skills, and experience. The application features a single-page layout with smooth scrolling navigation between sections including hero, about, skills, projects, and contact areas. The portfolio is designed to be easily customizable with personal information and includes comprehensive deployment guides for hosting on platforms like Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a **React-based single-page application (SPA)** architecture built with Vite as the build tool. The frontend follows a component-based design pattern with reusable UI components built using Radix UI primitives and styled with Tailwind CSS. The application uses Wouter for lightweight client-side routing, though it primarily operates as a single-page portfolio.

Key architectural decisions:
- **Component Organization**: Components are organized into UI primitives (`/components/ui/`) and feature-specific components (`/components/`) for clear separation of concerns
- **Data Management**: Portfolio data is centralized in a TypeScript configuration file (`/data/portfolioData.ts`) for easy customization without code changes
- **Styling Strategy**: Tailwind CSS with custom CSS variables for theming, allowing consistent design tokens across components
- **State Management**: Uses React Query for any potential API interactions and React's built-in state management for form handling

### Backend Architecture
The application includes a **minimal Express.js server** setup primarily for development purposes and potential future API extensions. The server uses a modular route structure and includes basic middleware for request logging and error handling.

Current backend features:
- Express server with middleware setup
- Placeholder route registration system
- In-memory storage interface for potential user management
- Development-focused with Vite integration for hot reloading

### Data Storage Solutions
The project includes **Drizzle ORM configuration** for PostgreSQL database integration, though the current implementation uses in-memory storage. The database schema defines a basic user table structure, indicating preparation for potential authentication features.

Database design decisions:
- PostgreSQL as the target database (via Neon serverless)
- Drizzle ORM for type-safe database operations
- Schema-first approach with TypeScript integration
- Migration support through Drizzle Kit

### Authentication and Authorization
Currently, the application does not implement authentication, but the infrastructure is prepared with user schema definitions and storage interfaces. The architecture supports future addition of user authentication and session management.

### External Dependencies
The application leverages several key external libraries and services:

**UI and Styling**:
- Radix UI for accessible component primitives
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Inter font family for typography

**Development and Build**:
- Vite for fast development and building
- TypeScript for type safety
- ESBuild for server-side code bundling
- PostCSS for CSS processing

**Potential Integrations**:
- Vercel for deployment and hosting
- EmailJS or similar services for contact form functionality
- GitHub for project showcasing
- Social media platforms for professional networking

The architecture is designed to be lightweight yet extensible, allowing for easy customization of portfolio content while maintaining the ability to add more complex features like a blog, admin panel, or user authentication in the future.
# OAuth 2.0 Learning App - Monorepo

## 🌐 **Workspace Setup**
- [ ] Initialize PNPM workspace (`pnpm-workspace.yaml`)
- [ ] Configure Turborepo pipelines (`turbo.json`)
- [ ] Set up shared `tsconfig.base.json`
- [ ] Create root `README.md` with development guide
- [ ] Add global `.gitignore` (node_modules, .env, etc.)

---

## 📦 **Shared Packages**
### `packages/config`
- [ ] ESLint shared config (`eslint-config-custom`)
- [ ] TypeScript config presets (`tsconfig/*`)

### `packages/db`
- [ ] Prisma client generation setup
- [ ] Shared database types

### `packages/shared`
- [ ] Zod validation schemas (`types/*`)
- [ ] Utility functions (`utils/*`)
- [ ] Shared API types (Frontend<>Backend)

---

## 🖥️ **Frontend (Next.js)**
### 1. Core Setup
- [ ] Initialize Next.js 14 with App Router
- [ ] Configure TailwindCSS (`tailwind.config.ts`)
- [ ] Set up absolute imports (`tsconfig.json`)
- [ ] Add NextAuth.js v5 skeleton

### 2. App Router Structure
- [ ] Main layout (`app/layout.tsx`)
- [ ] Homepage (`app/page.tsx`)
- [ ] Auth group routes (`(auth)/login/page.tsx`)
- [ ] Protected dashboard (`dashboard/page.tsx`)
- [ ] Dynamic learning pages (`learn/[slug]/page.tsx`)

### 3. Components
- [ ] OAuth provider buttons (`components/auth/OAuthProviders.tsx`)
- [ ] Interactive flow diagram (`components/diagrams/FlowChart.tsx`)
- [ ] ShadCN UI components (`components/ui/*`)

### 4. Libraries
- [ ] NextAuth configuration (`lib/auth/[...nextauth].ts`)
- [ ] API client setup (`lib/api/client.ts`)
- [ ] OAuth flow constants (`lib/constants/oauth-flows.ts`)

---

## ⚙️ **Backend (NestJS)**
### 1. Core Setup
- [ ] Initialize NestJS with modular structure
- [ ] Configure global pipes/interceptors
- [ ] Set up Prisma integration

### 2. Auth Module
- [ ] OAuth controllers (`/auth/login`, `/auth/callback`)
- [ ] JWT strategy (`strategies/jwt.strategy.ts`)
- [ ] Google OAuth strategy
- [ ] GitHub OAuth strategy
- [ ] Auth guards (`guards/jwt-auth.guard.ts`)

### 3. User Module
- [ ] User entity (`entities/user.entity.ts`)
- [ ] Profile endpoint (`/user/me`)
- [ ] Prisma service integration

### 4. Database
- [ ] Prisma schema (`schema.prisma`)
  ```prisma
  model User {
    id        String   @id @default(uuid())
    email     String   @unique
    name      String?
    provider  String   @default("local")
    createdAt DateTime @default(now())
  }
  ```

---

## Development Guide

### Prerequisites
- Node.js (>=14.x)
- PNPM (>=6.x)
- Docker (for database)

### Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   ```

3. **Set up the database:**
   ```sh
   docker-compose up -d
   pnpm db:push
   ```

4. **Run the development server:**
   ```sh
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

### Project Structure

- `packages/`: Shared packages (config, db, shared)
- `frontend/`: Next.js application
- `backend/`: NestJS application

### Scripts

- `pnpm dev`: Run development servers
- `pnpm build`: Build the project
- `pnpm lint`: Lint the codebase
- `pnpm test`: Run tests

### Contributing

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

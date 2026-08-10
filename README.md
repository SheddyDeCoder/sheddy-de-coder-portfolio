# SHEDDY DE CODER — Personal Brand Operating System (PBOS)

Official codebase for the SHEDDY DE CODER Personal Brand Platform — the digital
headquarters, portfolio, and TechMindsVerse gateway for Shedrack Nliam.

This project is implemented exactly as defined in the **PBOS Master Specification
v1.0**, which serves as the single source of truth for every architectural,
design, and engineering decision made in this repository.

## Status

🚧 In active development — Implementation Phase 1 (Project Foundation).

## Tech Stack

**Frontend**
Next.js (App Router) · React · TypeScript · Tailwind CSS · shadcn/ui ·
Framer Motion · TanStack Query · React Hook Form · Zod · Lucide Icons

**Backend** *(reserved — not yet implemented)*
NestJS · Prisma ORM · Supabase (PostgreSQL, Auth, Storage)

**Tooling**
pnpm workspaces (monorepo) · ESLint · Prettier · TypeScript (strict)

## Monorepo Structure

```
sheddy-de-coder-portfolio/
├── apps/
│   ├── frontend/        Next.js application
│   └── backend/         NestJS API (reserved for a later phase)
├── packages/
│   ├── ui/               Shared component library
│   ├── design-tokens/    Single source of truth for colors, type, spacing
│   ├── types/             Shared TypeScript types
│   ├── utils/             Shared utility functions
│   ├── config/            Shared configuration
│   └── constants/         Shared constants
├── public/
├── docs/
├── scripts/
└── config/
```

## Getting Started

Requirements: Node.js (LTS), pnpm.

```bash
pnpm install
pnpm --filter frontend dev
```

## Project Philosophy

> Build like a product company. Maintain like a solo founder.
> Scale like a startup.

Every decision in this codebase should be readable, reusable, maintainable,
predictable, and scalable — never clever for its own sake. See the PBOS Master
Specification for the full governing principles.

## License

All rights reserved.

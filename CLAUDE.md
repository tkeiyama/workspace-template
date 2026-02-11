# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Frontend (TypeScript/Node.js)
All frontend commands run from `frontend/`:
```bash
pnpm dev          # Run the app
pnpm lint         # Lint with oxlint (auto-fix enabled)
pnpm format       # Format with oxfmt
pnpm typecheck    # Type-check with tsc
```

### Backend (Go)
All backend commands run from `backend/`:
```bash
make dev          # Run the app (go run .)
make build        # Build binary to build/main
```

### Pre-commit
Husky runs lint-staged on commit, which executes lint, format, and typecheck on staged files.

## Architecture

**Monorepo structure:**
- `frontend/` - TypeScript/Node.js, managed with pnpm
- `backend/` - Go application

**Development environment:** Dev container configuration in `.devcontainer/` with Go and Node.js tooling.

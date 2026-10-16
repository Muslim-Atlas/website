<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:website-performance-rules -->
# ⚠️ CRITICAL WEBSITE PERFORMANCE & SECURITY RULES

All contributors and AI agents working on the Muslim Atlas marketing website must adhere to these rules:

## 1. Server vs Client Component Boundaries
- Keep pages as React Server Components (RSC) by default for optimal SEO, bundle size, and initial page load speed.
- Isolate client-side state, form handling, and interactive Framer Motion animations into dedicated client components (`'use client'`).

## 2. API & Environment Security
- Never expose server-side environment variables (e.g. `RESEND_API_KEY`) to the client bundle. Only `NEXT_PUBLIC_*` variables are client-safe.
- Server actions handling form submissions (e.g. waitlist signup, contact) must validate inputs on the server and handle rate-limiting / error handling safely.

## 3. Responsive Design & Visual Polish
- Maintain mobile-first responsive design across all viewports (Mobile, Tablet, Desktop).
- Ensure animations are GPU-accelerated and accessible (respect `prefers-reduced-motion`).
<!-- END:website-performance-rules -->

<!-- BEGIN:engineering-workflow -->
# 🏢 ORGANIZATION ENGINEERING WORKFLOW & HARD GATES

All contributors and AI agents working in this repository must strictly adhere to the company-standard engineering workflow:

## 1. Branching & Commit Conventions
- Work is organized around Jira tickets under project key `MA` on board 7.
- **Never commit directly to `main`**. All work begins on an isolated branch.
- **Branch Naming Standard:** `<type>/<TICKET-KEY>-<short-description>`
  - Types: `feat`, `fix`, `test`, `refactor`, `perf`, `docs`, `chore`, `ci`, `spike`, `hotfix`
  - Ticket Key: Must be uppercase (e.g., `MA-6`, `MA-2`)
  - Description: 2–5 lowercase words in kebab-case (e.g., `waitlist-form`, `website-ci-pipeline`)
  - Valid Examples: `feat/MA-6-waitlist-form`, `fix/MA-22-mobile-nav`, `chore/MA-2-website-engineering-workflow`
  - Anti-patterns to reject: `yusuf/fix-nav` ❌ (personal prefixes), `MA-2` ❌ (missing type/slug), `feature/waitlist` ❌ (`feature` instead of `feat`), `feat/ma-2-ci` ❌ (lowercase key).
- **Branch Lifecycle & Deletion:** Branches are short-lived and dedicated to a single ticket. Once a PR is squash-merged into `main`, GitHub automatically deletes the remote branch. The agent/developer switches to `main`, pulls with pruning (`git pull --prune`), and deletes the local branch (`git branch -d <branch>`).
- **Commit Messages:** Must begin with `[MA]` and follow conventional commits:
  `[MA] type(scope): description (MA-n)`
- **Pull Request Titles:** Must match the commit format:
  `[MA] type(scope): description (MA-n)`

## 2. Mandatory Human Confirmation Gates (Hard-Gates)
Agents must **never take autonomous action on external platforms (Jira, GitHub, Vercel) without explicit user confirmation**. Always display the payload and wait for approval:
1. **Gate 1 (Jira):** Present draft ticket summary, description, criteria, and Fibonacci story points → wait for confirmation. All new tickets are created in **`Backlog`** with the correct issue type (Story / Bug / Task / Spike) and the Jira native Story Points field always set. Agents must **NEVER** transition a ticket into `Ready for Development` unless the owner explicitly instructs to do so.
2. **Gate 2 (Branch):** Present branch name and Jira status transition → wait for confirmation.
3. **Gate 3 (PR):** Present PR title, description, test evidence, and diff overview → wait for confirmation before opening PR.
4. **Gate 4 (Review):** Present review comments and suggested verdict → wait for confirmation before submitting review.
5. **Gate 5 (Merge):** Confirm all CI checks are green and present squash-merge summary → wait for confirmation before merging.
6. **Gate 6 (Production Deploy):** Present deployment checks and environment configuration → wait for owner approval before deploying.

## 3. Testing & Validation Standard
- TypeScript check (`npm run typecheck`) must pass with zero errors.
- Next.js production build (`npm run build`) must compile cleanly.
- Validate commit messages locally using commitlint before pushing.
<!-- END:engineering-workflow -->

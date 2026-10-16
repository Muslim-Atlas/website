## Description

<!-- Provide a concise summary of what this PR changes and why. -->

## Linked Jira Ticket
- Jira Ticket: [MA-](https://yqwebstudio.atlassian.net/browse/MA-)

## Steps to View / Test the Feature
<!-- Provide clear step-by-step instructions for the reviewer or QA to view, interact with, and verify this feature or fix in local development environment. -->
1. **Prerequisites / Environment**: Run `npm run dev` and navigate to `http://localhost:3000`.
2. **Navigate to**: e.g. Home page, Waitlist section, FAQ, Unsubscribe.
3. **Action**: e.g. Enter email in waitlist form, submit form, resize viewport for mobile responsive check.
4. **Verify**: e.g. Verify toast notification appears, email submission works, responsive layout holds.

## Type of Change
- [ ] `feat`: New feature or capability
- [ ] `fix`: Bug fix
- [ ] `perf`: Performance improvement
- [ ] `refactor`: Code refactoring without behavior changes
- [ ] `test`: Adding or updating test cases
- [ ] `docs`: Documentation updates
- [ ] `ci`: CI/CD pipeline or workflow changes
- [ ] `chore`: Maintenance / tooling updates

## Test Verification & Evidence
<!-- Provide build and test output evidence -->
- [ ] TypeScript Check (`npm run typecheck`):
```text
<!-- Paste tsc output here -->
```
- [ ] Next.js Build (`npm run build`):
```text
<!-- Paste build output here -->
```

## AI Agent Usage
- [ ] Built with AI Agent assistance (e.g. Antigravity, Claude Code, Cursor)
- Agent Model:
- Human Verification Performed:

## Definition of Done Checklist
- [ ] PR title follows convention: `[MA] type(scope): description (MA-n)`
- [ ] Acceptance criteria from Jira ticket are met
- [ ] TypeScript typechecking passes without errors
- [ ] Next.js production build passes without errors
- [ ] No secrets or API keys exposed in diff
- [ ] Responsive across mobile, tablet, and desktop viewports

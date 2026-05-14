# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Feature 04 — Project Dialogs

## Current Goal

- Implement project dialogs per 04-project-dialogs.md spec

## Completed

- `01-design-system` — Set up shadcn/ui, `cn()` utility, and Lucide React.
- Installed baseline components (button, card, dialog, input, tabs, textarea, scroll-area).
- Configured dark theme variables in `globals.css` mapped to design system tokens.
- `02-editor` — Editor chrome components (navbar, sidebar, layout shell).
- `03-auth` — Clerk auth integration setup.

## In Progress

- `04-project-dialogs` — Editor home screen and project dialogs:
  - `hooks/use-project-dialogs.ts` — Dialog/form/loading state management hook.
  - `components/project-dialogs/create-project-dialog.tsx` — Name input with live slug preview.
  - `components/project-dialogs/rename-project-dialog.tsx` — Pre-filled, auto-focused, Enter to submit.
  - `components/project-dialogs/delete-project-dialog.tsx` — Destructive confirmation only.
  - `components/editor/project-sidebar.tsx` — Updated with mock data, rename/delete actions for owned projects only.
  - `app/editor/page.tsx` — Editor home screen with heading, description, New Project button.

## Next Up

- Check next feature spec.

## Open Questions

- None.

## Architecture Decisions

- `globals.css` is strictly dark mode (defined on `:root`). shadcn variables map directly to custom design system colors.
- Editor chrome (navbar + sidebar) are client components managing interactive sidebar toggle state.
- Sidebar floats as an overlay with a backdrop — does not push canvas content.
- Project dialogs use shadcn Dialog component; form state managed via custom hook.

## Session Notes

- Created dedicated hook `useProjectDialogs` to manage dialog state, form state, and loading state.
- Slug preview updates live as user types in Create Project dialog.
- Sidebar shows actions (rename, delete) only for owned projects; shared projects have no actions.
- Mobile: tapping outside sidebar closes it via backdrop click handler (already implemented).

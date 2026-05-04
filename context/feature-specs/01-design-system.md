Read `AGENTS.md` before starting.

We're adding the design system and UI primitive components.

Install and configure `shadcn/ui`.

And these shadcn components : 

- button
- card
- dialog
- input
- tabs
- textarea
- scrollArea

Do not modify the generated `components/ui/*` files after installation.

Also Install `lucide-react`.

Create `lib/utils.ts` with a reusable `cn()` helper for merging tailwind classes.

Ensure all components match the existing dark theme in `globals.css`.

### Check when done
- All components import without errors
- `cn()` works properly
- No default light styling appears

# Yathish Portfolio — Complete Repository

Upload the contents of this folder directly to the root of your GitHub repository.

## Included
- `index.html` — main portfolio, with the awards section removed
- `projects.html` — public project showcase
- `project-admin.html` — protected Supabase owner/admin project manager
- `supabase-config.js` — configured with the project publishable key
- `assets/` — CSS, JavaScript, images, logos and icons required by the main portfolio
- `supabase-storage-setup.sql` — run once in Supabase SQL Editor to enable drag-and-drop preview uploads
- `supabase-projects-policies.sql` — project table RLS policies

## Before using image drag-and-drop
Run `supabase-storage-setup.sql` in Supabase SQL Editor.

## Admin
Open `project-admin.html` on the deployed site and sign in using an approved Supabase email/password account. You can add, edit and delete projects and drag/drop preview images.

Do not commit any Supabase secret/service-role key. The included publishable key is intended for browser usage together with RLS.

-- Portfolio project access policies
alter table public.projects enable row level security;

drop policy if exists "Public can view projects" on public.projects;
drop policy if exists "Logged in users can add projects" on public.projects;
drop policy if exists "Logged in users can update projects" on public.projects;
drop policy if exists "Logged in users can delete projects" on public.projects;

create policy "Public can view projects"
on public.projects for select
to anon, authenticated
using (true);

create policy "Logged in users can add projects"
on public.projects for insert
to authenticated
with check (true);

create policy "Logged in users can update projects"
on public.projects for update
to authenticated
using (true)
with check (true);

create policy "Logged in users can delete projects"
on public.projects for delete
to authenticated
using (true);

grant select on public.projects to anon;
grant select, insert, update, delete on public.projects to authenticated;

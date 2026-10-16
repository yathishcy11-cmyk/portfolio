-- Run this ONCE in Supabase SQL Editor to enable drag-and-drop preview uploads.

insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do update set public = true;

drop policy if exists "Public can view project previews" on storage.objects;
drop policy if exists "Authenticated can upload project previews" on storage.objects;
drop policy if exists "Authenticated can update project previews" on storage.objects;
drop policy if exists "Authenticated can delete project previews" on storage.objects;

create policy "Public can view project previews" on storage.objects for select to public using (bucket_id = 'project-images');
create policy "Authenticated can upload project previews" on storage.objects for insert to authenticated with check (bucket_id = 'project-images');
create policy "Authenticated can update project previews" on storage.objects for update to authenticated using (bucket_id = 'project-images') with check (bucket_id = 'project-images');
create policy "Authenticated can delete project previews" on storage.objects for delete to authenticated using (bucket_id = 'project-images');

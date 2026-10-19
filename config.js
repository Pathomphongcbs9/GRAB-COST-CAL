// ใส่ค่าจาก Supabase Dashboard > Project Settings > API
// anon (public) key ใส่ในหน้าเว็บได้ เพราะข้อมูลถูกป้องกันด้วย Row Level Security ใน schema.sql
// ห้ามใส่ service_role key ในไฟล์นี้
window.APP_CONFIG = {
  SUPABASE_URL: "https://YOUR-PROJECT-ID.supabase.co",
  SUPABASE_ANON_KEY: "YOUR-ANON-KEY"
};

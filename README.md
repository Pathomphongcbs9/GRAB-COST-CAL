# คำนวณต้นทุนเมนู Grab (Vercel + Supabase)

เว็บแอปหน้าเดียว ไม่ต้อง build ข้อมูลเมนู ตัวเลือกเสริม ค่าธรรมเนียม และออเดอร์เก็บใน Supabase แต่ละบัญชีเห็นเฉพาะข้อมูลของตัวเอง

```
grab-cost-app/
├── index.html          หน้าโปรแกรม
├── config.js           ค่าเชื่อมต่อ Supabase (ต้องแก้)
├── vercel.json         ตั้งค่า Vercel
└── supabase/schema.sql ตารางและสิทธิ์การเข้าถึง
```

## 1. ตั้งค่า Supabase

1. สมัครหรือเข้าสู่ระบบที่ supabase.com แล้วกด **New project** (เลือก Region: Southeast Asia (Singapore))
2. ไปที่ **SQL Editor > New query** วางเนื้อหาทั้งหมดจาก `supabase/schema.sql` แล้วกด **Run**
3. ไปที่ **Project Settings > API** คัดลอก **Project URL** และ **anon public key** ไปใส่ใน `config.js`
4. ไปที่ **Authentication > Sign In / Providers > Email**
   - ถ้าใช้คนเดียวหรือแค่ทดลอง ปิด **Confirm email** ได้ สมัครแล้วเข้าใช้ได้ทันที
   - ถ้าเปิดไว้ ต้องตั้ง **Authentication > URL Configuration > Site URL** เป็นโดเมน Vercel (ทำหลังข้อ 2) ลิงก์ยืนยันในอีเมลจึงจะพากลับมาถูกที่

## 2. อัปขึ้น Vercel

เลือกวิธีใดวิธีหนึ่ง

**ผ่าน GitHub (แนะนำ แก้ไฟล์แล้วอัปเดตเว็บอัตโนมัติ)**
1. สร้าง repository ใหม่บน GitHub แล้วอัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้
2. ที่ vercel.com กด **Add New > Project** แล้วเลือก repository นั้น
3. Framework Preset เลือก **Other** ไม่ต้องตั้ง Build Command แล้วกด **Deploy**

**ผ่าน Vercel CLI**
```bash
npm i -g vercel
cd grab-cost-app
vercel          # ครั้งแรกจะถามชื่อโปรเจกต์ ตอบตามค่าเริ่มต้นได้
vercel --prod   # อัปเป็นเวอร์ชันจริง
```

## 3. เริ่มใช้งาน

เปิดลิงก์ที่ Vercel ให้ กด **สมัครบัญชีใหม่** ด้วยอีเมลและรหัสผ่าน แล้วเริ่มเพิ่มเมนูหลักและตัวเลือกเสริม

## หมายเหตุ

- anon key อยู่ในหน้าเว็บได้ตามปกติ ข้อมูลป้องกันด้วย Row Level Security ใน `schema.sql` ห้ามใส่ **service_role key** ในไฟล์ใดก็ตาม
- ถ้าต้องการให้หลายคนในร้านใช้ข้อมูลชุดเดียวกัน ให้ใช้บัญชีเดียวกัน หรือแจ้งเพื่อปรับเป็นระบบหลายผู้ใช้ต่อร้าน
- ประวัติ "สั่งบ่อย" และแท็บที่เปิดค้างไว้ เก็บในเบราว์เซอร์ของแต่ละเครื่อง
- Supabase แพ็กเกจฟรีจะหยุดโปรเจกต์ชั่วคราว ถ้าไม่มีการใช้งานติดต่อกัน 1 สัปดาห์ กดเปิดใหม่ได้จาก Dashboard

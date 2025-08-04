# Component Specifications

---

## PageWrapper
**Deskripsi:**  
Container utama untuk halaman.  

**Style Properties:**  
- Background-color: #D9D9D9  
- Border: none  
- Padding: p-6  
- Shadow: none  
- Layout: flex  
- Flex-direction: row  

---

## Sidebar
**Deskripsi:**  
Navigasi samping halaman.  

**Style Properties:**  
- Background-color: #14364D  
- Padding: 16px  

---

## MenuItem
**Deskripsi:**  
Item menu utama di sidebar.  

**Style Properties (Default):**  
- Width: 67px  
- Height: 61px  
- Padding: 7px  
- Gap: 10px  
- Border-radius: 15px  

**Icon:**  
- Source: `/designs/components/menu-icons/{icon-name}.svg`

**State - Active:**  
- Background-color: #388071  
- Box-shadow: 0px 4px 4px 0px #00000040  

**Behavior:**  
- On click:  
  - Menandai item sebagai active.  
  - Menampilkan `SubMenuWrapper` sebagai overlay.  

**Referensi Visual:**  
- Default: `/designs/components/MenuItem_Default.png`  
- Active: `/designs/components/MenuItem_Active.png`  

---

## SubMenuWrapper
**Deskripsi:**  
Wrapper overlay untuk submenu.  

**Style Properties:**  
- Width: 361.36px  
- Background-color: #FFFFFF  
- Text-color: #000000  
- Layout: flex  
- Flex-direction: column  
- Position: absolute  
- Z-index: 10  

---

## SubMenuHeader
**Deskripsi:**  
Header dari submenu.  

**Style Properties:**  
- Layout: flex  
- Justify-content: space-between  
- Align-items: center  
- Padding-y: p-4  
- Padding-x: p-6  
- Font: Open Sans, weight 600, size 16px  

---

## SubMenuItem
**Deskripsi:**  
Item di dalam submenu.  

**Style Properties (Default):**  
- Layout: flex  
- Justify-content: space-between  
- Align-items: center  
- Padding-y: p-3  
- Padding-x: p-6  
- Font: Oxygen, weight 300, size 14px  
- Background: transparent  

**State - Active:**  
- Background-color: #CACACA  

**Behavior:**  
- On click:  
  - Tandai item sebagai active.  
  - Trigger navigasi jika ada.  

---

## TopBar
**Deskripsi:**  
Navigasi bar atas halaman.  

**Style Properties:**  
- Background-color: #FFFFFF  
- Border-bottom: 1px solid #D9D9D9  
- Padding-y: p-4  
- Padding-x: p-6  
- Layout: flex  
- Justify-content: space-between  
- Align-items: center  

---

## Logo
**Deskripsi:**  
Logo perusahaan/aplikasi.  

**Style Properties:**  
- Width: 200px  
- Height: 47px  

**Source:**  
- `/designs/components/logo.svg`

---

## ProfileInfo
**Deskripsi:**  
Informasi profil pengguna.  

**Style Properties:**  
- Layout: flex, flex-direction: column  

**Welcome Text:**  
- Font: Open Sans, weight 400, size 24px, color #000000  

**Username:**  
- Font-weight: 600, size 24px, color #14364D  

**Work Title:**  
- Font: Open Sans, weight 400, size 16px, line-height 100%, color #666666  

---

## ProfileAvatar
**Deskripsi:**  
Avatar pengguna.  

**Style Properties:**  
- Width: 61px  
- Height: 61px  
- Border-radius: 40px  
- Border: 1px solid  
- Padding: 7px  

---

## Breadcrumb
**Deskripsi:**  
Navigasi breadcrumb.  

**Style Properties:**  
- Font: Mulish, weight 400, size 14px, line-height 150%, color #038C8C  

**Icon:**  
- Width: 24px  
- Height: 24px  
- Opacity: 1  

---

## Card
**Deskripsi:**  
Wrapper konten card.  

**Style Properties:**  
- Box-shadow: 0px 4px 4px 0px #00000040  
- Border-radius: 10px  
- Background-color: #FFFFFF  

---

## CardTitle
**Deskripsi:**  
Judul untuk card.  

**Style Properties:**  
- Font: Oxygen, weight 700, size 16px, letter-spacing 1px  

---

## StatusComponent
**Deskripsi:**  
Komponen untuk menampilkan status Submission & Approval.  

**Style Properties (Global):**  
- Layout: flex, flex_direction: column, align_items: center, gap: 10px  

**Title:**  
- Font: Inter, bold, size 16px, color #000000  

**Indicator (Wrapper):**  
- Type: dynamic (icon/donut)  
- Icon size: 60px  
- Padding: p-2  
- Shape: circle  

**Indicator - Icon Variants:**  
- Completed: bg #84CC16, icon ✔, color #FFFFFF  
- In Progress: bg #FFC043, icon ⟳, color #FFFFFF  
- Not Started: bg #F44336, icon ✕, color #FFFFFF  

**Indicator - Donut Variant:**  
- Progress color: #FFC043  
- Track color: #D9D9D9  
- Text color: #000000, size 20px  

**Detail Text:**  
- Font: Inter, bold, size 14px, color #000000  

**Props:**  
- `type="icon" | "donut"`  
- `status="completed" | "in_progress" | "not_started"`  
- `progress={0–100}`  
- `label="..."`  

---

## RegionSubmissionIndicator
**Deskripsi:**  
Indikator progress submission per region.  

**Style Properties:**  
- Layout: flex, flex_direction: column, gap: 8px  

**Header:**  
- Font: Inter, bold, size 14px, color #000000  

**Bar:**  
- Layout: flex, flex_direction: row, flex_wrap: nowrap  

**Segment:**  
- Width: auto  
- Height: 30px  
- Flex-grow: 1  
- Justify-content: center  
- Align-items: center  
- Padding-x: 4px  

**Segment Colors:**  
- Green: #84CC16  
- Yellow: #FFC043  
- Red: #F44336  

**Segment Text:**  
- Font: Inter, bold, size 16px, color #FFFFFF  

---

## TimelineWrapper
**Deskripsi:**  
Container utama untuk timeline vertikal.  

**Style Properties:**  
- Layout: flex  
- Flex-direction: column  
- Padding: p-4  

---

## TimelineItem
**Deskripsi:**  
Satu entri di dalam timeline.  

**Style Properties:**  
- Layout: flex  
- Gap: 16px  
- Padding: p-3 (y)  

---

## TimelineBullet
**Deskripsi:**  
Lingkaran penanda status timeline.  

**States:**  
- Default: 24x24px, border 2px solid #D9D9D9, background none  
- Active: background #84CC16, border transparent  

---

## TimelineContent
**Deskripsi:**  
Konten timeline (tanggal, detail, waktu).  

**Header:**  
- Layout: flex, justify-between, align-center, gap 16px  

**Tanggal:**  
- Font: Inter, bold, size 16px, color #84CC16 (active) / #000000 (default)  

**Waktu:**  
- Font: Inter, normal, size 16px, color #000000  

**Detail:**  
- Font: Inter, normal, size 14px, color #333333  
- Bold text: font-weight bold  

**Props:**  
- `isActive: boolean`  

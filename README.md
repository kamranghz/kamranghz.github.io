# Kamran Gholizadeh HamlAbadi — Academic Portfolio Website v4

Modern, trendy, and academically credible one-page portfolio for postdoc applications.

---

## Folder Structure

```
academic-site/
├── index.html     ← Complete one-page website
├── styles.css     ← All styles (fonts, animations, layout, CSS art)
├── script.js      ← Nav, scroll reveal, smooth scroll
├── photo.jpg      ← YOUR PHOTO — add this file (see below)
└── README.md
```

---

## Step 1 — Add Your Photo

1. Copy your headshot into this folder
2. Rename it exactly: **photo.jpg**
3. Ideal: square crop, 400×400px minimum, professional background

If `photo.jpg` is missing, the site gracefully shows your initials "KG"
inside the spinning ring — so the site works even without a photo.

---

## Step 2 — Deploy to GitHub Pages

### Create the repository

1. Go to **https://github.com/new**
2. Name it exactly: `kamranghz.github.io`
   _(Replace `kamranghz` with your GitHub username)_
3. Set to **Public** · Do NOT initialize with a README
4. Click **Create repository**

### Push your files

Open a terminal in this folder:

```bash
git init
git add .
git commit -m "Launch academic portfolio"
git branch -M main
git remote add origin https://github.com/kamranghz/kamranghz.github.io.git
git push -u origin main
```

### Your site is live

**https://kamranghz.github.io** — available in ~60 seconds.

---

## Step 3 — Enable GitHub Pages (if not automatic)

1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` · Folder: `/ (root)`
4. Click **Save**

---

## Updating Content

All content is in `index.html`. Sections are clearly labeled with HTML comments:
- `<!-- ══ HERO ══ -->` — your name, title, photo, statement
- `<!-- ══ ABOUT ══ -->` — bio text, education, interests
- `<!-- ══ PUBLICATIONS ══ -->` — paper list
- `<!-- ══ PROJECTS ══ -->` — project cards
- `<!-- ══ EXPERIENCE ══ -->` — roles, skills, awards, service
- `<!-- ══ VISION ══ -->` — research vision statement
- `<!-- ══ CONTACT ══ -->` — contact info and links

After any edit, deploy with:

```bash
git add . && git commit -m "Update content" && git push
```

Site refreshes in ~30 seconds.

---

## Adding Project Images (optional)

The project cards currently use CSS art as placeholders. To add real images:

1. Add your image file to the folder (e.g., `care-ai.jpg`)
2. In `index.html`, find the relevant `.proj-img` div
3. Replace the CSS art div with:
   ```html
   <div class="proj-img">
     <div class="proj-img-inner">
       <img src="care-ai.jpg" alt="CARE-AI project"
            style="width:100%;height:100%;object-fit:cover;" />
       <div class="proj-img-label">CARE-AI</div>
     </div>
   </div>
   ```

---

## Custom Domain (optional)

1. Buy a domain (Namecheap, Cloudflare, etc.)
2. In your repo → **Settings → Pages → Custom domain**
3. Enter your domain and click Save
4. Create a `CNAME` file in the repo root containing your domain:
   ```
   kamranghz.com
   ```
5. In your DNS provider, add A records pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

---

## Technology

| Layer       | Choice                              |
|-------------|-------------------------------------|
| HTML        | Semantic HTML5, single file         |
| CSS         | Custom properties, Grid, Flexbox    |
| Fonts       | Fraunces + Outfit + JetBrains Mono  |
| Animation   | CSS + IntersectionObserver (no libs)|
| JS          | ~80 lines vanilla ES6               |
| Hosting     | GitHub Pages (free)                 |

Zero npm. Zero build step. Open `index.html` in any browser — it works.

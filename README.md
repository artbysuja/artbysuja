# Suja Arts — Website Setup Guide

A clean gallery website for Sujatha's acrylic paintings.

---

## Folder Structure

```
suja-arts/
├── index.html        ← the entire website (one file)
├── images/
│   ├── painting-1.jpg
│   ├── painting-2.jpg
│   └── ...
└── README.md
```

---

## How to Add a Painting

1. Copy the photo to the `images/` folder.
   - Name it something simple: `roses-2024.jpg`, `landscape-3.jpg`
   - Recommended: resize to about 1200px wide before uploading (keeps the site fast)

2. Open `index.html` in a text editor and find the `paintings` array (around line 210).

3. Add a new entry following this pattern:
```js
{
  id: 7,                             // just increment the number
  title: "Red Roses",
  category: "floral",                // landscape | floral | abstract | portrait | still-life
  size: "30 × 40 cm",
  medium: "Acrylic on canvas",
  price: "₹2,200",
  image: "images/roses-2024.jpg",    // must match the filename exactly
  sold: false                        // change to true when sold
},
```

4. Save the file and push to GitHub (see below).

---

## Marking a Painting as Sold

Find the painting in the array and change `sold: false` to `sold: true`.
It will show as "Sold" with a strikethrough on the price — it stays visible in the gallery.

---

## Updating the Contact Email

Find this line in `index.html`:
```html
<a class="contact-email" href="mailto:your@email.com">your@email.com</a>
```
Replace both instances of `your@email.com` with Sujatha's actual email.

---

## Updating the About Text

Find the `<section id="about">` section and edit the `<p>` paragraph inside it.

---

## Deploying to GitHub Pages

1. Create a free account at https://github.com if you don't have one.

2. Create a new repository called `suja-arts` (or any name you like).

3. Upload all files:
   - Go to the repo → click **Add file** → **Upload files**
   - Drag the entire `suja-arts` folder contents (index.html + images folder)
   - Click **Commit changes**

4. Enable GitHub Pages:
   - Go to repo **Settings** → **Pages**
   - Under *Source*, select **Deploy from a branch**
   - Choose **main** branch, **/ (root)** folder
   - Click **Save**

5. After a minute or two, your site will be live at:
   `https://[your-github-username].github.io/suja-arts`

---

## Adding a Custom Domain (Optional, later)

If you ever want a domain like `sujaarts.in`:
- Buy it from GoDaddy, Google Domains, or Namecheap (~₹800–1500/year)
- In GitHub Pages settings, add it under "Custom domain"
- It's a 10-minute setup and the GitHub hosting remains free

---

## Image Tips

- **Format**: JPG is fine. Keep files under 500KB each for fast loading.
- **Lighting**: Natural daylight or a well-lit room, no flash glare.
- **Angle**: Straight-on, not at an angle — the whole canvas should fill the frame.
- A free tool to resize/compress: https://squoosh.app

---

*Website designed for Suja Arts, Hyderabad.*

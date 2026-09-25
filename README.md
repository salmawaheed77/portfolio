# Salma Waheed — Data Engineer Portfolio

> **Production-Ready Personal Portfolio & Technical Resume**  
> Computer Science & Statistics student turning raw, messy data into reliable pipelines and clear insight — with Python, SQL, and Microsoft Azure.

---

## 🌟 Live Demo & Profiles
- **Live Website**: [https://salmawaheed77.github.io/portfolio/](https://salmawaheed77.github.io/portfolio/)
- **LinkedIn**: [linkedin.com/in/salma-waheed-statistics](https://www.linkedin.com/in/salma-waheed-statistics)
- **GitHub**: [github.com/salmawaheed77](https://github.com/salmawaheed77)
- **Interactive Resume (Overleaf)**: [Live Overleaf CV](https://www.overleaf.com/read/ggwjysvnhybf#3912e5)

---

## 🚀 Key Features

1. **Modern Data Engineering Aesthetics**:
   - Custom-engineered Dark Mode (default) with an electric Azure/Cyan data stream theme and an accessible Light Mode toggle.
   - Clean glassmorphism cards, ambient glowing orbs, and data stream visual queues.
   - Typography: **Plus Jakarta Sans** for high-impact headlines and **JetBrains Mono** for code and data schemas.

2. **Interactive Live Data Pipeline Simulator**:
   - Built-in terminal widget that simulates a live 5-step ETL pipeline run:
     - `[1. Batch Ingest]` &rarr; `[2. Schema Validation]` &rarr; `[3. Clean & Transform]` &rarr; `[4. Azure Storage]` &rarr; `[5. Analytics Mart]`.
   - Demonstrates real data engineering commands and live step progress indicators.

3. **Flagship Project Showcase with Real Assets**:
   - **Divvy Bike-Trip Data Pipeline & Analytics**:
     - 5,712,887 records cleaned, unified, and visualized.
     - Dynamic OS module folder traversal, memory footprint optimization (610MB+ DataFrame).
     - Full interactive modal case study with code snippets, problem/solution breakdown, and real project chart screenshots (`assets/images/projects/`).

4. **Multi-Category Project Filtering**:
   - Instant filtering across: *Python ETL & EDA*, *Cloud & Lakehouse*, *Big Data & Spark*, *Databases & SQL*.

5. **Verified Certifications Lightbox**:
   - AI Literacy Certificate (MCIT & Microsoft).
   - Introduction to Modern AI Certificate & Credential (Cisco Networking Academy).
   - High-resolution modal inspector with verification IDs and competencies.

6. **Interactive Contact & Communications**:
   - 1-click clipboard copy for direct email (`salmawaheed577@gmail.com`) and phone (`01004997507`) with toast alerts.
   - Client-side validated contact form with direct mailto fallback and integration readiness for Formspree/EmailJS.

7. **Production Accessibility & SEO**:
   - 100% semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`).
   - Open Graph and Twitter Card tags for rich social sharing previews.
   - Schema.org JSON-LD Person/ProfilePage metadata.
   - `robots.txt` and `sitemap.xml` included.
   - `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                      # Semantic main HTML entry point
├── favicon.svg                     # Custom SVG database & pipeline favicon
├── robots.txt                      # Search engine crawler instructions
├── sitemap.xml                     # XML sitemap for SEO indexing
├── README.md                       # Documentation & setup guide
├── assets/
│   ├── css/
│   │   ├── style.css               # Design system tokens, variables, typography, reset
│   │   ├── components.css          # Cards, modals, buttons, navigation, terminal, forms
│   │   └── animations.css          # Micro-animations, scroll reveal, and pulse effects
│   ├── js/
│   │   ├── main.js                 # Theme switcher, scroll spy, navigation, back-to-top
│   │   ├── projects.js             # Project card renderer, category filtering, case study modal
│   │   ├── certifications.js       # Verified certificate renderer and high-res lightbox
│   │   ├── terminal.js             # Interactive live Data Pipeline simulator
│   │   └── contact.js              # Form validation, email/phone copy actions, toast alerts
│   └── images/
│       ├── profile/
│       │   └── salma-waheed.jpeg   # Profile portrait photo
│       ├── projects/
│       │   ├── bike-trip-hourly-demand.png
│       │   ├── bike-trip-weekday-vs-weekend.png
│       │   ├── bike-trip-monthly-rides.png
│       │   ├── bike-trip-member-share.png
│       │   ├── bike-trip-weekly-demand.png
│       │   ├── bike-trip-os-ingestion.png
│       │   ├── bike-trip-data-info.png
│       │   ├── azure-data-architecture.jpg
│       │   └── spark-bigdata-architecture.jpg
│       ├── certifications/
│       │   ├── ai-literacy-mcit-microsoft.jpg
│       │   ├── cisco-intro-modern-ai.png
│       │   └── cisco-intro-modern-ai-credential.png
│       └── og-preview.jpg          # Social media share preview banner
└── assit/                          # Original source assets preserved
```

---

## 🛠️ How to Run Locally

Because this project is built with zero-dependency Vanilla HTML5, modern CSS3, and ES6 JavaScript, **no build step or `npm install` is required**.

### Method 1: Using Python (Recommended)
Open a terminal in the project directory and run:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

### Method 2: Using VS Code Live Server
1. Install the **Live Server** extension in VS Code.
2. Right-click on `index.html` and choose **"Open with Live Server"**.

---

## 🚀 How to Deploy

### Option 1: GitHub Pages (Instant & Free)
1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Deploy modern Data Engineer portfolio"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** &rarr; **Pages**.
   - Under **Source**, select `Deploy from a branch`.
   - Choose `main` branch and `/ (root)` directory, then click **Save**.
3. Your portfolio will be live at `https://salmawaheed77.github.io/portfolio/` within minutes!

### Option 2: Vercel or Netlify
- Drag and drop the `portfolio` folder directly into [Netlify Drop](https://app.netlify.com/drop) or import the repository on [Vercel](https://vercel.com).
- No build settings needed; root directory is `.`.

---

## ✏️ How to Customize & Update Content

- **Adding a new Project**: Open `assets/js/projects.js` and add an object to the `PROJECTS_DATA` array.
- **Adding a new Certificate**: Open `assets/js/certifications.js` and add an entry to `CERTIFICATIONS_DATA`.
- **Updating Resume Link**: Update the `href` attribute on the resume buttons in `index.html`.
- **Contact Form Backend**: By default, the form opens a prefilled email to `salmawaheed577@gmail.com`. To connect directly to a backend service like **Formspree**, change `<form id="contact-form">` to:
  ```html
  <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```

---

## 👩‍💻 Author
**Salma Waheed Fawzy Mohamed**  
- Data Engineer & Applied Statistician  
- Faculty of Science, Helwan University  
- Digital Egypt Pioneers Initiative (DEPI) Fellow  
- Email: [salmawaheed577@gmail.com](mailto:salmawaheed577@gmail.com)  
- Phone: +20 100 499 7507

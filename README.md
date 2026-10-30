# Ritika Ranjan | Portfolio Website

A responsive personal portfolio website for **Ritika Ranjan**, a final year B.Tech CSE student and aspiring web developer. It showcases skills, experience, projects and education, with a one-click resume download and a contact form.

**Live demo:** https://portfolio-jo7dukgaz-ritika-dev67s-projects.vercel.app/

## Features

- Downloadable resume (PDF) from the navbar icon and the hero button
- Fully responsive layout for mobile, tablet and desktop
- Dark and light theme toggle, remembered between visits
- Contact section with form validation, email, phone, LinkedIn and GitHub links
- Typing effect, scroll reveal animations and active-section highlighting in the navbar
- Accessible markup, with reduced-motion support
- No frameworks or build step: plain HTML, CSS and JavaScript

## Sections

Home, About, Skills, Experience, Projects, Education, Contact

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript (ES6)

## Project Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── Ritika_Ranjan_Resume.pdf
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-name>.git
   cd <your-repo-name>
   ```
2. Open `index.html` in your browser. No installation needed.

## Customization

- **Resume:** replace `assets/Ritika_Ranjan_Resume.pdf` with your latest file, keeping the same file name.
- **Profile photo:** add your image to `assets/` and replace the `RR` avatar in `index.html` with `<img src="assets/photo.jpg" alt="Ritika Ranjan">`.
- **Contact form:** by default it opens the visitor's email app. To receive messages directly, create a form at [Formspree](https://formspree.io) and paste the endpoint into `FORM_ENDPOINT` in `script.js`.
- **Colors:** edit the CSS variables at the top of `style.css`.

## Contact

- Email: ritika2002ranjanjha@gmail.com
- LinkedIn: [ritika-ranjan-aa939a213](https://linkedin.com/in/ritika-ranjan-aa939a213)
- GitHub: [Ritika-dev67](https://github.com/Ritika-dev67)
- Location: New Delhi, India

## License

This project is open for reference. Please don't copy it as your own portfolio without changes.

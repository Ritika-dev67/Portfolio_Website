/* ========== THEME ========== */
const root = document.documentElement;
const savedTheme = (() => { try { return localStorage.getItem("theme"); } catch (e) { return null; } })();
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
root.setAttribute("data-theme", savedTheme || (prefersDark ? "dark" : "light"));

document.getElementById("themeToggle").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

/* ========== MOBILE MENU ========== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  hamburger.classList.remove("open");
  navLinks.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
}
hamburger.addEventListener("click", () => {
  const open = hamburger.classList.toggle("open");
  navLinks.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

/* ========== NAVBAR SHADOW + ACTIVE LINK ========== */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

const sections = document.querySelectorAll("main section[id]");
const links = navLinks.querySelectorAll("a");
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => spy.observe(s));

/* ========== REVEAL ON SCROLL ========== */
const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ========== TYPING EFFECT ========== */
const words = ["Aspiring Web Developer", "Python Developer", "AI Enthusiast", "Problem Solver"];
const typedEl = document.getElementById("typed");
let w = 0, c = 0, deleting = false;

function type() {
  const word = words[w];
  typedEl.textContent = word.slice(0, c);
  if (!deleting && c < word.length) { c++; setTimeout(type, 85); }
  else if (!deleting) { deleting = true; setTimeout(type, 1500); }
  else if (c > 0) { c--; setTimeout(type, 45); }
  else { deleting = false; w = (w + 1) % words.length; setTimeout(type, 300); }
}
type();

/* ========== CONTACT FORM ========== */
/*
  HOW MESSAGES REACH YOU
  Option A (default): opens the visitor's email app with the message pre-filled (no setup needed).
  Option B (recommended once live): create a free form at https://formspree.io, then paste your
  endpoint below, e.g. "https://formspree.io/f/abcdwxyz". Messages then arrive in your inbox directly.
*/
const FORM_ENDPOINT = ""; // <- paste your Formspree URL here (optional)
const MY_EMAIL = "ritika2002ranjanjha@gmail.com";

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

function setError(id, errId, msg) {
  const field = document.getElementById(id).closest(".field");
  document.getElementById(errId).textContent = msg;
  field.classList.toggle("invalid", Boolean(msg));
  return !msg;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  note.textContent = ""; note.className = "form-note";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim() || "Portfolio enquiry";
  const message = form.message.value.trim();

  const okName = setError("name", "nameErr", name ? "" : "Please enter your name.");
  const okEmail = setError("email", "emailErr", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Please enter a valid email.");
  const okMsg = setError("message", "msgErr", message.length >= 10 ? "" : "Message should be at least 10 characters.");
  if (!(okName && okEmail && okMsg)) return;

  if (FORM_ENDPOINT) {
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) throw new Error("Failed");
      form.reset();
      note.textContent = "Thanks! Your message has been sent.";
      note.classList.add("ok");
    } catch (err) {
      note.textContent = "Something went wrong. Please email me directly at " + MY_EMAIL;
    }
  } else {
    const body = `Hi Ritika,\n\n${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    note.textContent = "Opening your email app to send the message…";
    note.classList.add("ok");
  }
});

/* ========== FOOTER YEAR ========== */
document.getElementById("year").textContent = new Date().getFullYear();

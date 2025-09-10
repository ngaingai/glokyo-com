// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Contact form handling
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    company: document.getElementById("company").value,
    message: document.getElementById("message").value,
  };

  // Submit the form using Formspree
  fetch("https://formspree.io/f/xzzevyej", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
      } else {
        throw new Error("Form submission failed");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again later."
      );
    });
});

// Mobile Navigation
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileNav = document.getElementById("mobileNav");
const mobileNavLinks = mobileNav.querySelectorAll("a");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenuToggle.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.style.overflow = mobileNav.classList.contains("active")
    ? "hidden"
    : "auto";
});

// Close mobile menu when clicking on a link
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuToggle.classList.remove("active");
    mobileNav.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Close mobile menu when clicking outside
mobileNav.addEventListener("click", (e) => {
  if (e.target === mobileNav) {
    mobileMenuToggle.classList.remove("active");
    mobileNav.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

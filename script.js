/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  document.getElementById("myNavMenu").classList.toggle("responsive");
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
function headerShadow() {
  const navHeader = document.getElementById("header");

  if (window.scrollY > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
  strings: ["IoT-Developer", "PCB-Designer", "Programer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false, // Prevents unnecessary reanimation
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

/* ----- SCROLL REVEAL LEFT_RIGHT ANIMATION ----- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: false,
});
srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: false,
});
srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    document
      .querySelector(`.nav-menu a[href*="${sectionId}"]`)
      ?.classList.toggle(
        "active-link",
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
      );
  });
}

/* ----- IMPROVE PERFORMANCE WITH DEBOUNCE ----- */
function debounce(func, wait = 20) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function handleScroll() {
  headerShadow();
  scrollActive();
}

window.addEventListener("scroll", debounce(handleScroll, 50));

/* ----- WHATSAPP CONTACT FORM FUNCTIONALITY ----- */
document.getElementById("sendMessage").addEventListener("click", function() {
// Get input values
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

// Check if fields are empty
if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before sending.");
    return;
}

// Format the message for WhatsApp
let whatsappMessage = `Hello, I am ${name}.\nEmail: ${email}\n\n${message}`;

// Encode message for URL
let encodedMessage = encodeURIComponent(whatsappMessage);

// Your WhatsApp number
let phoneNumber = "94773700858"; // Without '+'

// Redirect to WhatsApp
window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
});

document.getElementById("downloadCVBtn").addEventListener("click", function() {
const link = document.createElement('a'); // Create a temporary <a> element
link.href = "assets/cv/Ganamoorthy_CV.pdf";  // Path to your CV
link.download = "Ganamoorthy_CV.pdf";  // The file name when downloaded
link.click();  // Programmatically trigger the download
});


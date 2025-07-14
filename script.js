const root = document.documentElement;
const colors = ["#EF767A","#49BEAA", "#8B8BAE", "#88D9E6", "#526760" ,"#EF6461", "#06AED5", "#388659", "#E9D758", "#A491D3"];
let index = 0;
document.getElementById("colors").addEventListener("click", () => {
    index = (index + 1) % colors.length;
    root.style.setProperty("--accentColor", colors[index]);
    root.style.setProperty("--backgroundAccent", colors[index]);
});

// Show local time
function updateTime() {
    const now = new Date();
    const localTime = now.toLocaleTimeString();
    const localDate = now.toDateString();
    document.getElementById("local-time").textContent = `${localDate} - ${localTime}`;
}
updateTime();
setInterval(updateTime, 1000);

// Generic function to make popup appear, disappear, and draggable
function setupPopup(clickableId, popupId, closeId, headerSelector) {
    const popup = document.getElementById(popupId);
    const closeBtn = document.getElementById(closeId);
    const clickable = document.getElementById(clickableId);
    const header = popup.querySelector(headerSelector);

    // Show popup
    clickable.addEventListener("click", () => {
        popup.classList.remove("hidden");
    });

    // Hide popup
    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    // Drag logic
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    header.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - popup.offsetLeft;
        offsetY = e.clientY - popup.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            popup.style.left = `${e.clientX - offsetX}px`;
            popup.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupPopup("about-me-clickable", "about-me-popup", "about-me-popup-close", ".about-me-header");
    setupPopup("projects-clickable", "projects-popup", "projects-popup-close", ".projects-header");
    setupPopup("contact-clickable", "contact-popup", "contact-popup-close", ".contact-header");
    setupPopup("experience-clickable", "experience-popup", "experience-popup-close", ".experience-header");
});

document.getElementById("githubIcon").addEventListener("click", function () {
    window.open("https://github.com/hellopiyushlab", "_blank");
});

document.getElementById("twitterIcon").addEventListener("click", function () {
    window.open("https://bsky.app/profile/piyushgautam.bsky.social", "_blank");
});

document.getElementById("blueskyIcon").addEventListener("click", function () {
    window.open("https://bsky.app/profile/piyushgautam.bsky.social", "_blank");
});

document.getElementById("instagramIcon").addEventListener("click", function () {
    window.open("https://www.instagram.com/piyush.loop/", "_blank");
});

document.getElementById("linkedinIcon").addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/piyush-gautam-9a60b9262/", "_blank");
});

// show local time in panel
function updateTime() {
    const now = new Date();
    const localTime = now.toLocaleTimeString();
    const localDate = now.toDateString();
    document.getElementById("local-time").textContent = localDate + " - " + localTime;
}
updateTime();
setInterval(updateTime, 1000);


// making about me appear and disappear

document.addEventListener("DOMContentLoaded", () => {

    // MAKE ABOUT ME APPEAR, DISAPPEAR, AND DRAGGABLE
    const aboutMePopup = document.getElementById("about-me-popup");
    const aboutMePopupClose = document.getElementById("about-me-popup-close");
    const aboutMeClickable = document.getElementById("about-me-clickable");
    const aboutMeHeader = document.querySelector(".about-me-header");

    // Show popup when about me .clickable is clicked
    aboutMeClickable.addEventListener("click", () => {
        aboutMePopup.classList.remove("hidden");
    });
    // Close popup
    aboutMePopupClose.addEventListener("click", () => {
        aboutMePopup.classList.add("hidden");
    });

    // drag
    let AboutMeOffsetX = 0;
    let AboutMeOffsetY = 0;
    let AboutMeIsDragging = false;

    aboutMeHeader.addEventListener("mousedown", (e) => {
        AboutMeIsDragging = true;
        AboutMeOffsetX = e.clientX - aboutMePopup.offsetLeft;
        AboutMeOffsetY = e.clientY - aboutMePopup.offsetTop;
    });
    document.addEventListener("mousemove", (e) => {
        if (AboutMeIsDragging) {
            aboutMePopup.style.left = `${e.clientX - AboutMeOffsetX}px`;
            aboutMePopup.style.top = `${e.clientY - AboutMeOffsetY}px`;
        }
    });
    document.addEventListener("mouseup", () => {
        AboutMeIsDragging = false;
    });

    // MAKE PROJECTS APPEAR, DISAPPEAR, AND DRAGGABLE
    const projectsPopup = document.getElementById("projects-popup");
    const projectsPopupClose = document.getElementById("projects-popup-close");
    const projectsClickable = document.getElementById("projects-clickable");
    const projectsHeader = document.querySelector(".projects-header");

    // when clickable is clicked, remove the class that makes div hidden
    projectsClickable.addEventListener("click", () => {
        projectsPopup.classList.remove("hidden");
    });

    // when cross is clicked, add the class that makes the div hidden
    projectsPopupClose.addEventListener("click", () => {
        projectsPopup.classList.add("hidden");
    });

    // drag
    let ProjectsOffsetX = 0;
    let ProjectsOffsetY = 0;
    let ProjectsIsDragging = false;

    projectsHeader.addEventListener("mousedown", (e) => {
        ProjectsIsDragging = true;
        ProjectsOffsetX = e.clientX - projectsPopup.offsetLeft;
        ProjectsOffsetY = e.clientY - projectsPopup.offsetTop;
    });
    document.addEventListener("mousemove", (e) => {
        if (ProjectsIsDragging) {
            projectsPopup.style.left = `${e.clientX - ProjectsOffsetX}px`;
            projectsPopup.style.top = `${e.clientY - ProjectsOffsetY}px`;
        }
    });
    document.addEventListener("mouseup", () => {
        ProjectsIsDragging = false;
    });

    // MAKE CONTACT APPEAR, DISAPPEAR, AND DRAGGABLE
    const contactPopup = document.getElementById("contact-popup");
    const contactPopupClose = document.getElementById("contact-popup-close");
    const contactClickable = document.getElementById("contact-clickable");
    const contactHeader = document.querySelector(".contact-header");

    // when clickable is clicked, remove the class that makes div hidden
    contactClickable.addEventListener("click", () => {
        contactPopup.classList.remove("hidden");
    });

    // when cross is clicked, add the class that makes the div hidden
    contactPopupClose.addEventListener("click", () => {
        contactPopup.classList.add("hidden");
    });

    // drag
    let contactOffsetX = 0;
    let contactOffsetY = 0;
    let contactIsDragging = false;

    contactHeader.addEventListener("mousedown", (e) => {
        contactIsDragging = true;
        contactOffsetX = e.clientX - contactPopup.offsetLeft;
        contactOffsetY = e.clientY - contactPopup.offsetTop;
    });
    document.addEventListener("mousemove", (e) => {
        if (contactIsDragging) {
            contactPopup.style.left = `${e.clientX - contactOffsetX}px`;
            contactPopup.style.top = `${e.clientY - contactOffsetY}px`;
        }
    });
    document.addEventListener("mouseup", () => {
        contactIsDragging = false;
    });
});
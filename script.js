// show local time in panel
function updateTime() {
    const now = new Date();
    const localTime = now.toLocaleTimeString();
    const localDate = now.toDateString();
    document.getElementById("local-time").textContent = localDate + " - " + localTime;
}
updateTime();
setInterval(updateTime, 1000);
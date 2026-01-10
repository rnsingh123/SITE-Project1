function toggleSettings() {
    const panel = document.querySelector(".settings-frame-wrapper");
    if (!panel) return;
    panel.classList.toggle("active");
}

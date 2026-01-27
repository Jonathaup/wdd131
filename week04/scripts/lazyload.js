
// Function to display the current year in the footer
function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
}

// Function to display the last modified date of the document
function displayLastModified() {
    document.getElementById("lastModified").textContent = document.lastModified;
}

// Execute all functions when the page loads
window.addEventListener('DOMContentLoaded', () => {
    displayCurrentYear();
    displayLastModified();
});
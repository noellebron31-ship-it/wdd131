// Dynamically set the current year
const currentYearElement = document.querySelector("#currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Dynamically set the last modified date
const lastModifiedElement = document.querySelector("#lastModified");
if (lastModifiedElement) {
    const lastMod = document.lastModified;
    lastModifiedElement.innerHTML = `Last Modification: <span style="color: yellow;">${lastMod}</span>`;
}
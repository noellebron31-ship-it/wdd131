document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    reviewCount++;    
    localStorage.setItem("reviewCount", reviewCount);
    const displayElement = document.getElementById("counterDisplay");
    if (displayElement) {
        displayElement.textContent = `Total reviews completed across this browser session: ${reviewCount}`;
    }
});
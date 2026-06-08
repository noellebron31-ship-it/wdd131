document.addEventListener("DOMContentLoaded", () => {
    // Retrieve existing counter, defaulting to 0 if null
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    
    // Increment count by one
    reviewCount++;
    
    // Save updated count back to localStorage
    localStorage.setItem("reviewCount", reviewCount);
    
    // Display submission total to user on screen
    const displayElement = document.getElementById("counterDisplay");
    if (displayElement) {
        displayElement.textContent = `Total reviews completed across this browser session: ${reviewCount}`;
    }
});
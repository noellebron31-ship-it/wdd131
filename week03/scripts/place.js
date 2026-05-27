const currentYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");


const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;


const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate}`;



const temperature = 9;  
const windSpeed = 12;   

/**
 * Calculates the Wind Chill factor using the Metric system formula.
 * @param {number} t 
 * @param {number} s 
 * @returns {number} 
 */
const calculateWindChill = (t, s) => 
    (13.12 + (0.6215 * t) - (11.37 * Math.pow(s, 0.16)) + (0.3965 * t * Math.pow(s, 0.16))).toFixed(1);


const updateWeatherDisplay = () => {
    const windChillDisplay = document.getElementById("windchill");

    if (temperature <= 10 && windSpeed > 4.8) {
        const factor = calculateWindChill(temperature, windSpeed);
        windChillDisplay.textContent = `${factor} °C`;
    } else {
        windChillDisplay.textContent = "N/A";
    }
};

updateWeatherDisplay();
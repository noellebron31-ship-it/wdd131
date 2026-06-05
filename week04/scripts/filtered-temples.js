const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];


const templeGrid = document.querySelector(".grid-container");

function createTempleCard(filteredTemples) {
  
  templeGrid.innerHTML = "";
  
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    card.classList.add("temple-card");
    
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span>Location:</span> ${temple.location}</p>
      <p><span>Dedicated:</span> ${temple.dedicated}</p>
      <p><span>Size:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
    `;

    templeGrid.appendChild(card);
  });
}


createTempleCard(temples);


const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");


homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples);
});


oldLink.addEventListener("click", (e) => {
  e.preventDefault();
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1000; 
  });
  createTempleCard(oldTemples);
});


newLink.addEventListener("click", (e) => {
  e.preventDefault();
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  createTempleCard(newTemples);
});


largeLink.addEventListener("click", (e) => {
  e.preventDefault();
  const largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(largeTemples);
});


smallLink.addEventListener("click", (e) => {
  e.preventDefault();
  const smallTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(smallTemples);
});


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    
   
    if (navLinks.classList.contains("open")) {
        menuToggle.textContent = "❌";
    } else {
        menuToggle.textContent = "☰";
    }
});


const individualLinks = document.querySelectorAll(".nav-menu a");
individualLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            menuToggle.textContent = "☰";
        }
    });
});
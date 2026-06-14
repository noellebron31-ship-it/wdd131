document.addEventListener("DOMContentLoaded", () => {
    initFooterDates();
    initMobileNav();
    
    if (document.getElementById("watchlist-container")) {
        renderWatchlist();
    }
    if (document.getElementById("modules-grid")) {
        renderModules("all");
        initAcademyFilters();
    }
    if (document.getElementById("trading-contact-form")) {
        initContactForm();
    }
});

function initFooterDates() {
    const yearEl = document.getElementById("current-year");
    const modifiedEl = document.getElementById("last-modified");
    
    if (yearEl) yearEl.textContent = `${new Date().getFullYear()}`;
    if (modifiedEl) modifiedEl.textContent = `${document.lastModified}`;
}

function initMobileNav() {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }
}

const marketAssets = [
    { name: "Bitcoin", symbol: "BTC", price: 67250, change: 2.4, trend: "up" },
    { name: "Ethereum", symbol: "ETH", price: 3520, change: -1.1, trend: "down" },
    { name: "S&P 500 ETF", symbol: "SPY", price: 530.20, change: 0.6, trend: "up" },
    { name: "Gold Trust", symbol: "GLD", price: 218.40, change: -0.3, trend: "down" }
];

function renderWatchlist() {
    const container = document.getElementById("watchlist-container");
    if (!container) return;
    container.innerHTML = ""; 
    
    marketAssets.forEach(asset => {
        const statusClass = asset.trend === "up" ? "price-up" : "price-down";
        const prefix = asset.trend === "up" ? "+" : "";
        
        const cardHTML = `
            <div class="card">
                <h3>${asset.name} <span>(${asset.symbol})</span></h3>
                <p class="price">$${asset.price.toLocaleString()}</p>
                <p class="${statusClass}">${prefix}${asset.change}% Today</p>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

const academyModules = [
    { title: "Introduction to Price Action", level: "Beginner", duration: "45 mins", desc: "Learn to read structural Japanese candlesticks and high-probability market trends cleanly." },
    { title: "Risk Management Matrix", level: "Beginner", duration: "60 mins", desc: "The definitive absolute golden rule of positions sizing and guarding capital accounts safely." },
    { title: "Support & Resistance Dynamics", level: "Intermediate", duration: "90 mins", desc: "Identify key supply and demand zones where institutions place massive market block orders." },
    { title: "Moving Average Confluences", level: "Intermediate", duration: "75 mins", desc: "Utilize combined short and long term exponential indicators to smoothly filter fakeouts." },
    { title: "Advanced Fibonacci Retracements", level: "Advanced", duration: "120 mins", desc: "Master golden ratio entry points combined with micro market structure shift rules." },
    { title: "Trading Psychology & Edge", level: "Advanced", duration: "90 mins", desc: "Conquer human cognitive bias factors like FOMO and system overtrading to secure long term scale." }
];

function renderModules(filterLevel) {
    const grid = document.getElementById("modules-grid");
    if (!grid) return;
    grid.innerHTML = "";
    
    const filtered = filterLevel === "all" 
        ? academyModules 
        : academyModules.filter(mod => mod.level === filterLevel);
        
    filtered.forEach(mod => {
        const elementMarkup = `
            <div class="card">
                <span class="badge">${mod.level}</span>
                <h3>${mod.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0.25rem 0 0.75rem 0;">⏱ Duration: ${mod.duration}</p>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${mod.desc}</p>
            </div>
        `;
        grid.innerHTML += elementMarkup;
    });
}

function initAcademyFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            buttons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            
            const selection = e.target.getAttribute("data-filter");
            renderModules(selection);
        });
    });
}

function initContactForm() {
    const form = document.getElementById("trading-contact-form");
    const feedback = document.getElementById("form-feedback");
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); 
            
            const userSubmission = {
                name: document.getElementById("fullname").value,
                email: document.getElementById("email").value,
                experience: document.getElementById("experience").value,
                dateSubmitted: new Date().toLocaleDateString()
            };
            
            localStorage.setItem("latestTraderRegistration", JSON.stringify(userSubmission));
            
            feedback.innerHTML = `Welcome to Bald Trading, <strong>${userSubmission.name}</strong>! Your registration configuration is safely cached. Quick-start details have been dispatched to ${userSubmission.email}.`;
            feedback.classList.remove("hidden");
            
            form.reset();
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initFooterDates();
    initMobileNav();
    
    if (document.getElementById("watchlist-container")) {
        renderWatchlist();
    }
    if (document.getElementById("modules-grid")) {
        renderModules("all");
        initAcademyFilters();
    }
    if (document.getElementById("trading-contact-form")) {
        initContactForm();
    }
    if (document.getElementById("submission-summary")) {
        renderSubmissionSummary();
    }
});

function initFooterDates() {
    const yearEl = document.getElementById("current-year");
    const modifiedEl = document.getElementById("last-modified");
    
    if (yearEl) yearEl.textContent = `${new Date().getFullYear()}`;
    if (modifiedEl) modifiedEl.textContent = `${document.lastModified}`;
}

function initMobileNav() {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }
}

const marketAssets = [
    { name: "Bitcoin", symbol: "BTC", price: 67250, change: 2.4, trend: "up" },
    { name: "Ethereum", symbol: "ETH", price: 3520, change: -1.1, trend: "down" },
    { name: "S&P 500 ETF", symbol: "SPY", price: 530.20, change: 0.6, trend: "up" },
    { name: "Gold Trust", symbol: "GLD", price: 218.40, change: -0.3, trend: "down" }
];

function renderWatchlist() {
    const container = document.getElementById("watchlist-container");
    if (!container) return;
    container.innerHTML = ""; 
    
    marketAssets.forEach(asset => {
        const statusClass = asset.trend === "up" ? "price-up" : "price-down";
        const prefix = asset.trend === "up" ? "+" : "";
        
        const cardHTML = `
            <div class="card">
                <h3>${asset.name} <span>(${asset.symbol})</span></h3>
                <p class="price">$${asset.price.toLocaleString()}</p>
                <p class="${statusClass}">${prefix}${asset.change}% Today</p>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

const academyModules = [
    { title: "Introduction to Price Action", level: "Beginner", duration: "45 mins", desc: "Learn to read structural Japanese candlesticks and high-probability market trends cleanly." },
    { title: "Risk Management Matrix", level: "Beginner", duration: "60 mins", desc: "The definitive absolute golden rule of positions sizing and guarding capital accounts safely." },
    { title: "Support & Resistance Dynamics", level: "Intermediate", duration: "90 mins", desc: "Identify key supply and demand zones where institutions place massive market block orders." },
    { title: "Moving Average Confluences", level: "Intermediate", duration: "75 mins", desc: "Utilize combined short and long term exponential indicators to smoothly filter fakeouts." },
    { title: "Advanced Fibonacci Retracements", level: "Advanced", duration: "120 mins", desc: "Master golden ratio entry points combined with micro market structure shift rules." },
    { title: "Trading Psychology & Edge", level: "Advanced", duration: "90 mins", desc: "Conquer human cognitive bias factors like FOMO and system overtrading to secure long term scale." }
];

function renderModules(filterLevel) {
    const grid = document.getElementById("modules-grid");
    if (!grid) return;
    grid.innerHTML = "";
    
    const filtered = filterLevel === "all" 
        ? academyModules 
        : academyModules.filter(mod => mod.level === filterLevel);
        
    filtered.forEach(mod => {
        const elementMarkup = `
            <div class="card">
                <span class="badge">${mod.level}</span>
                <h3>${mod.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0.25rem 0 0.75rem 0;">⏱ Duration: ${mod.duration}</p>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${mod.desc}</p>
            </div>
        `;
        grid.innerHTML += elementMarkup;
    });
}

function initAcademyFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            buttons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            
            const selection = e.target.getAttribute("data-filter");
            renderModules(selection);
        });
    });
}

function initContactForm() {
    const form = document.getElementById("trading-contact-form");
    if (form) {
        form.addEventListener("submit", () => {
            const userSubmission = {
                name: document.getElementById("fullname").value,
                email: document.getElementById("email").value,
                experience: document.getElementById("experience").value,
                dateSubmitted: new Date().toLocaleDateString()
            };
            
            localStorage.setItem("latestTraderRegistration", JSON.stringify(userSubmission));
        });
    }
}

function renderSubmissionSummary() {
    const summaryContainer = document.getElementById("submission-summary");
    if (!summaryContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const urlName = urlParams.get("fullname");
    const urlEmail = urlParams.get("email");
    const urlExperience = urlParams.get("experience");

    let displayName = urlName;
    let displayEmail = urlEmail;
    let displayExp = urlExperience;

    if (!urlName) {
        const localData = JSON.parse(localStorage.getItem("latestTraderRegistration"));
        if (localData) {
            displayName = localData.name;
            displayEmail = localData.email;
            displayExp = localData.experience;
        } else {
            summaryContainer.innerHTML = `<p>No live registration context parameter strings detected.</p>`;
            return;
        }
    }

    summaryContainer.innerHTML = `
        <p>👤 <strong>Registered Name:</strong> ${displayName}</p>
        <p>📧 <strong>Email Address:</strong> ${displayEmail}</p>
        <p>📊 <strong>Experience Tier:</strong> ${displayExp.toUpperCase()}</p>
        <p>📅 <strong>Timestamp Status:</strong> Active Processing</p>
    `;
}

function initMobileNav() {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation(); 
            navMenu.classList.toggle("open");
            
            const isOpen = navMenu.classList.contains("open");
            toggleBtn.setAttribute("aria-expanded", isOpen);
            

            toggleBtn.textContent = isOpen ? "✕" : "☰";
        });

        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
                navMenu.classList.remove("open");
                toggleBtn.textContent = "☰";
                toggleBtn.setAttribute("aria-expanded", "false");
            }
        });
    }
}
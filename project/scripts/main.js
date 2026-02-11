"use strict";

/* DATA */

const positions = [
    {
        id: "goalkeeper",
        name: "Goalkeeper",
        emoji: "🧤",
        fieldEmoji: "🥅",
        shortName: "GK",
        description: "The goalkeeper is the last line of defense. They are the only player allowed to use their hands within the penalty area. A great goalkeeper must have quick reflexes, strong decision-making, and excellent communication with defenders.",
        skills: ["Reflexes", "Communication", "Positioning"],
    },
    {
        id: "defender",
        name: "Defender",
        emoji: "🛡️",
        fieldEmoji: "👟",
        shortName: "DEF",
        description: "Defenders protect the goal and stop opposing attackers. They need strong tackling, heading ability, and positioning skills. Central defenders organize the backline while fullbacks provide width and attacking support.",
        skills: ["Tackling", "Heading", "Positioning"],
    },
    {
        id: "midfielder",
        name: "Midfielder",
        emoji: "⚙️",
        fieldEmoji: "⚽",
        shortName: "MID",
        description: "Midfielders are the engine of the team. They link defense and attack, controlling the pace and direction of play. They need high stamina, passing accuracy, and tactical intelligence to dominate the center of the pitch.",
        skills: ["Passing", "Stamina", "Vision"],
    },
    {
        id: "forward",
        name: "Forward",
        emoji: "⚡",
        fieldEmoji: "🎯",
        shortName: "FWD",
        description: "Forwards are responsible for scoring goals and creating chances. They need finishing ability, speed, and smart movement to beat defenders. A good forward can change the game with a single moment of brilliance.",
        skills: ["Finishing", "Speed", "Movement"],
    },
];

const rules = [
    {
        id: 1,
        icon: "⏱️",
        title: "Match Duration",
        category: "basics",
        body: "A standard soccer match consists of two halves of 45 minutes each, with a 15-minute halftime break. The referee may add extra time (injury time) at the end of each half to compensate for stoppages. In knockout competitions, a drawn match may go to extra time (two 15-minute periods) and then a penalty shootout.",
    },
    {
        id: 2,
        icon: "👥",
        title: "Number of Players",
        category: "basics",
        body: "Each team fields 11 players, including one goalkeeper. A team must have at least 7 players on the field to continue the match. Each team is usually allowed up to 3 substitutions in a standard competitive match (5 in some competitions). The squad typically has around 16–18 players including substitutes.",
    },
    {
        id: 3,
        icon: "⚽",
        title: "Objective of the Game",
        category: "basics",
        body: "The objective is to score more goals than the opposing team by getting the ball into the opposing team's net. A goal is scored when the entire ball crosses the goal line between the goalposts and under the crossbar. The team with the most goals at the end of the match wins.",
    },
    {
        id: 4,
        icon: "🟨",
        title: "Yellow Card",
        category: "fouls",
        body: "A yellow card is a formal caution given by the referee for unsporting behavior, dissent, persistent rule-breaking, or delaying the restart of play. A player who receives two yellow cards in the same match is automatically shown a red card and must leave the field.",
    },
    {
        id: 5,
        icon: "🟥",
        title: "Red Card",
        category: "fouls",
        body: "A red card results in the immediate dismissal of a player from the match. Red cards are issued for serious foul play, violent conduct, spitting, denying an obvious goal-scoring opportunity with a deliberate handball, or receiving two yellow cards. The dismissed player's team must continue with ten players.",
    },
    {
        id: 6,
        icon: "🚫",
        title: "Offside Rule",
        category: "fouls",
        body: "A player is in an offside position if they are in the opponent's half and closer to the goal line than both the ball and the second-to-last opponent when the ball is played to them. Simply being in an offside position is not an offense — the player must be actively involved in play. The offside rule prevents players from 'goal hanging'.",
    },
    {
        id: 7,
        icon: "🤝",
        title: "Free Kicks",
        category: "restarts",
        body: "Free kicks are awarded when a foul is committed. A direct free kick allows the player to shoot directly at the goal. An indirect free kick must touch another player before entering the goal. A wall of defending players may be set up at least 9.15 meters (10 yards) from the ball during a free kick.",
    },
    {
        id: 8,
        icon: "⚪",
        title: "Penalty Kick",
        category: "restarts",
        body: "A penalty kick is awarded when a foul that would normally result in a direct free kick is committed by a defending player inside their own penalty area. The kick is taken from the penalty spot (11 meters from the goal). Only the goalkeeper and the kicker are allowed in the penalty area during the kick.",
    },
];

const equipmentItems = [
    { emoji: "⚽", name: "Soccer Ball", description: "The official ball is spherical with a circumference of 68–70 cm (size 5 for adults). Beginners can start with a size 4 or 5 ball for practice." },
    { emoji: "👕", name: "Jersey & Shorts", description: "Each team wears matching jerseys to distinguish players. The uniform includes a shirt, shorts, and socks in team colors." },
    { emoji: "🦺", name: "Shin Guards", description: "Mandatory protective gear worn under socks. Shin guards protect the lower legs from tackles and accidental kicks during play." },
    { emoji: "👟", name: "Cleats / Boots", description: "Specialized footwear with studs on the sole for traction on grass or turf. Proper boots improve control, speed, and injury prevention." },
    { emoji: "🥅", name: "Goalpost", description: "The full-size goal is 7.32 m wide and 2.44 m tall. Portable mini-goals are great for beginners practicing at parks." },
    { emoji: "🏟️", name: "Playing Field", description: "An official pitch is 100–110 m long and 64–75 m wide. Beginners can play on smaller fields to develop their skills gradually." },
];

const quizQuestions = [
    {
        question: "How long is each half of a standard soccer match?",
        options: ["30 minutes", "40 minutes", "45 minutes", "60 minutes"],
        correct: 2,
        explanation: "Each half lasts 45 minutes, making a total of 90 minutes of regular play.",
    },
    {
        question: "How many players does each team have on the field?",
        options: ["9", "10", "11", "12"],
        correct: 2,
        explanation: "Each team fields 11 players, including one goalkeeper.",
    },
    {
        question: "Where is a penalty kick taken from?",
        options: ["The center circle", "The goal area", "The corner arc", "The penalty spot (11m from goal)"],
        correct: 3,
        explanation: "A penalty kick is taken from the penalty spot, 11 meters (12 yards) in front of the goal.",
    },
];

/* UTILITIES */
const getCurrentPage = () => {
    const parts = window.location.pathname.split("/");
    return parts[parts.length - 1] || "index.html";
};

const formatDate = (date) => date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const showNotification = (message, type = "success") => {
    document.querySelector(".site-notification")?.remove();
    
    const notification = document.createElement("div");
    notification.className = `site-notification site-notification--${type}`;
    notification.setAttribute("role", "alert");
    notification.style.cssText = `position:fixed;bottom:1.5rem;right:1.5rem;background:${type === "success" ? "#2D5016" : "#dc3545"};color:#fff;padding:.9rem 1.4rem;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.25);font-family:'Roboto',sans-serif;font-weight:700;font-size:.95rem;z-index:9999;animation:slideInUp .3s ease`;
    notification.textContent = message;

    if (!document.querySelector("style[data-notif]")) {
        const style = document.createElement("style");
        style.setAttribute("data-notif", "");
        style.textContent = `@keyframes slideInUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}`;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3500);
};

/* NAVIGATION */
const initNavigation = () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        });
        
        const href = link.getAttribute("href");
        const current = getCurrentPage();
        if (href === current || (current === "index.html" && href === "./")) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
};

/* HOME PAGE */
const initHomePage = () => {
    const statItems = document.querySelectorAll(".stat-number");
    if (statItems.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                const suffix = el.dataset.suffix || "";
                let current = 0;
                const increment = Math.ceil(target / 40);
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = `${target}${suffix}`;
                        clearInterval(timer);
                    } else {
                        el.textContent = `${current}${suffix}`;
                    }
                }, 40);
                
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statItems.forEach(el => observer.observe(el));
};

/* RULES PAGE */
const initRulesPage = () => {
    const rulesContainer = document.querySelector("#rules-container");
    if (!rulesContainer) return;

    renderRules("all");

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderRules(btn.dataset.category);
        });
    });

    initQuiz();
};

const renderRules = (category) => {
    const container = document.querySelector("#rules-container");
    if (!container) return;

    const filtered = category === "all" ? rules : rules.filter(r => r.category === category);

    if (filtered.length === 0) {
        container.innerHTML = `<p class="no-messages">No rules found for this category.</p>`;
        return;
    }

    container.innerHTML = filtered.map(rule => `
        <article class="rule-card" id="rule-${rule.id}" data-category="${rule.category}">
            <button class="rule-header" aria-expanded="false" aria-controls="rule-body-${rule.id}">
                <span class="rule-header-left">
                    <span class="rule-icon" aria-hidden="true">${rule.icon}</span>
                    <span class="rule-title">${rule.title}</span>
                </span>
                <span class="rule-category-badge">${rule.category}</span>
                <span class="rule-toggle-icon" aria-hidden="true">▼</span>
            </button>
            <div class="rule-body" id="rule-body-${rule.id}" role="region">
                <p>${rule.body}</p>
            </div>
        </article>
    `).join("");

    container.querySelectorAll(".rule-header").forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".rule-card");
            const isOpen = card.classList.toggle("open");
            btn.setAttribute("aria-expanded", String(isOpen));
        });
    });
};

/* QUIZ */
let currentQuizIndex = 0;
let quizScore = 0;

const initQuiz = () => renderQuizQuestion();

const renderQuizQuestion = () => {
    const container = document.querySelector("#quiz-body");
    if (!container) return;

    if (currentQuizIndex >= quizQuestions.length) {
        const percent = Math.round((quizScore / quizQuestions.length) * 100);
        const message = percent === 100 ? "🏆 Perfect score! You know your soccer rules!" 
            : percent >= 67 ? "⚽ Great job! You have a solid understanding of the rules." 
            : "📚 Keep reading the rules above — you'll get there!";

        container.innerHTML = `
            <div style="text-align:center;padding:1rem">
                <p style="font-size:2rem;margin-bottom:.5rem">🎉</p>
                <h3 style="color:var(--dark-green);margin-bottom:.5rem">Quiz Complete!</h3>
                <p>You scored <strong>${quizScore} out of ${quizQuestions.length}</strong></p>
                <p>${message}</p>
                <button class="btn mt-3" id="restart-quiz">Try Again</button>
            </div>
        `;

        document.querySelector("#restart-quiz")?.addEventListener("click", () => {
            currentQuizIndex = 0;
            quizScore = 0;
            renderQuizQuestion();
        });
        return;
    }

    const q = quizQuestions[currentQuizIndex];
    container.innerHTML = `
        <p class="quiz-question">Q${currentQuizIndex + 1}/${quizQuestions.length}: ${q.question}</p>
        <div class="quiz-options">
            ${q.options.map((opt, i) => `
                <button class="quiz-option" data-index="${i}" type="button">
                    <span>${String.fromCharCode(65 + i)}.</span> ${opt}
                </button>
            `).join("")}
        </div>
        <div id="quiz-feedback" role="alert"></div>
    `;

    container.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => {
            const selected = parseInt(btn.dataset.index, 10);
            const feedback = document.querySelector("#quiz-feedback");
            const allOptions = document.querySelectorAll(".quiz-option");

            allOptions.forEach(b => {
                b.disabled = true;
                b.style.cursor = "default";
            });

            const isCorrect = selected === q.correct;

            if (isCorrect) {
                quizScore++;
                btn.classList.add("correct");
                feedback.className = "show correct";
                feedback.textContent = `✅ Correct! ${q.explanation}`;
            } else {
                btn.classList.add("wrong");
                allOptions[q.correct].classList.add("correct");
                feedback.className = "show wrong";
                feedback.textContent = `❌ Not quite. ${q.explanation}`;
            }

            setTimeout(() => {
                currentQuizIndex++;
                renderQuizQuestion();
            }, 2200);
        });
    });
};

/* POSITIONS PAGE */
const initPositionsPage = () => {
    const fieldDiagram = document.querySelector("#field-diagram");
    const positionInfo = document.querySelector("#position-info");
    if (!fieldDiagram || !positionInfo) return;

    renderPositionCards();
    showPositionInfo(positions[0].id);

    fieldDiagram.querySelectorAll(".position-dot").forEach(dot => {
        dot.addEventListener("click", (e) => {
            const btn = e.target.closest(".position-dot");
            if (!btn) return;
            
            showPositionInfo(btn.dataset.position);
            fieldDiagram.querySelectorAll(".position-dot").forEach(d => d.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    renderEquipmentCards();
    initLikeButton();
};

const renderPositionCards = () => {
    const grid = document.querySelector("#positions-grid");
    if (!grid) return;

    grid.innerHTML = positions.map(pos => `
        <article class="position-card">
            <span class="position-emoji" aria-hidden="true">${pos.emoji}</span>
            <div>
                <h3>${pos.name}</h3>
                <p>${pos.description}</p>
                <p><strong>Key Skills:</strong> ${pos.skills.join(", ")}</p>
            </div>
        </article>
    `).join("");
};

const showPositionInfo = (posId) => {
    const pos = positions.find(p => p.id === posId);
    const infoCard = document.querySelector("#position-info");
    if (!pos || !infoCard) return;

    infoCard.innerHTML = `
        <h3>${pos.emoji} ${pos.name}</h3>
        <p>${pos.description}</p>
        <p><strong>Key Skills:</strong> ${pos.skills.join(" · ")}</p>
    `;
};

const renderEquipmentCards = () => {
    const grid = document.querySelector("#equipment-grid");
    if (!grid) return;

    grid.innerHTML = equipmentItems.map(item => `
        <article class="equipment-card">
            <div class="equipment-emoji" aria-hidden="true">${item.emoji}</div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </article>
    `).join("");
};

/* LIKE BUTTON */
const initLikeButton = () => {
    const likeBtn = document.querySelector("#like-btn");
    const likeCountEl = document.querySelector("#like-count");
    if (!likeBtn || !likeCountEl) return;

    let likeData = JSON.parse(localStorage.getItem("basicSoccer_likes")) || { liked: false, count: 248 };

    if (likeData.liked) {
        likeBtn.classList.add("liked");
        likeBtn.innerHTML = `<span class="like-icon">⭐</span> You liked this!`;
    }

    likeCountEl.textContent = `${likeData.count} people like soccer`;

    likeBtn.addEventListener("click", () => {
        likeData.liked = !likeData.liked;
        likeData.count += likeData.liked ? 1 : -1;

        likeBtn.classList.toggle("liked", likeData.liked);
        likeBtn.innerHTML = likeData.liked 
            ? `<span class="like-icon">⭐</span> You liked this!`
            : `<span class="like-icon">⭐</span> I like soccer!`;
        
        likeCountEl.textContent = `${likeData.count} people like soccer`;
        localStorage.setItem("basicSoccer_likes", JSON.stringify(likeData));
        
        showNotification(likeData.liked ? "Thanks for the like! ⚽" : "Like removed.", likeData.liked ? "success" : "error");
    });
};

/* CONTACT FORM */
const initContactForm = () => {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    form.addEventListener("submit", handleFormSubmit);

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");

    if (nameInput) {
        nameInput.addEventListener("blur", () => validateField(nameInput, "name"));
        nameInput.addEventListener("input", () => clearError(nameInput));
    }

    if (emailInput) {
        emailInput.addEventListener("blur", () => validateField(emailInput, "email"));
        emailInput.addEventListener("input", () => clearError(emailInput));
    }

    loadSavedMessages();

    document.querySelector("#clear-messages")?.addEventListener("click", () => {
        if (!confirm("Are you sure you want to clear all saved messages?")) return;
        localStorage.removeItem("basicSoccer_messages");
        loadSavedMessages();
        showNotification("All messages cleared.", "error");
    });
};

const validateField = (input, type) => {
    const errorEl = document.querySelector(`#${type}-error`);
    const value = input.value.trim();

    let isValid = true;
    let message = "";

    if (type === "name" && value.length < 2) {
        isValid = false;
        message = "Please enter your name (at least 2 characters).";
    } else if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        isValid = false;
        message = "Please enter a valid email address.";
    }

    if (!isValid) {
        input.classList.remove("valid");
        input.classList.add("invalid");
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add("show");
        }
        return false;
    }

    input.classList.remove("invalid");
    input.classList.add("valid");
    errorEl?.classList.remove("show");
    return true;
};

const clearError = (input) => {
    input.classList.remove("invalid", "valid");
    document.querySelector(`#${input.id}-error`)?.classList.remove("show");
};

const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const topicSelect = document.querySelector("#topic");
    const messageInput = document.querySelector("#message");

    if (!validateField(nameInput, "name") || !validateField(emailInput, "email")) {
        showNotification("Please fix the errors before submitting.", "error");
        return;
    }

    const entry = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        topic: topicSelect?.value || "General",
        message: messageInput?.value.trim() || "",
        date: new Date().toISOString(),
    };

    const messages = JSON.parse(localStorage.getItem("basicSoccer_messages")) || [];
    messages.unshift(entry);
    localStorage.setItem("basicSoccer_messages", JSON.stringify(messages.slice(0, 5)));

    const successEl = document.querySelector("#form-success");
    if (successEl) {
        successEl.innerHTML = `
            <h3>✅ Message Sent!</h3>
            <p>Thank you, <strong>${entry.name}</strong>! We received your message about "<em>${entry.topic}</em>" and will reply to ${entry.email} soon.</p>
        `;
        successEl.classList.add("show");
    }

    e.target.reset();
    document.querySelectorAll("#contact-form input").forEach(i => i.classList.remove("valid", "invalid"));

    loadSavedMessages();
    showNotification("Message saved successfully! ⚽");
};

const loadSavedMessages = () => {
    const container = document.querySelector("#saved-messages-list");
    if (!container) return;

    const messages = JSON.parse(localStorage.getItem("basicSoccer_messages")) || [];

    if (messages.length === 0) {
        container.innerHTML = `<p class="no-messages">No messages saved yet. Be the first to reach out!</p>`;
        return;
    }

    container.innerHTML = messages.map(msg => `
        <div class="message-item">
            <p class="msg-name">${msg.name}</p>
            <p class="msg-date">${formatDate(new Date(msg.date))} · Topic: ${msg.topic}</p>
            <p class="msg-text">${msg.message || "(No message body)"}</p>
        </div>
    `).join("");
};

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initHomePage();
    initRulesPage();
    initPositionsPage();
    initContactForm();
    
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});
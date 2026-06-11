// Global System Storage Mapping Configurations
const AppState = {
    coins: 45,
    cashBalance: 75.00,
    currentLevel: 1,
    minWithdrawal: 65.00,
    maxWithdrawal: 100.00,
    activeSkinId: 1, 
    lastAdTimestamp: 0,
    
    // Core Game Currency Ledger Structures
    applesInventory: 500,
    eggsInventory: 10,
    unlockedSkinsArray: [1] 
};

// NEW: 6-Level Quest Memory Structure Configuration 
// Each level requires a user to pass 3 pillars to cross the milestone (₹1 ad revenue equivalent)
const QuestEngine = {
    targetPerLevel: 3, 
    levels: [
        { id: 1, progress: 0, claimed: false },
        { id: 2, progress: 0, claimed: false },
        { id: 3, progress: 0, claimed: false },
        { id: 4, progress: 0, claimed: false },
        { id: 5, progress: 0, claimed: false },
        { id: 6, progress: 0, claimed: false }
    ]
};

// Vector Core Configurations Matrix for 60FPS Mechanics
const GameConfig = {
    gravity: 0.22,          
    jumpStrength: -4.5,     
    forwardSpeed: 3.8,   //2.2 is a sweet spot for smooth difficulty curve pacing and fair player reaction windows   
    pipeSpawnInterval: 120, 
    pipeGap: 185            
};

// --- ADD THIS DICTIONARY DIRECTLY BELOW GAMECONFIG SYSTEM OPTIONS ---
const LevelMissionBlueprints = {
    1: {
        session: "🌅 Session 1: Morning Focus",
        desc: "Initialize flight parameters safely without encountering terrain collisions.",
        tasks: [
            { text: "Clear 3 Pillars cleanly", hint: "Launch flight arena and pass columns successfully." },
            { text: "Verify sponsor frame", hint: "Initialize local ad-network optimization panels." },
            { text: "Sync token metrics", hint: "Establish secure token validation ledger handshakes." }
        ]
    },
    2: {
        session: "🌅 Session 1: Morning Focus",
        desc: "Perform precision canopy runs to extract localized environmental items.",
        tasks: [
            { text: "Capture 3 organic Apples", hint: "Collect crisp red apples passing through the forest canvas." },
            { text: "Verify server distribution", hint: "Download updated regional resource configs." },
            { text: "Update secure wallet maps", hint: "Map daily verification counters directly to balance slots." }
        ]
    },
    3: {
        session: "☀️ Session 2: Midday Cruise",
        desc: "Navigate narrow corridors under structural compressed speed vectors.",
        tasks: [
            { text: "Clear 4 Pillars cleanly", hint: "Maintain velocity through elevated bamboo joint rings." },
            { text: "Cache local high-score hashes", hint: "Verify compliance check validations inside storage clusters." },
            { text: "Pull reward configurations", hint: "Fetch updated multi-tier network CPM bid factors." }
        ]
    },
    4: {
        session: "☀️ Session 2: Midday Cruise",
        desc: "Isolate and secure mythic-class golden resources safely.",
        tasks: [
            { text: "Collect 1 Golden Egg", hint: "Track and intersect a high-tier spawning item frame." },
            { text: "Run anti-cheat evaluations", hint: "Verify local runtime canvas signatures match original maps." },
            { text: "Establish link connections", hint: "Establish background connections to cloud hosting nodes." }
        ]
    },
    5: {
        session: "🌌 Session 3: Evening Climax",
        desc: "Maintain sustained high-frequency flight mechanics under dark profiles.",
        tasks: [
            { text: "Clear 5 Pillars continuously", hint: "Complete a single extended flight run without crashing." },
            { text: "Load evening ecosystem assets", hint: "Compile night-shading graphics matrices." },
            { text: "Re-verify telemetry vectors", hint: "Synchronize local physics settings with server clocks." }
        ]
    },
    6: {
        session: "🌌 Session 3: Evening Climax",
        desc: "Extract maximum possible score values to conclude daily operational tiers.",
        tasks: [
            { text: "Score 6 total points", hint: "Accumulate points from both pillars and caught fruits." },
            { text: "Run app compliance audits", hint: "Perform final encrypted system tracking checks." },
            { text: "Finalize withdrawal ledger links", hint: "Open balance processing pathways for payout queries." }
        ]
    }
};

const SkinCatalogMatrix = [];

function generate50SkinsCatalogData() {
    for (let id = 1; id <= 50; id++) {
        let name = `Skin Core #${id}`;
        let rarity = "common";
        let costValue = 150;
        let currencyType = "apple";
        let fillGradientColors = ["#94A3B8", "#64748B"];

        if (id <= 15) {
            rarity = "common"; 
            costValue = 150; // Updated Baseline Common Pricing Profile
            currencyType = "apple";
            const hues = ["#64748B", "#06B6D4", "#EC4899", "#F59E0B", "#10B981", "#84CC16", "#3B82F6", "#6366F1", "#A855F7", "#14B8A6", "#F43F5E", "#0EA5E9", "#D946EF", "#8B5CF6", "#65A30D"];
            fillGradientColors = [hues[id - 1], adjustColorBrightness(hues[id - 1], -20)];
            name = `Slate Minimal ${id}`;
        } else if (id <= 30) {
            rarity = "rare"; 
            costValue = 350; // Updated Advanced Rare Pricing Profile
            currencyType = "apple";
            const hues = ["#2563EB", "#DC2626", "#059669", "#7C3AED", "#9333EA", "#EA580C", "#2563EB", "#DC2626", "#059669", "#7C3AED", "#9333EA", "#EA580C", "#2563EB", "#DC2626", "#059669"];
            fillGradientColors = [hues[id - 16], "#1E293B"];
            name = `Glow Element ${id}`;
        } else if (id <= 40) {
            rarity = "epic"; 
            costValue = 500; // Updated Premium Epic Pricing Profile
            currencyType = "apple";
            const matrixPicks = [["#A855F7", "#06B6D4"], ["#FF007F", "#7928CA"], ["#00DF89", "#0070F3"], ["#FF4D4D", "#F9CB28"], ["#0070F3", "#FF0080"], ["#38BDF8", "#34D399"], ["#FB7185", "#F43F5E"], ["#818CF8", "#C084FC"], ["#F472B6", "#E879F9"], ["#2DD4BF", "#FBBF24"]];
            fillGradientColors = matrixPicks[id - 31];
            name = `Cyber Fusion ${id}`;
        } else {
            rarity = "mythical"; 
            currencyType = "egg";
            
            // DYNAMIC CALCULATION: Maps 10 mythical steps evenly from 25 to 250 eggs max
            let stepIndex = id - 41; // Scale runs from 0 to 9 step indicators cleanly
            costValue = 25 + Math.round(stepIndex * (225 / 9)); 
            
            const TVGradients = [["#F59E0B", "#EF4444"], ["#10B981", "#059669"], ["#6366F1", "#4F46E5"], ["#EC4899", "#D946EF"], ["#3B82F6", "#1D4ED8"], ["#F43F5E", "#BE123C"], ["#06B6D4", "#0891B2"], ["#A855F7", "#6D28D9"], ["#14B8A6", "#0F766E"], ["#FF4500", "#FF8C00"]];
            fillGradientColors = TVGradients[stepIndex];
            name = `Mythic Lord ${id}`;
        }
        SkinCatalogMatrix.push({ id, name, rarity, costValue, currencyType, fillGradientColors });
    }
}

function adjustColorBrightness(hex, percent) {
    let num = parseInt(hex.replace("#",""),16), amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<0?0:R:255)*0x10000 + (G<255?G<0?0:G:255)*0x100 + (B<255?B<0?0:B:255)).toString(16).slice(1);
}

let ctx, canvas;
let gameLoopId = null;
let currentFrameCount = 0;
let isGameRunning = false;
let score = 0;
let pillarScore = 0;
let parallaxBackgroundOffset = 0;

let gameSessionApplesCollected = 0;
let gameSessionEggsCollected = 0;

const playerBird = { x: 75, y: 220, radius: 24, velocity: 0, tiltAngle: 0 };//bird's position, size, and physics state
let activePipesArray = [];
let activeItemsArray = [];
let localAudioContext = null;

document.addEventListener("DOMContentLoaded", () => {
    generate50SkinsCatalogData();
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    
    resizeGameCanvasToWrapperDimensions();
    window.addEventListener("resize", resizeGameCanvasToWrapperDimensions);

    if (!sessionStorage.getItem("crashCount")) { sessionStorage.setItem("crashCount", "0"); }
    if (!localStorage.getItem("flygems_best_score")) { localStorage.setItem("flygems_best_score", "0"); }
    
    if (!localStorage.getItem("flygems_lifespan_level")) { localStorage.setItem("flygems_lifespan_level", "1"); }
    if (!localStorage.getItem("flygems_total_pillars")) { localStorage.setItem("flygems_total_pillars", "0"); }
    if (!localStorage.getItem("flygems_xp_progress")) { localStorage.setItem("flygems_xp_progress", "45"); }
    
    // --- INTEGRATED: RUN THE 24-HOUR RESET AUDIT CHECK GATES ---
    evaluateDailyQuestResetWindow();

    // Read and synchronize Quest state storage properties to survive browser updates cleanly
    if (localStorage.getItem("flygems_quest_state")) {
        const loadedQuests = JSON.parse(localStorage.getItem("flygems_quest_state"));
        QuestEngine.levels = loadedQuests;
    } else {
        saveQuestEngineToLocalStorage();
    }

    initGameMenuTriggers();
    rebuildQuestDashboardDOM(); // Renders the fresh level 1-6 layouts natively
    updateEconomyDisplaysDOM();
    renderForestSceneStatic();
});

// ==========================================================================
// 24-HOUR DAILY QUEST TIME-LOCK RESET ENGINE
// ==========================================================================

function evaluateDailyQuestResetWindow() {
    // 1. Get the current date in local time string format (YYYY-MM-DD)
    const todayDateString = new Date().toLocaleDateString('en-CA'); // Outputs clean ISO 'YYYY-MM-DD'
    
    // 2. Read the last recorded login reset date from client local state memory
    const lastResetRecorded = localStorage.getItem("flygems_last_daily_reset_date");

    // 3. Conditional analysis: If the dates don't match, a new day has arrived!
    if (lastResetRecorded !== todayDateString) {
        
        // Execute an overarching reset loop across all 6 level index blocks
        QuestEngine.levels = [
            { id: 1, progress: 0, claimed: false },
            { id: 2, progress: 0, claimed: false },
            { id: 3, progress: 0, claimed: false },
            { id: 4, progress: 0, claimed: false },
            { id: 5, progress: 0, claimed: false },
            { id: 6, progress: 0, claimed: false }
        ];

        // Wipe clean any active session cooldown locks from the previous day's run
        localStorage.removeItem("flygems_cooldown_session1_end");
        localStorage.removeItem("flygems_cooldown_session2_end");

        // Serialize the refreshed clean state map arrays straight to storage
        localStorage.setItem("flygems_quest_state", JSON.stringify(QuestEngine.levels));
        
        // 4. Update the tracker timestamp key to match today's date signature stamp
        localStorage.setItem("flygems_last_daily_reset_date", todayDateString);
        
        console.log(`🎉 New day detected (${todayDateString})! Daily Quest milestones successfully cycled.`);
    } else {
        console.log(`🔒 Existing calendar day session verified. Checking structural milestones progress parameters...`);
    }
}

function saveQuestEngineToLocalStorage() {
    localStorage.setItem("flygems_quest_state", JSON.stringify(QuestEngine.levels));
}

function resizeGameCanvasToWrapperDimensions() {
    const parentContainer = canvas.parentElement;
    canvas.width = parentContainer.clientWidth;
    canvas.height = parentContainer.clientHeight;
    if (!isGameRunning) renderForestSceneStatic();
}

// PROGRAMMATIC QUEST ENGINE MODULE: Builds and renders Level 1 to 6 dynamic rows
function rebuildQuestDashboardDOM() {
    const container = document.getElementById("quests-vertical-container");
    container.innerHTML = ""; // Wipe container to refresh lists safely

    QuestEngine.levels.forEach(lvl => {
        const row = document.createElement("div");
        row.className = "quest-level-item-row";

        const label = document.createElement("span");
        label.className = "quest-lvl-tag";
        label.innerText = `Lvl ${lvl.id}`;

        const progressTrack = document.createElement("div");
        progressTrack.className = "quest-progress-bar-container-middle";
        
        const progressFill = document.createElement("div");
        progressFill.className = "quest-progress-fill";
        // Compute active fill width percentage
        let percentage = (lvl.progress / QuestEngine.targetPerLevel) * 100;
        progressFill.style.width = `${Math.min(percentage, 100)}%`;
        progressTrack.appendChild(progressFill);

        const actionBtn = document.createElement("button");
        actionBtn.className = "quest-action-btn-node";

        // Evaluate state loops to dynamically update buttons and layouts
        if (lvl.claimed) {
            row.classList.add("state-claimed");
            actionBtn.innerText = "CLAIMED ✓";
        } else if (lvl.progress >= QuestEngine.targetPerLevel) {
            row.classList.add("state-claimable");
            actionBtn.innerText = "🪙 CLAIM";
            actionBtn.addEventListener("click", () => executeDailyQuestRewardClaim(lvl.id));
        } else {
    actionBtn.innerText = "GO PLAY";
    actionBtn.addEventListener("click", () => {
        // CHANGED: Run your initialization manager to build out the 3 task data matrices live
        if (typeof openMissionControlScreen === 'function') {
            openMissionControlScreen(lvl.id);
        } else {
            // Fallback safety gate routing
            activeSelectedLevelId = lvl.id;
            const lvlIndicatorNode = document.getElementById("quest-screen-lvl-num");
            if (lvlIndicatorNode) lvlIndicatorNode.innerText = lvl.id;
            showMenuPanel("screen-quest-details");
        }
    });
}

        row.appendChild(label);
        row.appendChild(progressTrack);
        row.appendChild(actionBtn);
        container.appendChild(row);
    });
}

function executeDailyQuestRewardClaim(levelId) {
    const targetLvl = QuestEngine.levels.find(l => l.id === levelId);
    if (targetLvl && !targetLvl.claimed && targetLvl.progress >= QuestEngine.targetPerLevel) {
        targetLvl.claimed = true;
        AppState.coins += 1; 
        playLevelUpSound();
        
        // --- ADD THESE TIMELOCK GENERATORS SECURELY ---
        if (levelId === 2) {
            localStorage.setItem("flygems_cooldown_session1_end", Date.now().toString());
        } else if (levelId === 4) {
            localStorage.setItem("flygems_cooldown_session2_end", Date.now().toString());
        }

        saveQuestEngineToLocalStorage();
        rebuildQuestDashboardDOM();
        updateEconomyDisplaysDOM();
    }
}

function updateEconomyDisplaysDOM() {
    document.getElementById("hud-apples-val").innerText = gameSessionApplesCollected;
    document.getElementById("hud-eggs-val").innerText = gameSessionEggsCollected;
    document.getElementById("hud-pillar-score").innerText = pillarScore;
    
    document.getElementById("bank-wallet-cash").innerText = AppState.cashBalance.toFixed(2);
    document.getElementById("bank-coins-val").innerText = AppState.coins;
    document.getElementById("shop-apples-val").innerText = AppState.applesInventory;
    document.getElementById("shop-eggs-val").innerText = AppState.eggsInventory;

    // FIX: Update the specific coin scoreboard text node exactly beside the Daily Quests header
    const questCardCoinNode = document.getElementById("quest-card-total-coins");
    if (questCardCoinNode) {
        questCardCoinNode.innerText = AppState.coins;
    }

    const currentSavedLevel = parseInt(localStorage.getItem("flygems_lifespan_level")) || 1;
    const currentSavedPillars = parseInt(localStorage.getItem("flygems_total_pillars")) || 0;
    const currentSavedXP = parseFloat(localStorage.getItem("flygems_xp_progress")) || 0;

    document.getElementById("home-level-num").innerText = currentSavedLevel;
    document.getElementById("home-total-pillars-val").innerText = currentSavedPillars;
    document.getElementById("home-level-progress-bar").style.width = `${currentSavedXP}%`;
}

function getAudioContext() {
    if (!localAudioContext) { localAudioContext = new (window.AudioContext || window.webkitAudioContext)(); }
    return localAudioContext;
}

function playJumpSound() {
    const audioCtx = getAudioContext(); const osc = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
    osc.type = "triangle"; osc.frequency.setValueAtTime(340, audioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(700, audioCtx.currentTime + 0.08);
    gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
    osc.connect(gainNode); gainNode.connect(audioCtx.destination); osc.start(); osc.stop(audioCtx.currentTime + 0.08);
}

function playCrashSound() {
    const audioCtx = getAudioContext(); const osc = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
    osc.type = "sawtooth"; osc.frequency.setValueAtTime(190, audioCtx.currentTime); osc.frequency.linearRampToValueAtTime(30, audioCtx.currentTime + 0.35);
    gainNode.gain.setValueAtTime(0.25, audioCtx.currentTime); gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
    osc.connect(gainNode); gainNode.connect(audioCtx.destination); osc.start(); osc.stop(audioCtx.currentTime + 0.35);
}

function playLevelUpSound() {
    const audioCtx = getAudioContext(); const osc = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
    osc.type = "sine"; osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.08);
    gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime); gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.16);
    osc.connect(gainNode); gainNode.connect(audioCtx.destination); osc.start(); osc.stop(audioCtx.currentTime + 0.16);
}

function showMenuPanel(targetPanelId) {
    const hudNode = document.getElementById("ingame-hud-overlay");
    if (targetPanelId === null) {
        if (hudNode) hudNode.style.display = "flex";
    } else {
        if (hudNode) hudNode.style.display = "none";
    }

    // 1. Enforce rigorous visibility resets ONLY via standard display properties
    const panelsArray = [
        "screen-home",
        "screen-crash",
        "screen-bank",
        "screen-skins",
        "screen-profile",
        "screen-quest-details" 
    ];

    panelsArray.forEach(id => {
        const panelNode = document.getElementById(id);
        if (panelNode) {
            panelNode.style.display = "none";
            panelNode.classList.remove("active-panel");
        }
    });

    // 2. Activate the requested target window layer immediately
    if (targetPanelId) {
        const targetViewNode = document.getElementById(targetPanelId);
        if (targetViewNode) {
            targetViewNode.style.display = "flex";
            targetViewNode.classList.add("active-panel");
            
            // FIX: If opening the quest details view, make sure its nested children maintain structural layouts
            if (targetPanelId === "screen-quest-details") {
                const stack = document.getElementById("quest-missions-vertical-stack");
                if (stack) stack.style.display = "flex";
            }
        } else {
            console.error(`showMenuPanel Failure: Node matching ID "${targetPanelId}" was not found.`);
        }
    }
}

function initGameMenuTriggers() {
    // --- 1. CONVERSION BANK VIEW OVERLAY ROUTING PANELS ---
    document.getElementById("btn-open-bank").addEventListener("click", () => {
        showMenuPanel("screen-bank");
        initBankInterfaceCalculations();
    });
    document.getElementById("btn-close-bank").addEventListener("click", () => {
        showMenuPanel("screen-home");
        updateEconomyDisplaysDOM();
    });

    // --- 2. SKIN STORE CUSTOMIZATION SELECTION OVERLAYS ---
    document.getElementById("btn-open-skins").addEventListener("click", () => {
        showMenuPanel("screen-skins");
        rebuildShopGridContainerDOM();
    });
    document.getElementById("btn-close-skins").addEventListener("click", () => {
        showMenuPanel("screen-home");
        updateEconomyDisplaysDOM();
        renderForestSceneStatic();
    });

    // --- 3. RE-ENGINEERED: DYNAMIC QUEST DETAILS HUB BACK NAVIGATION ---
    const backQuestScreenBtn = document.getElementById("btn-back-quest-screen");
    if (backQuestScreenBtn) {
        backQuestScreenBtn.addEventListener("click", () => {
            // Safely kill running countdown interval operations to optimize device resources
            if (qdActiveIntervalTimerId) {
                clearInterval(qdActiveIntervalTimerId);
                qdActiveIntervalTimerId = null;
            }
            showMenuPanel("screen-home");
            rebuildQuestDashboardDOM();
            updateEconomyDisplaysDOM();
        });
    }

    // --- 4. USER PROFILE ARCHIVE STORAGE CHANNELS ---
    document.getElementById("profile-trigger").addEventListener("click", () => showMenuPanel("screen-profile"));
    document.getElementById("btn-close-profile").addEventListener("click", () => showMenuPanel("screen-home"));

    // --- 5. MECHANICAL SIMULATION TIMELINES TRIPPERS ---
    document.getElementById("startGameBtn").addEventListener("click", initiateActiveGameEngine);
    document.getElementById("btn-crash-retry").addEventListener("click", initiateActiveGameEngine);
    document.getElementById("btn-crash-home").addEventListener("click", () => {
        showMenuPanel("screen-home");
        rebuildQuestDashboardDOM();
        updateEconomyDisplaysDOM();
    });

    // --- 6. CORE FLAP INTERACTION HARDWARE ENGINE EVENT WRAPPERS ---
    const interactionWrapperNode = document.querySelector(".game-stage-wrapper");
    interactionWrapperNode.addEventListener("touchstart", (e) => {
        if (isGameRunning) { e.preventDefault(); executePlayerBirdFlapAction(); }
    }, { passive: false });
    interactionWrapperNode.addEventListener("mousedown", (e) => {
        if (isGameRunning) { e.preventDefault(); executePlayerBirdFlapAction(); }
    });

    // --- 7. XP PROGRESS TRACK TOOLTIP POPUPS POPPING LOGIC ---
    const xpTrackTriggerNode = document.getElementById("xp-bar-interactive-trigger");

    if (xpTrackTriggerNode) {
        xpTrackTriggerNode.addEventListener("click", (e) => {
            e.stopPropagation(); // Block element leakage crashes
            
            const freshTotalPillarsPassed = parseInt(localStorage.getItem("flygems_total_pillars")) || 0;
            const targetPillarTextSpan = document.getElementById("home-total-pillars-val");
            if (targetPillarTextSpan) {
                targetPillarTextSpan.innerText = freshTotalPillarsPassed;
            }
            
            xpTrackTriggerNode.classList.toggle("popover-visible");
            
            if (xpTrackTriggerNode.classList.contains("popover-visible")) {
                clearTimeout(xpTrackTriggerNode.popoverTimeoutId);
                xpTrackTriggerNode.popoverTimeoutId = setTimeout(() => {
                    xpTrackTriggerNode.classList.remove("popover-visible");
                }, 2500);
            }
        });
    }

    document.getElementById("screen-home").addEventListener("click", () => {
        if (xpTrackTriggerNode) {
            xpTrackTriggerNode.classList.remove("popover-visible");
        }
    });
}

function initBankInterfaceCalculations() {
    updateEconomyDisplaysDOM();
    const rows = document.querySelectorAll(".exchange-tier-row");
    rows.forEach(row => {
        const structuralReq = parseInt(row.getAttribute("data-req"));
        const triggerBtn = row.querySelector(".exchange-trigger-btn");
        if (AppState.coins >= structuralReq) {
            row.classList.add("eligible");
            triggerBtn.removeAttribute("disabled");
        } else {
            row.classList.remove("eligible");
            triggerBtn.setAttribute("disabled", "true");
        }
    });

    const upiInput = document.getElementById("upi-id-bank");
    const payoutBtn = document.getElementById("bankWithdrawBtn");
    const validationMsg = document.getElementById("bank-validation-error-msg");

    upiInput.addEventListener("input", () => {
        const rawStr = upiInput.value.trim();
        const upiPass = /^[\w\.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(rawStr);
        const cashPass = AppState.cashBalance >= AppState.minWithdrawal && AppState.cashBalance <= AppState.maxWithdrawal;

        if (upiPass && cashPass) {
            payoutBtn.removeAttribute("disabled");
            payoutBtn.classList.add("unlocked");
            validationMsg.innerText = "UPI destination check complete. Transfer path open.";
            validationMsg.classList.add("passed");
        } else {
            payoutBtn.setAttribute("disabled", "true");
            payoutBtn.classList.remove("unlocked");
            validationMsg.classList.remove("passed");
            if (!cashPass) {
                validationMsg.innerText = `Balance constraints locked. Balance must sit between ₹${AppState.minWithdrawal} and ₹${AppState.maxWithdrawal}.`;
            } else {
                validationMsg.innerText = "Invalid UPI string address path formatting.";
            }
        }
    });
}

// ==========================================================================
// QUEST SCREEN: MISSIONS ENGINE & 2-HOUR COOLDOWN LIFECYCLE CONTROLLER
// ==========================================================================

let qdActiveIntervalTimerId = null;
let activeSelectedLevelId = 1;
let localScreenCountdownTimerId = null;

function openMissionControlScreen(levelId) {
    activeSelectedLevelId = levelId;
    
    const lvlNumSpan = document.getElementById("quest-screen-lvl-num");
    if (lvlNumSpan) lvlNumSpan.innerText = levelId;

    const missionsStackContainer = document.getElementById("quest-missions-vertical-stack");
    const timerContainerBox = document.getElementById("qd-cooldown-timer-box");
    
    if (!missionsStackContainer) return;
    missionsStackContainer.innerHTML = ""; // Clear old iterations safely

    // Clear background interval timers to avoid clock stacking
    if (qdActiveIntervalTimerId) {
        clearInterval(qdActiveIntervalTimerId);
        qdActiveIntervalTimerId = null;
    }

    // 1. Evaluate hard 2-Hour Cooldown restrictions across active session limits
    const isLockedByCooldown = checkIfTierIsLockedByCooldown(levelId);

    if (isLockedByCooldown) {
        // Reveal the cooldown box right below the banner space and above tasks
        if (timerContainerBox) timerContainerBox.style.display = "flex";
        
        let remainingSeconds = calculateMockRemainingCooldownTime(levelId);
        const clockValueDisplay = document.getElementById("qd-timer-clock-display");
        if (clockValueDisplay) clockValueDisplay.innerText = formatSecondsToTimeString(remainingSeconds);

        // Run real-time countdown progression update intervals
        qdActiveIntervalTimerId = setInterval(() => {
            remainingSeconds--;
            if (remainingSeconds <= 0) {
                clearInterval(qdActiveIntervalTimerId);
                qdActiveIntervalTimerId = null;
                openMissionControlScreen(levelId); // Reload screen layout components natively
            } else {
                if (clockValueDisplay) clockValueDisplay.innerText = formatSecondsToTimeString(remainingSeconds);
            }
        }, 1000);

        // Render tasks in a disabled, locked state beneath the countdown timer block
        buildQuestMissionsListStackDOM(missionsStackContainer, levelId, true);
    } else {
        // No active lock detected: Hide the timer component container and populate tasks normally
        if (timerContainerBox) timerContainerBox.style.display = "none";
        buildQuestMissionsListStackDOM(missionsStackContainer, levelId, false);
    }

    showMenuPanel("screen-quest-details");
}

function buildQuestMissionsListStackDOM(container, levelId, forceDisabledState) {
    const metaBlueprint = LevelMissionBlueprints[levelId];
    if (!metaBlueprint) return;

    const trackingKey = `flygems_raw_progress_lvl_${levelId}`;
    let progressState = JSON.parse(localStorage.getItem(trackingKey)) || { t1: "ready", t2: "ready", t3: "ready" };

    const internalTasksArray = [
        { id: 1, text: metaBlueprint.tasks[0].text, hint: metaBlueprint.tasks[0].hint, state: progressState.t1 },
        { id: 2, text: metaBlueprint.tasks[1].text, hint: metaBlueprint.tasks[1].hint, state: progressState.t2 },
        { id: 3, text: metaBlueprint.tasks[2].text, hint: metaBlueprint.tasks[2].hint, state: progressState.t3 }
    ];

    internalTasksArray.forEach(task => {
        const row = document.createElement("div");
        row.className = "modern-mission-task-row";
        if (forceDisabledState || task.state === "verified") row.style.opacity = "0.75";

        const textWrapper = document.createElement("div");
        textWrapper.className = "mission-text-left-container";

        const title = document.createElement("span");
        title.className = "mission-main-title-lbl";
        title.innerText = `${task.state === "verified" ? "✅" : "👉"} ${task.text}`;

        const hint = document.createElement("span");
        hint.className = "mission-micro-instruction-hint";
        hint.innerText = task.hint;

        textWrapper.appendChild(title);
        textWrapper.appendChild(hint);

        const goBtn = document.createElement("button");
        goBtn.className = "mission-left-go-btn";

        if (forceDisabledState) {
            goBtn.innerText = "LOCK";
            goBtn.className = "mission-left-go-btn state-btn-wait";
            goBtn.disabled = true;
        } else if (task.state === "verified") {
            goBtn.innerText = "DONE";
            goBtn.className = "mission-left-go-btn state-btn-done";
            goBtn.disabled = true;
        } else if (task.state === "verifying") {
            goBtn.innerText = "WAIT";
            goBtn.className = "mission-left-go-btn state-btn-wait";
            goBtn.disabled = true;
        } else {
            goBtn.innerText = "GO";
            goBtn.className = "mission-left-go-btn state-btn-go";
            goBtn.addEventListener("click", () => {
                executeTaskVerificationRoutine(task.id, levelId, trackingKey, progressState);
            });
        }

        row.appendChild(textWrapper);
        row.appendChild(goBtn); // Flex alignment shifts this to the absolute left margin edge
        container.appendChild(row);
    });
}

function executeTaskVerificationRoutine(taskId, levelId, localStorageKey, stateObject) {
    if (taskId === 1) {
        initiateActiveGameEngine();
        return;
    }
    // Simulation handlers for Ad-Network Tasks (Pending -> Verified verification cycles)
    if (taskId === 2) {
        stateObject.t2 = "verifying";
        localStorage.setItem(localStorageKey, JSON.stringify(stateObject));
        openMissionControlScreen(levelId); 
        setTimeout(() => {
            let currentLocalState = JSON.parse(localStorage.getItem(localStorageKey));
            currentLocalState.t2 = "verified";
            localStorage.setItem(localStorageKey, JSON.stringify(currentLocalState));
            playLevelUpSound();
            openMissionControlScreen(levelId); 
        }, 12000); // 12s simulated Interstitial view length requirement
        return;
    }
    if (taskId === 3) {
        stateObject.t3 = "verifying";
        localStorage.setItem(localStorageKey, JSON.stringify(stateObject));
        openMissionControlScreen(levelId);
        setTimeout(() => {
            let currentLocalState = JSON.parse(localStorage.getItem(localStorageKey));
            currentLocalState.t3 = "verified";
            localStorage.setItem(localStorageKey, JSON.stringify(currentLocalState));
            playLevelUpSound();
            openMissionControlScreen(levelId);
        }, 5000); // 5s background validation delay
        return;
    }
}

function checkIfTierIsLockedByCooldown(levelId) {
    if (levelId === 3 || levelId === 4) {
        const lvl1 = QuestEngine.levels.find(l => l.id === 1);
        const lvl2 = QuestEngine.levels.find(l => l.id === 2);
        if (!lvl1.claimed || !lvl2.claimed) return true;
        
        let completionTime = localStorage.getItem("flygems_cooldown_session1_end");
        if (!completionTime) return false;
        return (Date.now() - parseInt(completionTime)) < 2 * 60 * 60 * 1000;
    }
    if (levelId === 5 || levelId === 6) {
        const lvl3 = QuestEngine.levels.find(l => l.id === 3);
        const lvl4 = QuestEngine.levels.find(l => l.id === 4);
        if (!lvl3.claimed || !lvl4.claimed) return true;
        
        let completionTime = localStorage.getItem("flygems_cooldown_session2_end");
        if (!completionTime) return false;
        return (Date.now() - parseInt(completionTime)) < 2 * 60 * 60 * 1000;
    }
    return false;
}

function calculateMockRemainingCooldownTime(levelId) {
    let storageKey = (levelId === 3 || levelId === 4) ? "flygems_cooldown_session1_end" : "flygems_cooldown_session2_end";
    let startTime = parseInt(localStorage.getItem(storageKey));
    if (!startTime) return 7200;
    let remaining = 7200 - Math.floor((Date.now() - startTime) / 1000);
    return remaining > 0 ? remaining : 0;
}

function formatSecondsToTimeString(totalSeconds) {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function rebuildShopGridContainerDOM() {
    const gridViewport = document.getElementById("skins-grid-scroll-viewport");
    if (!gridViewport) return;
    gridViewport.innerHTML = ""; // Clear existing elements clean to prevent layout duplication

    // 1. Bucket and sort the catalog elements systematically by rarity profiles
    const structuralBuckets = {
        common: SkinCatalogMatrix.filter(s => s.rarity === "common"),
        rare: SkinCatalogMatrix.filter(s => s.rarity === "rare"),
        epic: SkinCatalogMatrix.filter(s => s.rarity === "epic"),
        mythical: SkinCatalogMatrix.filter(s => s.rarity === "mythical")
    };

    const bucketKeys = Object.keys(structuralBuckets);

    bucketKeys.forEach((rarityKey, index) => {
        const structuralSubList = structuralBuckets[rarityKey];
        if (structuralSubList.length === 0) return;

        // 2. Build a clear full-width divider section title tag header
        const groupTitleHeader = document.createElement("div");
        groupTitleHeader.style.cssText = `
            grid-column: 1 / -1; 
            text-align: left; 
            font-size: 0.85rem; 
            font-weight: 900; 
            text-transform: uppercase; 
            color: #1A202C; 
            letter-spacing: 0.8px; 
            padding: 14px 4px 6px 4px;
            border-bottom: 2px solid #EDF2F7;
            margin-top: ${index > 0 ? '18px' : '4px'};
        `;
        
        // Match explicit localized header text indicators
        const customTierLabelsMap = {
            common: "🟢 Common Core Tier (150 🍎)",
            rare: "🔵 Advanced Rare Tier (350 🍎)",
            epic: "🟣 Premium Epic Tier (500 🍎)",
            mythical: "🟠 Mythical Overlord Tier (25-250 🥚)"
        };
        groupTitleHeader.innerText = customTierLabelsMap[rarityKey];
        gridViewport.appendChild(groupTitleHeader);

        // 3. Render and mount all items belonging to the current layer
        structuralSubList.forEach(skin => {
            const isUnlocked = AppState.unlockedSkinsArray.includes(skin.id);
            const isSelectedActive = AppState.activeSkinId === skin.id;

            const card = document.createElement("div");
            card.className = `shop-skin-card r-${skin.rarity} ${isUnlocked ? 'unlocked-owned' : ''} ${isSelectedActive ? 'selected-active' : ''}`;
            
            // Apply multi-color signature gradient overlays to prevent single-color boring looks
            if (skin.fillGradientColors && skin.fillGradientColors.length >= 2) {
                card.style.background = `linear-gradient(135deg, #FFFFFF 0%, ${skin.fillGradientColors[0]}15 100%)`;
                card.style.borderColor = isSelectedActive ? '#00B0FF' : `${skin.fillGradientColors[0]}40`;
            }

            const previewCanvas = document.createElement("canvas");
            previewCanvas.width = 40; 
            previewCanvas.height = 40;
            previewCanvas.className = "skin-card-canvas-node";
            renderMiniSkinPreviewIcon(previewCanvas.getContext("2d"), skin);

            const titleText = document.createElement("p");
            titleText.className = "skin-card-title"; 
            titleText.innerText = skin.name;

            const costLabel = document.createElement("p");
            costLabel.className = "skin-card-cost-lbl";
            
            if (isSelectedActive) {
                costLabel.innerText = "EQUIPPED";
                costLabel.style.color = "#00B0FF";
            } else if (isUnlocked) {
                costLabel.innerText = "TAP TO USE";
                costLabel.style.color = "#10B981";
            } else {
                costLabel.innerText = `${skin.costValue}${skin.currencyType === 'apple' ? '🍎' : '🥚'}`;
                costLabel.style.color = "#4A5568";
            }

            card.appendChild(previewCanvas); 
            card.appendChild(titleText); 
            card.appendChild(costLabel);
            
            card.addEventListener("click", () => { executeSkinCardSelectionLogic(skin); });
            gridViewport.appendChild(card);
        });

        // 4. INJECT ADSTERRA BANNER INTERMEDIARY PLACEMENTS BETWEEN TIERS
        // Injects an isolated premium placeholder wrapper right after layers 1, 2, and 3
        if (index < bucketKeys.length - 1) {
            const adRowWrapper = document.createElement("div");
            adRowWrapper.style.cssText = "grid-column: 1 / -1; margin: 16px 0; width: 100%;";
            
            adRowWrapper.innerHTML = `
                <div class="adsterra-premium-banner-space">
                    <div class="adsterra-sandbox-micro-label">SECURE SPONSOR INTERFACE CONNECTOR (VAULT_BREAK_${rarityKey.toUpperCase()})</div>
                    <div class="adsterra-async-slot-target-sv-${rarityKey}"></div>
                </div>
            `;
            gridViewport.appendChild(adRowWrapper);
        }
    });
}

function renderMiniSkinPreviewIcon(miniCtx, skin) {
    miniCtx.save(); miniCtx.translate(20, 20);
    let gradient = miniCtx.createLinearGradient(-11, -11, 11, 11);
    gradient.addColorStop(0, skin.fillGradientColors[0]); gradient.addColorStop(1, skin.fillGradientColors[1]);
    miniCtx.fillStyle = gradient; miniCtx.strokeStyle = "#1A202C"; miniCtx.lineWidth = 1.5;
    miniCtx.beginPath(); miniCtx.arc(0, 0, 11, 0, Math.PI * 2); miniCtx.fill(); miniCtx.stroke();
    miniCtx.fillStyle = "#FFFFFF"; miniCtx.beginPath(); miniCtx.arc(3, -3, 3, 0, Math.PI * 2); miniCtx.fill();
    miniCtx.restore();
}

function executeSkinCardSelectionLogic(skin) {
    const isUnlocked = AppState.unlockedSkinsArray.includes(skin.id);
    if (isUnlocked) {
        AppState.activeSkinId = skin.id; rebuildShopGridContainerDOM();
    } else {
        if (skin.currencyType === "apple" && AppState.applesInventory >= skin.costValue) {
            AppState.applesInventory -= skin.costValue; AppState.unlockedSkinsArray.push(skin.id);
            AppState.activeSkinId = skin.id; rebuildShopGridContainerDOM(); updateEconomyDisplaysDOM();
        } else if (skin.currencyType === "egg" && AppState.eggsInventory >= skin.costValue) {
            AppState.eggsInventory -= skin.costValue; AppState.unlockedSkinsArray.push(skin.id);
            AppState.activeSkinId = skin.id; rebuildShopGridContainerDOM(); updateEconomyDisplaysDOM();
        } else { alert("Insufficient tokens!"); }
    }
}

function initiateActiveGameEngine() {
    getAudioContext().resume(); showMenuPanel(null);
    score = 0; pillarScore = 0; currentFrameCount = 0; gameSessionApplesCollected = 0; gameSessionEggsCollected = 0;
    isGameRunning = true; playerBird.y = canvas.height / 2; playerBird.velocity = 0; playerBird.tiltAngle = 0;
    activePipesArray = []; activeItemsArray = []; spawnObstaclePipePair(); updateEconomyDisplaysDOM();
    if (gameLoopId) cancelAnimationFrame(gameLoopId);
    gameLoopId = requestAnimationFrame(executeCoreGameLoopStep);
}

function executePlayerBirdFlapAction() {
    if (!isGameRunning) return;
    playerBird.velocity = GameConfig.jumpStrength;
    playJumpSound();
}

function spawnObstaclePipePair() {
    const topPipeHeightGenerated = 120 + Math.floor(Math.random() * (canvas.height - GameConfig.pipeGap - 220));
    const calculatedPipeWidth = 60; // Clean dimension mapping matching Flutter references
    activePipesArray.push({
        x: canvas.width, topHeight: topPipeHeightGenerated,
        bottomTopY: topPipeHeightGenerated + GameConfig.pipeGap, width: calculatedPipeWidth, passed: false
    });
    const targetCenterY = topPipeHeightGenerated + (GameConfig.pipeGap / 2);
    let typeSelected = Math.random() > 0.70 ? "egg" : "apple";
    activeItemsArray.push({
        x: canvas.width + (calculatedPipeWidth / 2), baseY: targetCenterY, currentY: targetCenterY,
        type: typeSelected, radius: typeSelected === "apple" ? 15 : 14, bobOffsetSeed: Math.random() * 100, collected: false
    });
}

function executeCoreGameLoopStep() {
    if (!isGameRunning) return;
    currentFrameCount++;
    parallaxBackgroundOffset -= 0.5; 
    executeUpdateStatesCalculations();
    executeRenderGraphicsPipeline();
    gameLoopId = requestAnimationFrame(executeCoreGameLoopStep);
}

function executeUpdateStatesCalculations() {
    // 1. Core Bird Physics Acceleration Arc Calculations
    playerBird.velocity += GameConfig.gravity; 
    playerBird.y += playerBird.velocity;
    
    // Smooth angular tilt scaling depending on ascending/descending speeds
    if (playerBird.velocity > 2.5) { 
        playerBird.tiltAngle = Math.min(Math.PI / 4, playerBird.tiltAngle + 0.06); 
    } else { 
        playerBird.tiltAngle = Math.max(-Math.PI / 8, playerBird.tiltAngle - 0.08); 
    }

    // 2. Horizon Boundary Crash Intercepts (Tied cleanly to your 50px ground box)
    if (playerBird.y + playerBird.radius >= canvas.height - 50 || playerBird.y - playerBird.radius <= 0) {
        executeCrashProcessingPipeline(); 
        return;
    }
    
    // 3. Spawning Intercept Counter Frame Gates
    if (currentFrameCount % GameConfig.pipeSpawnInterval === 0) { 
        spawnObstaclePipePair(); 
    }

    // 4. LAYER A: ITEM COLLECTION ROUTINE (Alters ONLY dynamic inventory session ledgers)
    for (let i = activeItemsArray.length - 1; i >= 0; i--) {
        const item = activeItemsArray[i]; 
        item.x -= GameConfig.forwardSpeed;
        
        // Dynamic continuous sine-wave vertical bobbing motion computation
        item.currentY = item.baseY + Math.sin((currentFrameCount * 0.05) + item.bobOffsetSeed) * 12;
        
        if (!item.collected && isBirdOverlappingItem(playerBird, item)) {
            item.collected = true; 
            playLevelUpSound();
            
            if (item.type === "apple") { 
                gameSessionApplesCollected++; 
                score += 1; 
            } else { 
                gameSessionEggsCollected++; 
                score += 3; 
            }
            updateEconomyDisplaysDOM();
        }
        
        // Standard clean sweep for elements leaving the canvas bounds
        if (item.x + item.radius < 0) {
            activeItemsArray.splice(i, 1);
        }
    }

    // 5. LAYER B: PILLAR INTERSECTION ROUTINE (Drives Quest & Lifespan Levels)
    for (let i = activePipesArray.length - 1; i >= 0; i--) {
        const pipe = activePipesArray[i]; 
        pipe.x -= GameConfig.forwardSpeed;
        
        // Run continuous boundary check vectors
        if (checkCollisionVector(playerBird, pipe)) { 
            executeCrashProcessingPipeline(); 
            return; 
        }
        
        // Clean clearance intercept validation check gate
        if (!pipe.passed && pipe.x + pipe.width < playerBird.x) { 
            pipe.passed = true; 
            
            // Only clear pillar cross events increase the actual visible layout score text!
            pillarScore++; 

            // --- INTEGRATED: MISSION TASK 1 CEIL CHECK INTERCEPTOR ---
            if (isGameRunning && typeof activeSelectedLevelId !== 'undefined' && activeSelectedLevelId !== null) {
                const trackingKey = `flygems_raw_progress_lvl_${activeSelectedLevelId}`;
                let progressState = JSON.parse(localStorage.getItem(trackingKey)) || { t1: "ready", t2: "ready", t3: "ready" };
                
                // Dynamically establish baseline target requirements per design definitions
                let targetRequirement = activeSelectedLevelId === 3 || activeSelectedLevelId === 4 ? 4 : (activeSelectedLevelId >= 5 ? 5 : 3);

                if (pillarScore >= targetRequirement && progressState.t1 !== "verified") {
                    progressState.t1 = "verified";
                    localStorage.setItem(trackingKey, JSON.stringify(progressState));
                    
                    // Freeze and cancel active engine animations cleanly
                    isGameRunning = false;
                    if (gameLoopId) cancelAnimationFrame(gameLoopId);
                    playLevelUpSound();
                    
                    // Bounce navigation state cleanly straight into the subcard mission dashboard
                    if (typeof openMissionControlScreen === 'function') {
                        openMissionControlScreen(activeSelectedLevelId);
                    } else {
                        // Fallback case: if helper name renamed during extraction phases
                        showMenuPanel("screen-quest-details");
                    }
                    return;
                }
            }
            
            // DAILY QUESTboard LAYER PROGRESS SYNC:
            const currentActiveQuest = QuestEngine.levels.find(q => q.claimed === false);
            if (currentActiveQuest) {
                currentActiveQuest.progress++;
                if (currentActiveQuest.progress > QuestEngine.targetPerLevel) {
                    currentActiveQuest.progress = QuestEngine.targetPerLevel;
                }
                saveQuestEngineToLocalStorage(); 
            }

            // GLOBAL LIFESPAN METRIC SYSTEM SYNCHRONIZATION:
            let totalPillarsPassed = parseInt(localStorage.getItem("flygems_total_pillars")) || 0;
            let currentLevelValue = parseInt(localStorage.getItem("flygems_lifespan_level")) || 1;
            let currentXPPercent = parseFloat(localStorage.getItem("flygems_xp_progress")) || 0;

            totalPillarsPassed++;
            currentXPPercent += 8.5; // Gain exactly 8.5% level progress per column cleared safely

            // Level Up logic handler block
            if (currentXPPercent >= 100) {
                currentXPPercent = 0;
                currentLevelValue++;
                playLevelUpSound();
            }

            // Sync updated variables immediately to device local memory
            localStorage.setItem("flygems_total_pillars", totalPillarsPassed.toString());
            localStorage.setItem("flygems_lifespan_level", currentLevelValue.toString());
            localStorage.setItem("flygems_xp_progress", currentXPPercent.toString());

            updateEconomyDisplaysDOM(); 
        }
        
        // Clean sweep for passed columns leaving the viewport
        if (pipe.x + pipe.width < 0) {
            activePipesArray.splice(i, 1);
        }
    }
}

function checkCollisionVector(bird, pipe) {
    if (bird.x + bird.radius > pipe.x && bird.x - bird.radius < pipe.x + pipe.width) {
        if (bird.y - bird.radius < pipe.topHeight || bird.y + bird.radius > pipe.bottomTopY) { return true; }
    } return false;
}

function isBirdOverlappingItem(bird, item) {
    const dX = bird.x - item.x; const dY = bird.y - item.currentY;
    return Math.sqrt((dX * dX) + (dY * dY)) < bird.radius + item.radius;
}

function executeCrashProcessingPipeline() {
    isGameRunning = false; 
    cancelAnimationFrame(gameLoopId); 
    playCrashSound();
    
    AppState.applesInventory += gameSessionApplesCollected; 
    AppState.eggsInventory += gameSessionEggsCollected;
    
    let recordedBestScore = parseInt(localStorage.getItem("flygems_best_score")) || 0;
    if (pillarScore > recordedBestScore) { 
        recordedBestScore = pillarScore; 
        localStorage.setItem("flygems_best_score", recordedBestScore.toString()); 
    }
    
    document.getElementById("final-score-val").innerText = pillarScore; // Shows only pillar scores on end game panel
    document.getElementById("best-score-val").innerText = recordedBestScore;
    showMenuPanel("screen-crash");
}

function terminateActiveGameEngine() { isGameRunning = false; cancelAnimationFrame(gameLoopId); showMenuPanel("screen-home"); }

function executeRenderGraphicsPipeline() {
    ctx.fillStyle = "#E0F2FE"; ctx.fillRect(0, 0, canvas.width, canvas.height);
    renderParallaxForestLayerHighDetail();
    renderVectorObstaclesActivePipes(); // Draw pipes and their attached coiling vines natively
    renderVectorActiveItems();
    renderVectorPlayerSkinAsset();
    renderVectorGroundDirtGrass();
}

function renderParallaxForestLayerHighDetail() {
    let virtualWidth = 400;
    let synchronizedX = (parallaxBackgroundOffset % virtualWidth);
    ctx.save();

    for (let i = -virtualWidth; i < canvas.width + virtualWidth; i += 75) {
        let x = synchronizedX + i;
        let treeHeight = 120 + Math.abs(Math.sin(i * 0.9) * 40);
        let treeWidth = 60;
        let trunkYStart = canvas.height - 50;

        ctx.fillStyle = "#4E342E"; 
        ctx.beginPath();
        ctx.moveTo(x + treeWidth / 2 - 8, trunkYStart);
        ctx.lineTo(x + treeWidth / 2 + 8, trunkYStart);
        ctx.lineTo(x + treeWidth / 2 + 4, trunkYStart - treeHeight);
        ctx.lineTo(x + treeWidth / 2 - 4, trunkYStart - treeHeight);
        ctx.closePath(); ctx.fill();

        ctx.fillStyle = "#166534"; 
        renderSingleFluffyClusterNode(x + treeWidth / 2, trunkYStart - (treeHeight * 0.6), 50);
        
        ctx.fillStyle = "#4CAF50"; 
        renderSingleFluffyClusterNode(x + treeWidth / 2 - 15, trunkYStart - (treeHeight * 0.8), 40);
        renderSingleFluffyClusterNode(x + treeWidth / 2 + 15, trunkYStart - (treeHeight * 0.8), 40);
        renderSingleFluffyClusterNode(x + treeWidth / 2, trunkYStart - treeHeight, 35);
    }
    ctx.restore();
}

function renderSingleFluffyClusterNode(cX, cY, radius) {
    ctx.beginPath(); ctx.arc(cX, cY, radius * 0.6, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cX - radius * 0.4, cY + radius * 0.2, radius * 0.4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cX + radius * 0.4, cY + radius * 0.2, radius * 0.4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cX, cY - radius * 0.4, radius * 0.4, 0, Math.PI * 2); ctx.fill();
}

function renderVectorGroundDirtGrass() {
    let groundHeight = 50; let groundY = canvas.height - groundHeight;
    let dirtGrad = ctx.createLinearGradient(0, groundY, 0, canvas.height);
    dirtGrad.addColorStop(0, "#5D4037"); dirtGrad.addColorStop(1, "#3E2723");
    ctx.fillStyle = dirtGrad; ctx.fillRect(0, groundY, canvas.width, groundHeight);

    ctx.fillStyle = "#4CAF50"; ctx.fillRect(0, groundY, canvas.width, 15);
    ctx.fillStyle = "#81C784"; ctx.fillRect(0, groundY, canvas.width, 5);
}

/* HIGH-FIDELITY WOOD COLUMNS & CURVED WRAPPING BÉZIER VINES (FLUTTER PORT) */
function renderVectorObstaclesActivePipes() {
    activePipesArray.forEach(pipe => {
        
        function drawColumnSegment(yStart, height, isTopSegment) {
            // 1. Core Wood Base Block
            ctx.fillStyle = "#6D4C41"; 
            ctx.fillRect(pipe.x, yStart, pipe.width, height);

            // 2. Vertical Shaded Grain Overlay Lines
            ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
            for (let i = 10; i < pipe.width; i += 15) {
                ctx.fillRect(pipe.x + i, yStart, 2, height);
            }

            // 3. 3D Bevel Contrast Filters
            ctx.fillStyle = "rgba(255, 255, 255, 0.12)"; ctx.fillRect(pipe.x, yStart, 8, height); // Left Highlight
            ctx.fillStyle = "rgba(0, 0, 0, 0.3)"; ctx.fillRect(pipe.x + pipe.width - 8, yStart, 8, height); // Right Shadow

            // 4. Horizontal Bamboo Joint Rings
            ctx.fillStyle = "#3E2723";
            for (let i = yStart; i < yStart + height; i += 60) {
                ctx.fillRect(pipe.x - 2, i, pipe.width + 4, 6);
            }

            // 5. Heavy Outer Lip Ring Segment Caps
            let capYPosition = isTopSegment ? yStart + height - 25 : yStart;
            ctx.fillRect(pipe.x - 6, capYPosition, pipe.width + 12, 25);
        }

        // Execute architectural renderings for log pairs
        drawColumnSegment(0, pipe.topHeight, true);
        drawColumnSegment(pipe.bottomTopY, canvas.height - pipe.bottomTopY - 50, false);

        // --- COMPLETE REWRITE: ACCURATE SINE/BEZIER COILING VINES WRAPPING ENGINE ---
        ctx.save();
        ctx.lineCap = "round";
        
        // Render upper pillar coiling loops
        drawWrappingVinePath(pipe.x, 0, pipe.topHeight - 25, pipe.width);
        // Render lower pillar coiling loops
        drawWrappingVinePath(pipe.x, pipe.bottomTopY + 25, canvas.height - 50, pipe.width);
        
        ctx.restore();
    });
}

// Mathematical calculation layer weaving vine loops, petioles, and leaves tightly around columns
function drawWrappingVinePath(pX, startY, endY, pWidth) {
    let currentY = startY;
    let loopHeightStep = 45; // Coiling density compression factor
    let loopIterationCount = 0;

    ctx.lineWidth = 4.5;

    while (currentY + loopHeightStep < endY) {
        ctx.save();
        loopIterationCount++;
        
        // Alternate coiling directions sequentially to simulate winding geometry
        let isFrontLoop = loopIterationCount % 2 === 0;

        if (isFrontLoop) {
            // 1. DRAW THE VINE FIRST (Base Layer)
            ctx.strokeStyle = "#2E7D32"; // Rich Organic Green
            ctx.shadowBlur = 2; ctx.shadowColor = "rgba(0,0,0,0.3)";
            ctx.beginPath();
            ctx.moveTo(pX - 1, currentY);
            ctx.quadraticCurveTo(pX + pWidth / 2, currentY + loopHeightStep * 0.6, pX + pWidth + 1, currentY + loopHeightStep);
            ctx.stroke();

            // --- INTEGRATED PETIOLE & CONNECTED LEAF ENGINE ---
            ctx.shadowBlur = 0; // Clear shadow to keep leaf details crisp
            
            if (loopIterationCount % 2 === 0) {
                // Left Side Leaf Assembly
                let vineX = pX + pWidth * 0.25;
                let vineY = currentY + loopHeightStep * 0.34;
                
                // Draw Petiole (Leaf Stem) connecting vine to leaf base
                ctx.strokeStyle = "#1B5E20";
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(vineX, vineY);
                ctx.lineTo(vineX - 5, vineY - 4); // Extends stem out to the left
                ctx.stroke();

                // Draw Leaf connected cleanly at the tip of the petiole
                ctx.save();
                ctx.translate(vineX - 5, vineY - 4); // Anchor precisely at petiole tip
                ctx.rotate(-Math.PI / 3.5); 
                
                ctx.fillStyle = "#4CAF50"; // Vibrant Leaf Core
                ctx.strokeStyle = "#1B5E20"; // Darker leaf border
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.ellipse(-3.5, 0, 7, 4, 0, 0, Math.PI * 2); // Shuffled -3.5 to align leaf base to stem
                ctx.fill(); ctx.stroke();
                ctx.restore();
            } else {
                // Right Side Leaf Assembly
                let vineX = pX + pWidth * 0.75;
                let vineY = currentY + loopHeightStep * 0.52;

                // Draw Petiole (Leaf Stem) connecting vine to leaf base
                ctx.strokeStyle = "#1B5E20";
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(vineX, vineY);
                ctx.lineTo(vineX + 5, vineY - 3); // Extends stem out to the right
                ctx.stroke();

                // Draw Leaf connected cleanly at the tip of the petiole
                ctx.save();
                ctx.translate(vineX + 5, vineY - 3); // Anchor precisely at petiole tip
                ctx.rotate(Math.PI / 3.5);
                
                ctx.fillStyle = "#4CAF50";
                ctx.strokeStyle = "#1B5E20";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.ellipse(3.5, 0, 7, 4, 0, 0, Math.PI * 2); // Shuffled 3.5 to align leaf base to stem
                ctx.fill(); ctx.stroke();
                ctx.restore();
            }

        } else {
            // Back helix thread (Wraps snugly behind the column margins)
            ctx.strokeStyle = "#1B5E20"; // Darker tone for depth
            ctx.beginPath();
            ctx.moveTo(pX + pWidth + 1, currentY);
            ctx.quadraticCurveTo(pX + pWidth / 2, currentY + loopHeightStep * 0.4, pX - 1, currentY + loopHeightStep);
            ctx.stroke();
        }

        ctx.restore();
        currentY += loopHeightStep;
    }
}

function renderVectorActiveItems() {
    activeItemsArray.forEach(item => {
        if (item.collected) return;
        ctx.save(); ctx.translate(item.x, item.currentY);

        if (item.type === "apple") {
            // Re-scaled Balanced Medium Apple Dimensions
            let wRad = item.radius * 1.05; // Reduced from 1.35 for a clean medium fit
            let hRad = item.radius * 0.95; // Reduced from 1.25 to maintain proportions

            // Generate 3D Spherical Radial Light Gradient Map
            let appleShader = ctx.createRadialGradient(-wRad * 0.2, -hRad * 0.2, 1.5, 0, 0, wRad);
            appleShader.addColorStop(0, "#F95830");
            appleShader.addColorStop(1, "#C60000");

            ctx.fillStyle = appleShader;
            ctx.beginPath();
            ctx.moveTo(0, -hRad * 0.5);
            // Left side cheek curve
            ctx.bezierCurveTo(-wRad * 1.3, -hRad * 1.2, -wRad * 1.1, hRad * 1.3, 0, hRad * 0.8);
            // Right side cheek curve
            ctx.bezierCurveTo(wRad * 1.1, hRad * 1.3, wRad * 1.3, -hRad * 1.2, 0, -hRad * 0.5);
            ctx.closePath(); ctx.fill();

            // Specular Reflection Oval Highlight Node
            ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
            ctx.beginPath();
            ctx.ellipse(-wRad * 0.35, -hRad * 0.35, 2.5, 1.5, Math.PI / 4, 0, Math.PI * 2);
            ctx.fill();

            // Organic Wood Stem Drawing
            ctx.strokeStyle = "#795548"; ctx.lineWidth = 1.8; ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(0, -hRad * 0.4);
            ctx.quadraticCurveTo(1.5, -hRad - 2, 3, -hRad - 5);
            ctx.stroke();

            // Attached Green Foliage Leaf Node
            ctx.fillStyle = "#4CAF50";
            ctx.beginPath();
            ctx.ellipse(4, -hRad - 3, 4, 2, -Math.PI / 6, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Re-scaled Golden Egg Tied Responsively to Base Radius (Perfect Medium Size)
            let eggWidth = item.radius * 2;  // Scales perfectly with the core engine data
            let eggHeight = item.radius * 2.4; // Eliminates fixed oversize values
            let eggRect = { x: -eggWidth / 2, y: -eggHeight / 2, w: eggWidth, h: eggHeight };

            let goldGrad = ctx.createLinearGradient(eggRect.x, eggRect.y, eggRect.x + eggRect.w, eggRect.y + eggRect.h);
            goldGrad.addColorStop(0, "#FFEBAF");
            goldGrad.addColorStop(0.5, "#FFB700");
            goldGrad.addColorStop(1, "#FF5100");

            ctx.fillStyle = goldGrad;
            ctx.beginPath();
            ctx.moveTo(0, -eggHeight / 2);
            // Trace authentic egg-shaped geometry curves
            ctx.bezierCurveTo(eggWidth / 2 * 1.15, -eggHeight / 2, eggWidth / 2 * 1.15, eggHeight / 2, 0, eggHeight / 2);
            ctx.bezierCurveTo(-eggWidth / 2 * 1.15, eggHeight / 2, -eggWidth / 2 * 1.15, -eggHeight / 2, 0, -eggHeight / 2);
            ctx.closePath(); ctx.fill();

            // Shimmer Star Cross Vector Point Highlight
            drawSpecularShineStarVector(eggWidth * 0.25, -eggHeight * 0.2, 3.5);
        }
        ctx.restore();
    });
}

function drawSpecularShineStarVector(sX, sY, size) {
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(sX, sY - size);
    ctx.quadraticCurveTo(sX, sY, sX + size, sY);
    ctx.quadraticCurveTo(sX, sY, sX, sY + size);
    ctx.quadraticCurveTo(sX, sY, sX - size, sY);
    ctx.quadraticCurveTo(sX, sY, sX, sY - size);
    ctx.closePath(); ctx.fill();
}

function renderVectorPlayerSkinAsset() {
    ctx.save(); 
    ctx.translate(playerBird.x, playerBird.y); 
    ctx.rotate(playerBird.tiltAngle);

    // Pull active dynamic colors from your skin configuration matrix
    const activeSkinProfile = SkinCatalogMatrix[AppState.activeSkinId - 1] || SkinCatalogMatrix[0];
    
    // Dynamic Wing Flap Phase Calculation (0 = Downstroke, 1 = Glide, 2 = Mid Upstroke, 3 = High Climax)
    let flapPhase = 1; 
    if (isGameRunning) {
        flapPhase = Math.floor((currentFrameCount * 0.2) % 4);
    }

    let primaryColor = activeSkinProfile.fillGradientColors[0];
    let secondaryColor = activeSkinProfile.fillGradientColors[1];

    // Smooth volumetric shading gradient for the custom body contours
    let bodyGrad = ctx.createLinearGradient(-25, -15, 25, 15);
    bodyGrad.addColorStop(0, primaryColor);
    bodyGrad.addColorStop(1, adjustColorBrightness(primaryColor, -40));

    // =============================================================
    // LAYER A: TAIL PLUMAGE SYSTEM (Tethered to the sleek rear body)
    // =============================================================
    ctx.save();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    // 1. Sleek 3-Feather Tail Fan Base
    ctx.fillStyle = secondaryColor; // Dynamically changes color based on equipped skin profile
    ctx.strokeStyle = "rgba(0, 0, 0, 0.45)";
    ctx.lineWidth = 1.2;
    
    for (let i = 0; i < 3; i++) {
        ctx.save();
        // Readjusted the fan spread angle to look centered with 3 feathers
        let spreadAngle = (-Math.PI / 10) + (i * (Math.PI / 18));
        ctx.rotate(spreadAngle);
        ctx.beginPath();
        ctx.moveTo(-18, 1);
        // Standardized feather length matching the primary fan layer bounds
        ctx.bezierCurveTo(-34, -4, -42, -1, -46, 1);
        ctx.bezierCurveTo(-42, 4, -34, 7, -18, 1);
        ctx.fill(); ctx.stroke();
        ctx.restore();
    }

    // 2. Exactly Two Central Deck Feathers (Standardized to equal the tail length)
    ctx.fillStyle = adjustColorBrightness(primaryColor, 30); 
    ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
    ctx.lineWidth = 1.4;

    // Upper Deck Plume (Length standardized to match other feathers)
    ctx.save(); ctx.rotate(-0.03); ctx.beginPath();
    ctx.moveTo(-16, -1);
    ctx.bezierCurveTo(-32, -4, -40, -3, -45, -1);
    ctx.bezierCurveTo(-40, 1, -32, 2, -16, -1);
    ctx.fill(); ctx.stroke();
    ctx.restore();

    // Lower Deck Plume (Length standardized to match other feathers)
    ctx.save(); ctx.rotate(0.04); ctx.beginPath();
    ctx.moveTo(-16, 2);
    ctx.bezierCurveTo(-32, 0, -40, 1, -45, 2);
    ctx.bezierCurveTo(-40, 4, -32, 5, -16, 2);
    ctx.fill(); ctx.stroke();
    ctx.restore();

    ctx.restore();

    // =============================================================
    // LAYER B: TUCKED RAPTOR FEET & CLAWS
    // =============================================================
    ctx.fillStyle = "#FF9800";
    ctx.strokeStyle = "rgba(0,0,0,0.3)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(-3, 11, 3, 0, Math.PI * 2);
    ctx.arc(3, 11, 3, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();

    // =============================================================
    // LAYER C: EXACT DETAILED FLYING BODY SHAPE (Scaled up to 24px)
    // =============================================================
    ctx.fillStyle = bodyGrad;
    ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.moveTo(22, -6); 
    ctx.bezierCurveTo(22, -17, 11, -17, 5, -15); // Nape of head
    ctx.bezierCurveTo(-6, -14, -16, -8, -22, -3); // Back spine line
    ctx.lineTo(-24, 2); // Tail base anchor
    ctx.bezierCurveTo(-17, 11, -3, 12, 6, 9); // Underbelly curve
    ctx.bezierCurveTo(16, 6, 20, 0, 22, -6); // Breast plate profile
    ctx.closePath();
    ctx.fill(); ctx.stroke();

    // Contrast Cream/White Chest Patch Overlay
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(8, -9);
    ctx.bezierCurveTo(17, -8, 20, -1, 20, -4);
    ctx.bezierCurveTo(19, 3, 12, 8, 5, 8);
    ctx.bezierCurveTo(3, 1, 3, -4, 8, -9);
    ctx.closePath();
    ctx.fill();

    // =============================================================
    // LAYER D: ACCURATE FACIAL ANATOMY & EYE
    // =============================================================
    ctx.fillStyle = "rgba(0,0,0,0.12)"; ctx.beginPath(); ctx.arc(12, -9, 6.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#FFFFFF"; ctx.beginPath(); ctx.arc(12, -9, 5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#000000"; ctx.beginPath(); ctx.arc(13.2, -9, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#FFFFFF"; ctx.beginPath(); ctx.arc(14, -10, 0.8, 0, Math.PI * 2); ctx.fill(); 

    // Downward curved beak
    ctx.fillStyle = "#FFB700";
    ctx.beginPath();
    ctx.moveTo(20, -9);
    ctx.quadraticCurveTo(29, -6, 31, -2); 
    ctx.lineTo(20, 2);
    ctx.quadraticCurveTo(21, -4, 20, -9);
    ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,0.25)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(20, -3); ctx.lineTo(28, -3); ctx.stroke();

    // =============================================================
    // LAYER E: REALISTIC SIDEWISE WING ENGINE (Compact Proportions)
    // =============================================================
    ctx.save();
    ctx.translate(-2, -3); // Adjusted joint anchor point for the tighter wing structure

    let wingGrad = ctx.createLinearGradient(-12, -10, 22, 4);
    wingGrad.addColorStop(0, primaryColor);
    wingGrad.addColorStop(1, secondaryColor);
    ctx.fillStyle = wingGrad;
    ctx.strokeStyle = "rgba(0, 0, 0, 0.55)";
    ctx.lineWidth = 1.6;
    ctx.lineJoin = "round";

    // Compact wingspan layouts (Scaled down by roughly 30% from the previous large size)
    switch(flapPhase) {
        case 0: // FRAME 1: FLAT HORIZONTAL GLIDE
            ctx.beginPath();
            ctx.moveTo(-4, -1);
            ctx.quadraticCurveTo(7, -7, 23, -4); // Reduced width span from 34 to 23
            ctx.quadraticCurveTo(15, 2, 7, 4);   // Thinner profile edge
            ctx.quadraticCurveTo(2, 5, -4, -1);
            ctx.closePath(); ctx.fill(); ctx.stroke();

            ctx.strokeStyle = "rgba(0,0,0,0.18)";
            ctx.beginPath();
            ctx.moveTo(4, -1);   ctx.quadraticCurveTo(11, -2, 21, -4);
            ctx.moveTo(1, 0.5);  ctx.quadraticCurveTo(7, 0.5, 15, 0);
            ctx.stroke();
            break;

        case 1: // FRAME 2: MID-UP ANGLED LIFT
            ctx.save();
            ctx.rotate(-Math.PI / 8); 
            ctx.beginPath();
            ctx.moveTo(-4, -1.5);
            ctx.quadraticCurveTo(9, -8, 24, -5.5); // Scaled back extension limits
            ctx.quadraticCurveTo(14, 0.5, 5, 2.5);   
            ctx.quadraticCurveTo(0, 3, -4, -1.5);
            ctx.closePath(); ctx.fill(); ctx.stroke();

            ctx.strokeStyle = "rgba(0,0,0,0.18)";
            ctx.beginPath();
            ctx.moveTo(4, -1.5);  ctx.quadraticCurveTo(11, -3.5, 22, -5.5);
            ctx.moveTo(1, 0);     ctx.quadraticCurveTo(7, -0.5, 15, -1);
            ctx.stroke();
            ctx.restore();
            break;

        case 2: // FRAME 3: HIGH POINT EXTENSION
            ctx.save();
            ctx.rotate(-Math.PI / 4); 
            ctx.beginPath();
            ctx.moveTo(-4, -1.5);
            ctx.quadraticCurveTo(11, -8.5, 25, -5.5); // Cleanly capped high reach profiles
            ctx.quadraticCurveTo(13, 0.5, 5, 2);
            ctx.quadraticCurveTo(-1, 2, -4, -1.5);
            ctx.closePath(); ctx.fill(); ctx.stroke();

            ctx.strokeStyle = "rgba(0,0,0,0.18)";
            ctx.beginPath();
            ctx.moveTo(3, -2);  ctx.quadraticCurveTo(10, -4, 23, -5.5);
            ctx.moveTo(0, -0.5); ctx.quadraticCurveTo(7, -1, 16, -1.5);
            ctx.stroke();
            ctx.restore();
            break;

        case 3: // FRAME 4: DOWNWARD FLAP TRANSITION
            ctx.beginPath();
            ctx.moveTo(-4, 0);
            ctx.quadraticCurveTo(5, -3.5, 21, -1.5); 
            ctx.quadraticCurveTo(13, 2.5, 7, 3.5);
            ctx.quadraticCurveTo(1, 2.5, -4, 0);
            ctx.closePath(); ctx.fill(); ctx.stroke();

            ctx.strokeStyle = "rgba(0,0,0,0.18)";
            ctx.beginPath();
            ctx.moveTo(4, -0.5); ctx.quadraticCurveTo(10, -1, 19, -1.5);
            ctx.moveTo(1, 0.5);  ctx.quadraticCurveTo(6, 0.5, 13, 0.5);
            ctx.stroke();
            break;
    }
    ctx.restore();

    ctx.restore(); // Final body matrix transform drop closure
}

function renderForestSceneStatic() { executeRenderGraphicsPipeline(); }
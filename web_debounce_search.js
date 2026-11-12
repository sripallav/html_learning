// JavaScript for Web Development: Frontend Performance Optimization (Debounce & Throttle)
// Prevents high-frequency API calls on search input typing and window scroll events

// 1. Debounce Implementation
// Waits until delay has passed after the LAST invocation before executing
const debounce = (func, delayMs = 300) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delayMs);
    };
};

// 2. Throttle Implementation
// Executes at most once every intervalMs, ignoring intermediate calls
const throttle = (func, intervalMs = 500) => {
    let lastExecutionTime = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastExecutionTime >= intervalMs) {
            lastExecutionTime = now;
            func(...args);
        }
    };
};

// ==========================================
// Executable Demonstration & Simulation
// ==========================================
console.log("=== Frontend Performance: Debounce & Throttle ===");

let apiCallCount = 0;
const searchBackendAPI = (query) => {
    apiCallCount++;
    console.log(`[API Request #${apiCallCount}] Fetching search results for: "${query}"`);
};

// Simulate rapid user keystrokes in a search input (e.g., typing "iphone")
const debouncedSearch = debounce(searchBackendAPI, 200);

console.log("Simulating rapid user typing into search box:");
debouncedSearch("i");
debouncedSearch("ip");
debouncedSearch("iph");
debouncedSearch("ipho");
debouncedSearch("iphone"); // Only this last call will fire after 200ms

// Throttle demo: Rapid scroll simulation
let scrollEventCount = 0;
const onPageScroll = (scrollY) => {
    scrollEventCount++;
    console.log(`[Scroll Event #${scrollEventCount}] Document scrolled to Y: ${scrollY}px`);
};

const throttledScroll = throttle(onPageScroll, 300);
console.log("\nSimulating rapid window scroll events:");
throttledScroll(100); // Fires immediately
throttledScroll(120); // Ignored (within 300ms)
throttledScroll(180); // Ignored (within 300ms)

setTimeout(() => {
    console.log(`\nDebounce Finished: Total search API calls made = ${apiCallCount} (Expected: 1)`);
    console.log("=================================================");
}, 250);

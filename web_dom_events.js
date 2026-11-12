// JavaScript for Web Development: DOM Events & Event Handling
// Demonstrates event listeners, keyboard input tracking, and event delegation patterns

// 1. Simulating Event Delegation for Dynamic Web Lists
// Instead of attaching listener to each <li>, attach one listener to parent <ul>
const handleListClick = (eventTarget) => {
    if (eventTarget.tagName === "LI" && eventTarget.dataset.id) {
        return `Item clicked: ${eventTarget.textContent} (ID: ${eventTarget.dataset.id})`;
    }
    return "Click ignored - not a list item";
};

// 2. Keyboard Event Handler (Enter Key Submission & Escape Cancellation)
const handleKeyboardShortcut = (key, ctrlKey = false) => {
    if (ctrlKey && key.toLowerCase() === "k") {
        return "Action: Open Global Search Modal (Ctrl+K)";
    }
    switch (key) {
        case "Enter":
            return "Action: Submit Form / Add Item";
        case "Escape":
            return "Action: Close Modal / Clear Input";
        case "ArrowUp":
            return "Action: Navigate to Previous Result";
        case "ArrowDown":
            return "Action: Navigate to Next Result";
        default:
            return `Key pressed: ${key}`;
    }
};

// 3. UI State Toggle (Light / Dark Theme)
const toggleTheme = (currentTheme) => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    return {
        theme: nextTheme,
        bodyClass: `theme-${nextTheme}`,
        icon: nextTheme === "dark" ? "🌙" : "☀️"
    };
};

// ==========================================
// Executable Verification
// ==========================================
console.log("=== Web DOM & Event Handling Demonstration ===");

// Test Event Delegation
const mockTarget = { tagName: "LI", dataset: { id: "prod-101" }, textContent: "Mechanical Keyboard" };
console.log(handleListClick(mockTarget));

// Test Keyboard Shortcuts
console.log(handleKeyboardShortcut("Enter"));
console.log(handleKeyboardShortcut("Escape"));
console.log(handleKeyboardShortcut("k", true));

// Test Theme Toggle
console.log("Toggle Theme:", toggleTheme("light"));
console.log("Toggle Theme:", toggleTheme("dark"));
console.log("==============================================");

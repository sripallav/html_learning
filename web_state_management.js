// JavaScript for Web Development: Reactive State Store (Observer / Pub-Sub Pattern)
// Serves as the architectural foundation before learning React state (useState) and Redux Toolkit

class WebStore {
    constructor(initialState = {}) {
        this.state = initialState;
        this.subscribers = new Set();
    }

    // Get current snapshot of state
    getState() {
        return { ...this.state };
    }

    // Subscribe a UI component callback to state changes
    subscribe(callback) {
        this.subscribers.add(callback);
        // Return unsubscribe function
        return () => {
            this.subscribers.delete(callback);
        };
    }

    // Update state immutably and notify all subscribers
    setState(partialStateOrUpdater) {
        const nextState = typeof partialStateOrUpdater === "function"
            ? partialStateOrUpdater(this.state)
            : { ...this.state, ...partialStateOrUpdater };

        this.state = nextState;
        this.notify();
    }

    // Broadcast current state to all subscribers
    notify() {
        for (const callback of this.subscribers) {
            callback(this.state);
        }
    }
}

// ==========================================
// Executable Demonstration (E-Commerce Web Cart UI State)
// ==========================================
console.log("=== Reactive State Store (Pub/Sub Pattern for Web UI) ===");

// 1. Initialize store with default e-commerce state
const store = new WebStore({
    cartCount: 0,
    items: [],
    theme: "light"
});

// 2. UI Header Component subscribes to state
const unsubscribeHeader = store.subscribe((state) => {
    console.log(`[UI Component: Header] Badge count updated to: ${state.cartCount}`);
});

// 3. UI Cart Summary Component subscribes to state
store.subscribe((state) => {
    const total = state.items.reduce((sum, item) => sum + item.price, 0);
    console.log(`[UI Component: CartDrawer] Total items: ${state.items.length}, Grand Total: ₹${total}`);
});

// 4. User adds first product
console.log("\nAction: User clicks 'Add to Cart' (Mouse)");
store.setState((prev) => ({
    ...prev,
    cartCount: prev.cartCount + 1,
    items: [...prev.items, { id: 1, name: "Wireless Mouse", price: 1200 }]
}));

// 5. User adds second product
console.log("\nAction: User clicks 'Add to Cart' (Keyboard)");
store.setState((prev) => ({
    ...prev,
    cartCount: prev.cartCount + 1,
    items: [...prev.items, { id: 2, name: "Mechanical Keyboard", price: 3500 }]
}));

// 6. Header unmounts / unsubscribes
console.log("\nHeader unmounted. Next action only notifies remaining components.");
unsubscribeHeader();

store.setState((prev) => ({
    ...prev,
    theme: "dark"
}));

console.log("=========================================================");

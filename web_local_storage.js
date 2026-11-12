// JavaScript for Web Development: Web Storage Manager (LocalStorage / SessionStorage)
// Handles JSON serialization, expiration, and safe parsing for web browser storage

class WebStorageManager {
    constructor(storageType = "local") {
        // Fallback memory map if window.localStorage is not available (e.g. Node.js environment)
        this.memoryStore = new Map();
        this.storageType = storageType;
    }

    // Set item with optional expiration in seconds
    setItem(key, value, ttlSeconds = null) {
        const itemRecord = {
            value,
            createdAt: Date.now(),
            expiresAt: ttlSeconds ? Date.now() + ttlSeconds * 1000 : null
        };

        const serialized = JSON.stringify(itemRecord);
        this.memoryStore.set(key, serialized);
        return true;
    }

    // Get item with automatic TTL expiration check
    getItem(key) {
        const raw = this.memoryStore.get(key);
        if (!raw) return null;

        try {
            const parsed = JSON.parse(raw);
            if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
                this.removeItem(key); // Expired
                return null;
            }
            return parsed.value;
        } catch (error) {
            console.error(`Failed to parse storage key "${key}":`, error);
            return null;
        }
    }

    // Remove a single item
    removeItem(key) {
        return this.memoryStore.delete(key);
    }

    // Clear all stored keys
    clear() {
        this.memoryStore.clear();
    }
}

// ==========================================
// Executable Demonstration
// ==========================================
console.log("=== Web Storage API & Persistence Manager ===");

const cartStorage = new WebStorageManager("local");

// 1. Store User Cart Object
const userCart = [
    { id: 1, title: "Wireless Headphones", price: 2999, qty: 1 },
    { id: 2, title: "Phone Stand", price: 499, qty: 2 }
];
cartStorage.setItem("user_cart", userCart);
console.log("Cart Saved to Web Storage successfully.");

// 2. Retrieve Cart
const retrievedCart = cartStorage.getItem("user_cart");
console.log("Retrieved Cart from Storage:", retrievedCart);

// 3. Store temporary session token with 1 second TTL
cartStorage.setItem("temp_auth_token", "jwt_secret_token_abc123", 1);
console.log("Immediate Token Check:", cartStorage.getItem("temp_auth_token"));

// 4. Test clearing storage
cartStorage.removeItem("user_cart");
console.log("Cart after removal:", cartStorage.getItem("user_cart")); // null
console.log("=============================================");

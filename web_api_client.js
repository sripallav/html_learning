// JavaScript for Web Development: RESTful API Client Wrapper
// Encapsulates Fetch API with default headers, query parameter building, error handling, and timeout

class WebAPIClient {
    constructor(baseURL = "https://jsonplaceholder.typicode.com", timeoutMs = 5000) {
        this.baseURL = baseURL;
        this.timeoutMs = timeoutMs;
    }

    // Helper to format query parameters: { page: 1, limit: 10 } -> ?page=1&limit=10
    buildURL(endpoint, params = {}) {
        const url = new URL(`${this.baseURL}${endpoint}`);
        Object.entries(params).forEach(([key, val]) => {
            if (val !== undefined && val !== null) {
                url.searchParams.append(key, val);
            }
        });
        return url.toString();
    }

    // Generic Request Handler with AbortController Timeout
    async request(endpoint, options = {}, params = {}) {
        const fullURL = this.buildURL(endpoint, params);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

        try {
            const response = await fetch(fullURL, {
                ...options,
                signal: controller.signal,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    ...(options.headers || {})
                }
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP Error [${response.status}]: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            clearTimeout(timeoutId);
            if (error.name === "AbortError") {
                throw new Error(`Request timed out after ${this.timeoutMs}ms: ${fullURL}`);
            }
            throw error;
        }
    }

    // HTTP GET Helper
    get(endpoint, params = {}) {
        return this.request(endpoint, { method: "GET" }, params);
    }

    // HTTP POST Helper
    post(endpoint, body = {}) {
        return this.request(endpoint, {
            method: "POST",
            body: JSON.stringify(body)
        });
    }
}

// ==========================================
// Executable Demonstration
// ==========================================
const runDemo = async () => {
    console.log("=== Web REST API Client Demonstration ===");
    const client = new WebAPIClient();

    try {
        // 1. Fetch posts with query params (page 1, limit 2)
        console.log("1. Fetching first 2 posts from JSONPlaceholder...");
        const posts = await client.get("/posts", { _page: 1, _limit: 2 });
        console.log("Received Posts:", posts.map(p => ({ id: p.id, title: p.title })));

        // 2. Submit new post
        console.log("\n2. Creating a new post payload via POST...");
        const newPost = await client.post("/posts", {
            title: "MERN Stack Learning Journey",
            body: "Mastering JavaScript, React, Node.js, and MongoDB hands-on.",
            userId: 1
        });
        console.log("Server Response (Created):", newPost);
    } catch (error) {
        console.error("API Call Failed:", error.message);
    }
    console.log("=========================================");
};

runDemo();

// Demonstrating Promise States and Try/Catch Error Handling

const checkOrderStatus = (isSuccess) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                resolve("Order Delivered Successfully!");
            } else {
                reject("Delivery Failed: Restaurant closed.");
            }
        }, 300);
    });
};

const runDemo = async () => {
    // 1. Success Case (Fulfilled)
    try {
        const message = await checkOrderStatus(true);
        console.log("Success:", message);
    } catch (error) {
        console.log("Error:", error);
    }

    // 2. Failure Case (Rejected)
    try {
        const message = await checkOrderStatus(false);
        console.log("Success:", message);
    } catch (error) {
        console.log("Caught Error Safely:", error);
    }
};

runDemo();

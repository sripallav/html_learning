// ES6 Named Exports (Imported using { } curly braces)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

// ES6 Default Export (Only ONE allowed per file, imported WITHOUT { })
const appName = "Sri's MERN Calculator";
export default appName;

// Importing Default Export (no curly braces) + Named Exports (with curly braces)
import appName, { add, subtract, multiply } from './12_math.mjs';

console.log(`=== ${appName} ===`);
console.log(`Add 10 + 5 = ${add(10, 5)}`);
console.log(`Subtract 20 - 8 = ${subtract(20, 8)}`);
console.log(`Multiply 4 * 5 = ${multiply(4, 5)}`);

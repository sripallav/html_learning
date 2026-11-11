# JavaScript (ES6+) Fresher Interview Quick Reference

1. **`var` vs `let` vs `const`**
   - `var`: Function-scoped, can be redeclared and hoisted with `undefined` (avoid in modern JS).
   - `let`: Block-scoped `{ }`, can be reassigned, cannot be redeclared in the same scope.
   - `const`: Block-scoped `{ }`, cannot be reassigned. *(Note: properties inside a `const` object or elements in a `const` array can still be mutated).*

2. **`==` vs `===`**
   - `==` (Loose Equality): Compares values after automatic type coercion (`5 == "5"` is `true`).
   - `===` (Strict Equality): Compares **both value and data type** without coercion (`5 === "5"` is `false`). Always prefer `===`.

3. **Arrow Functions (`=>`)**
   - Introduced in ES6 for shorter, cleaner function syntax.
   - Single-line expressions omit `{ }` and `return` (implicit return).
   - Multi-line blocks use `{ }` and explicit `return`, while still avoiding `function` keyword and inheriting lexical `this`.

4. **Template Literals (`` ` ``)**
   - Uses backticks and `${expression}` for clean string interpolation, math expressions, and multi-line strings without `+` concatenation.

5. **Destructuring (`{ }` and `[ ]`)**
   - Unpacks properties from objects (`const { name } = user;`) by key name, or elements from arrays (`const [first] = list;`) by index. Heavily used for React `props` and `useState`.

6. **Spread & Rest Operators (`...`)**
   - **Spread:** Expands/copies array or object items into a new structure (`{ ...user, age: 23 }`) for immutable state updates in React & Redux.
   - **Rest:** Gathers remaining elements into an array (`const [head, ...tail] = arr;`).

7. **Higher-Order Array Methods**
   - `.map()`: Transforms every element and returns a new array of the same length.
   - `.filter()`: Returns a new array containing only elements passing a condition.
   - `.find()`: Returns the **first** single matching element (not an array).
   - `.reduce((acc, curr) => ..., initialValue)`: Reduces an array into a single accumulated value.

8. **Async JavaScript & Promises**
   - **Promise:** An object representing eventual completion or failure of an async task with 3 states: `Pending`, `Fulfilled`, `Rejected`.
   - **`async / await`:** Clean syntax to pause execution inside an `async` function until a Promise resolves, wrapped in `try / catch` for safe error handling.

9. **ES6 Modules (`import` / `export`)**
   - **Named Export:** Multiple per file; imported with `{ exactName }`.
   - **Default Export:** Only one per file; imported without curly braces.

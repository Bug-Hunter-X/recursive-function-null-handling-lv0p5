# JavaScript Recursive Function with Unexpected Null Handling

This repository demonstrates a subtle bug in a JavaScript recursive function related to null handling with loose equality. The function `foo` calculates a sum recursively. However, its handling of the `null` value leads to unexpected behavior when the input is 0.

## Bug Description
The function uses loose equality (`==`) to check for `null`. In JavaScript, `0 == null` evaluates to `false`. This means that the recursive call `foo(a - 1)` will continue until a stack overflow occurs when the initial value of 'a' is 0.

## Bug Reproduction
1. Clone the repository.
2. Navigate to the directory containing `bug.js`.
3. Run the code using a JavaScript engine (e.g., Node.js): `node bug.js`
4. Observe the unexpected behavior when calling foo(0).

## Solution
The solution uses strict equality (`===`) to check for null and corrects the base case of the recursion to handle the input 0 correctly.
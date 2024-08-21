export function sum(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function divide(x, y) {
    return x / y;
}

export function isValidOperation(operation) {
    return operation === '+' || operation === '-' || operation === '*' || operation === '/';
}

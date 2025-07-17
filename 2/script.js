
// приветствие
function greet(name) {
    return `Hello "${name}"`;
}

console.log(greet("Alex"));
// -----------------------------

// функция фильтрации чисел больше 10
const numbers = [3, 11, 7, 25, 8, 30];

function filterGreaterThanTen(array) {
    array.forEach(num => {
        if (num > 10) {
            console.log(num);
        }
    });
}

filterGreaterThanTen(numbers);
// ---------------------------------

// калькулятор

function calculator(a, b, operation) {
    switch (operation) {
        case 'plus':
            return a + b;
        case 'minus':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : 'Error: Division by zero';
        default:
            return 'Error: Unknown operation';
    }
}

let result1 = calculator(2, 3, 'minus');
console.log(result1);

// function sumNumbers() {
//         return 5 + 5
// }

// const result = sumNumbers()
// console.log(result)

function users(name) {
        return 'Hello ' + name;
}

let message = users('Иван');
console.log(message);

const numbers = [3, 15, 8, 12, 5, 20];

function printNumbersGreaterThanTen(array) {
        array.forEach(number => {
                if (number > 10) {
                        console.log(number);
                }
        });
}
printNumbersGreaterThanTen(numbers);

function calculator(a, b, operator) {
        switch(operator) {
                case 'plus':
                        return a + b;
                case 'minus':
                        return a - b;
                case 'multiply':
                        return a * b;
                case 'divide':
                        if (b !== 0) {
                                return a / b;
                        } else {
                                throw new Error('Деление на ноль!');
                        }
                default:
                        throw new Error('Неизвестный оператор');
        }
}
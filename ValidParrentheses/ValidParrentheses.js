// Умова
let s1 = '()';
let s2 = '()[]{}';
let s3 = '(]';
let s4 = '{[]}';
let s5 = '([)]';
let s6 = '{[[]{}]}()()';

function isValid(s) {
    // Створюємо стек в який будемо поміщати елементи    
    let stack = [];

    // Обєкт з відповідними ключами та значеннями відкриваючих та закриваючих дужок
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    // Робимо ітерацію
    for (let i = 0; i < s.length; i++){
        // Поточний елемент в строці
        const current = s[i];

        // Випадки коли 
        if (isClosedBracket(current)) {
            // Якщо елементи конфліктують повертаємо false
            if (brackets[current] !== stack.pop()) return false; 
        } else {
            // Додаємо елемент в стек
            stack.push(current);
        }
    }
    // Перевіряємо чи пустий стек і всі елементи співпали
    return stack.length === 0;
}

// Функція
function isClosedBracket(ch) {
    return [')', '}', ']'].indexOf(ch) > -1;
}

// Вивід в консоль
console.log(s1, isValid(s1));
console.log(s2, isValid(s2));
console.log(s3, isValid(s3));
console.log(s4, isValid(s4));
console.log(s5, isValid(s5));
console.log(s6, isValid(s6));
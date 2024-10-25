const input1 = 'leetcode';
const input2 = 'loveleetcode';
const input3 = 'aabb';

const firstUniqChar = function (s) {
    /*Об’єкт Map в JavaScript – це структура даних, яка зберігає колекцію пар "ключ-значення", де кожен ключ унікальний.
     На відміну від об'єктів {}, у Map ключем може бути будь-який тип даних: рядок, число, об’єкт, функція тощо.
      Це робить Map гнучким інструментом для зберігання і керування даними, асоційованими з унікальними ключами.*/
    let map = new Map();

    for (let i = 0; i< s.length; i++) {
      const current = s[i];
       /*Метод .has() в JavaScript використовується для перевірки, чи міститься певний елемент у колекції,
        зокрема в об'єктах типу Set і Map. */
        if (map.has(current)) {
            /*В JavaScript метод .set() використовується для додавання або оновлення значень у структурах даних, таких як об'єкт Map.
            У контексті Map, .set() дозволяє встановити певне значення для конкретного ключа, додаючи нову пару ключ-значення
            або оновлюючи існуючу.
            Метод .get() в JavaScript використовується для доступу до значень у структурах даних, таких як об'єкти Map і WeakMap.
            Він дозволяє отримати значення, пов'язане з певним ключем. */
            map.set(current, map.get(current) + 1);
        } else {
             map.set(current, 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
        
    }
    return -1;
};

console.log(firstUniqChar(input1));
console.log(firstUniqChar(input2));
console.log(firstUniqChar(input3));



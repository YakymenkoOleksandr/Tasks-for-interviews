/*Потрібно обєднати інтервали, дано масив масивів, які містять два значення
необхідно вичислити накладення інтервалів та повернути масив масивів з 
інтервалами, які не пересікаються */


let input1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
let input2 = [[1, 4], [4, 5]];
let input3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]];
let input4 = [[1, 4]];

function merge(intervals) {
    // Встановлюємо чи ми маємо більше 1 інтервалу в масиву
    if (intervals.length < 2) {
        return intervals;
    }

    // Сорнуємо значення інтервалів від меншого до більшого
    intervals.sort((a, b) => a[0] - b[0]);

    // Встановлюємо перший інтервал
    let result = [intervals[0]];

    // Метеод перебору масиву for of, який витягує масив, що містить значення інтервалу.
    for (let interval of intervals) {
        // Останній елемент resul - найбільше значення інтервалу
        let recent = result[result.length - 1];
        //Перевірка на пересічення
        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1])
        } else {
            result.push(interval);
        }
    }
    // Повертаємо результат
    return result;
}

// Логи
console.log(merge(input1));
console.log(merge(input2));
console.log(merge(input3));
console.log(merge(input4));
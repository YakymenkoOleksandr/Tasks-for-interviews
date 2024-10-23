const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const input2 = [1, 1];
const input3 = [4, 3, 2, 1, 4];
const input4 = [1, 2, 1];

function maxArea(height) {

    let maxArea = 0;
    // Вказівник на крайню ліву точку масиву
    let left = 0;
    // Вказівник на крайню праву точку масиву 
    let right = height.length - 1;
    // Ітеруємо поки ліво менше ніж право
    while (left < right) {
        // Розраховуємо обєм води на текущій операції
        let currentVolume = Math.min(height[left], height[right]) * (right - left);
        // Порівнюємо, який результат більше поточний чи той що вже записаний
        maxArea = Math.max(maxArea, currentVolume)
    
        // Переміщення вказівників в сторону один до одного
        if (height[left] < height[right]) {
            // Якщо права висота більше лівої переміщаємо лівий вказівник на 1 індекс масива вперед
            left += 1;
        } else {
            // Якщо ліва висота більше правої переміщаємо правий вказівник на один індекс по масиву назад
            right -= 1; 
        }
    
    
    }
    return maxArea;
}

console.log(maxArea(input1));
console.log(maxArea(input2));
console.log(maxArea(input3));
console.log(maxArea(input4));

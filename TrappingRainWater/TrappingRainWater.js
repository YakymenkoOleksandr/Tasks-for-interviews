/*Потрібно підрахувати різницю висот між значеннями масиву, та вирахувати, скільки пустоти можна заповнити між висотами */
// Масиви, що є відображенням рельєфу
const input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const input2 = [4, 2, 0, 3, 2, 5];

function trap(height) {
  // Максимальне ліве значення
  let maxLeft = height[0];
  // Максимальне праве значення
  let maxRight = height[height.length - 1];
  // Вказівник
  let left = 1;
  let right = height.length - 2;
  // Всього води
  let total = 0;

  // Перевірка який з вказівників вище
  while (left <= right) {
    // Якщо maxLeft <= maxRight
    if (maxLeft <= maxRight) {
      // Перевірка різниці висот
      if (maxLeft - height[left] > 0) {
        total += maxLeft - height[left];
      }
      // Запис максимальної висоти
      maxLeft = Math.max(maxLeft, height[left]);
      //Крок
      left += 1;
    } else {
      // Перевірка різниці висот
      if (maxRight - height[right] > 0) {
        total += maxRight - height[right];
      }
      // Запис максимальної висоти
      maxRight = Math.max(maxRight, height[right]);
      //Крок
      right -= 1;
    }
  }

  return total;
}

console.log(trap(input1));
console.log(trap(input2));

/* Потрібно вирахувати максимальну різницю між значеннями при покупці та 
та продажу товару або акції*/

// Зміни ціни представлені масивом
let prices1 = [7, 1, 5, 3, 6, 4];
let prices2 = [7, 6, 4, 3, 1];

// Декларація функції що приймає масив цін
let maxProfit = function (prices) {
  // Акамулятор, що збираєданні про профіт
  let result = 0;

  // Перебирач значень масиву
  for (let i = 0; i < prices.length; i++) {
    /* Якщо ціна більше ніж ціна попереднього дня, то записуємо в акамуляор
    різницю ціни сьогодні та попереднього дня
    */
    if (prices[i] > prices[i - 1]) {
      result += prices[i] - prices[i - 1];
    }
  }
  // ПОвертаємо результат записаний в акамуляторі
  return result;
};

//Логи
console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
let grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

let grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

let numIslands = function (grid) {
  // Створюємо лічильник
  let counter = 0;
  // Вираховуємо довжину рядка
  let rowsL = grid.length;
  // Вираховуємо висоту колонки
  let colsL = grid[0].length; // Висота вираховується відносно першого елемента
  // Якщо висота колонки = 0 повертаємо 0
  if (rowsL === 0) return 0;
    
  // Помічаємо пройдені елементи матриці
  function markNeighbour(grid, R, C) {
    grid[R][C] = "6";
    if (grid[R][C-1] === "1") {markNeighbour(grid, R, C - 1);}
    if (grid[R][C+1] === "1") {markNeighbour(grid, R, C + 1);}
    if (grid?.[R-1]?.[C] === "1") {markNeighbour(grid, R-1, C);}
    if (grid?.[R+1]?.[C] === "1") {markNeighbour(grid, R+1, C);}
  }

  // Вичисляємо острови, які зустрічаються нам на шляху
  for (let R = 0; R < rowsL; R++) {
    for (let C = 0; C < colsL; C++) {
      if (grid[R][C] === "1") {
          counter++;
          markNeighbour(grid, R, C);
      }
    }
  }
  // Повертаємо суму островів
  return counter;
};

console.log(numIslands(grid1));
console.log(numIslands(grid2));

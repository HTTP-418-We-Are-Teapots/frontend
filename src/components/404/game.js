// Constants
var EMPTY = 0;
var FILL = 1;
var ROWS = 20;
var COLS = 10;
var createGrid = function () {
    var grid = [];
    for (var i = 0; i < ROWS; i++) {
        grid.push(new Array(COLS).fill(EMPTY));
    }
    console.log(grid);
    return grid;
};

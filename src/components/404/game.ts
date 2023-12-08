type Grid = number[][];

type Tetromino = {
    id: number,
    shape: string[][],
};

type Game = {
    grid: Grid,
    tetrominoActive: Tetromino | null,
    tetrominoList: number[],
    tetrominoCount: number,
    isGameOver: boolean

}
// Constants
const shapes = [[["*"]], [["*", "*"], ["*", "_"]], [["*", "*", "*"], ["*", "_", "*"]]]
const EMPTY = -1
const ROWS = 7
const COLS = 10


function createGame() : Game {
    return {
        grid: createGrid(),
        tetrominoActive: null,
        tetrominoList: [],
        tetrominoCount: 0,
        isGameOver: false
    }
}
const createGrid = () => {
    const grid : Grid = []
    for (let i = 0; i < ROWS; i++) {
        grid.push(new Array(COLS).fill(EMPTY))
    }
    return grid
}

function getRandomTetromino(game : Game) : Tetromino  {
    const randomTetrominoIdx = Math.floor(Math.random() * shapes.length)
    const id = game.tetrominoCount
    const shape = shapes[randomTetrominoIdx]

    game.tetrominoCount++

    return {
        id,
        shape
    }
};



function addTetrominoToGrid(game : Game)  : void {
    const tetromino = getRandomTetromino(game)

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (game.grid[i][j] !== EMPTY) {
                game.isGameOver = true
                return
            }
            if (i < tetromino.shape.length && j < tetromino.shape[i].length) {
                if (tetromino.shape[i][j] === "*") {
                    game.grid[i][j] = tetromino.id
                }
            }
        }
    }

    game.tetrominoList.push(tetromino.id)
    game.tetrominoActive = tetromino

}

function moveDown(game: Game) : void {
    const newGrid = createGrid()
    const flags = Array(game.tetrominoList.length).fill(true)

    for (let i = 0 ; i < ROWS - 1; i++) {
        for (let j = 0 ; j < COLS; j++) {
            const id = game.grid[i][j]
            if (game.grid[i+1][j] !== EMPTY && game.grid[i+1][j] !== id) {
                flags[game.tetrominoList.indexOf(id)] = false;
            }
        }
    }
    for (let j = 0 ; j < COLS; j++) {
        const id = game.grid[ROWS-1][j]
        if (game.grid[ROWS-1][j] !== EMPTY) {
            flags[game.tetrominoList.indexOf(id)] = false;
        }
    }

    for (let i = 0 ; i < ROWS; i++) {
        for (let j = 0 ; j < COLS; j++) {
            const id = game.grid[i][j]
            if (game.grid[i][j] !== EMPTY) {
                if (flags[game.tetrominoList.indexOf(id)]) {
                    newGrid[i+1][j] = id
                }
                else {
                    newGrid[i][j] = game.grid[i][j]
                }
            }
        }
    }

    game.grid = newGrid
}

function deleteRow(game : Game) : void {
    for (let i= 0; i < ROWS ; i++) {
        let flag = true;
        for (let j = 0; j < COLS; j++) {
            if (game.grid[i][j] === EMPTY) {
                flag = false;
            }
        }

        if (flag) {
            for (let j = 0; j < COLS; j++) {
                game.grid[i][j] = EMPTY
            }
        }

    }
}

function updateActiveTetromino(game : Game) : void {

    const tetromino = game.tetrominoActive

    if (tetromino === null) {
        addTetrominoToGrid(game)
        return
    }

    let isActive = true
    for (let i = 0 ; i < ROWS; i++) {
        for (let j = 0 ; j < COLS; j++) {
            if (game.grid[i][j] === tetromino.id) {
                if (i === ROWS - 1 || (game.grid[i+1][j] !== EMPTY && game.grid[i+1][j] !== tetromino.id)) {
                    isActive = false
                }
            }
        }
    }
    if (!isActive) {
        addTetrominoToGrid(game)
    }
}

function moveTetromino(game: Game, x : -1 | 1 ): boolean {
    const newGrid = createGrid()
    if (game.tetrominoActive !== null) {
        for (let i = 0; i < ROWS; i++) {
            for (let j = COLS - 1; j >= 0; j--) {
                if (game.grid[i][j] === game.tetrominoActive.id) {
                    if (j + x < 0 || j + x >= COLS || (game.grid[i][j + x] !== EMPTY && game.grid[i][j + x] !== game.tetrominoActive.id)) {
                        return false
                    }
                    else {
                        newGrid[i][j + x] = game.grid[i][j]
                    }
                }
                else if (game.grid[i][j] !== EMPTY) {
                    newGrid[i][j] = game.grid[i][j]
                }
            }
        }
    }
    game.grid = newGrid
    return true
}


export const main: any = () => {
    const game = createGame()


    for (let i = 0; i < 15; i++) {

        if (!game.isGameOver) {
            moveDown(game)
            moveTetromino(game, 1)
            deleteRow(game)
            updateActiveTetromino(game)
            console.log(game.grid)
        }
        else {
            console.log("GAME OVER")
        }

    }

}

export default main


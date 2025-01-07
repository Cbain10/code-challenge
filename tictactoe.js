/* requirements

    every possible game

    end of game
        winner - 3 in a row
        board is fulled out

    x always go first

*/

function validGames() {
    let count = 0;
    let matrix = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null));

    function dfs(currentMatrix, isX) {
        if (hasWinner(currentMatrix) || isOver(currentMatrix)) {
            count++;
            return;
        }
        
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (currentMatrix[i][j] === null) {
                    currentMatrix[i][j] = isX ? 'X' : 'O';
                    dfs(currentMatrix, !isX);
                    currentMatrix[i][j] = null;
                }
            }
        }
    }

    dfs(matrix, true);
    return count;
}

function hasWinner(matrix) {
    // rows
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] !== null && matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]) {
            return true;
        }
    }
    // columns
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] !== null && matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i]) {
            return true;
        }
    }
    // diagonals
    if ((matrix[0][0] !== null && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) || 
         (matrix[0][2] !== null && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0])) {
        return true;
    }
    return false;
}

function isOver(matrix) {
    // filled out
    let over = true;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === null) {
                over = false;
            }
        }
    }
    return over;
}

console.log(validGames());
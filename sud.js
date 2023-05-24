var sudoku4 = [];

var sudoku6 = [];

var sudoku8 = [];

var sudoku9 = [];

var sudoku_x, sudoku_y;

var sudoku, sudoku_size;

var sudokuScore, sudokuTimer;

sudoku4[0] = [
    ["", "", "3", ""],
    ["", "3", "", "4"],
    ["", "", "", "2"],
    ["", "4", "1", ""]
];
sudoku4[1] = [
    ["", "", "", ""],
    ["", "2", "3", ""],
    ["4", "", "2", ""],
    ["", "", "", "1"]
];
sudoku4[2] = [
    ["", "4", "", ""],
    ["3", "", "", "2"],
    ["", "", "", ""],
    ["", "2", "", "1"]
];
sudoku4[3] = [
    ["4", "", "", "3"],
    ["", "", "1", ""],
    ["2", "", "", ""],
    ["", "3", "4", ""]
];
sudoku4[4] = [
    ["", "1", "", "3"],
    ["", "3", "4", ""],
    ["", "", "1", ""],
    ["", "", "", "2"]
];

sudoku6[0] = [
    ["", "", "", "", "2", "4"],
    ["", "6", "2", "3", "", ""],
    ["1", "", "", "2", "", "6"],
    ["", "", "6", "5", "3", ""],
    ["6", "", "", "4", "5", ""],
    ["5", "2", "", "", "", "3"]
];
sudoku6[1] = [
    ["", "", "2", "4", "5", ""],
    ["3", "", "", "", "", ""],
    ["4", "5", "", "3", "", "6"],
    ["2", "", "6", "5", "1", ""],
    ["", "2", "4", "", "", ""],
    ["6", "", "", "", "", "5"]
];
sudoku6[2] = [
    ["", "", "6", "4", "1", ""],
    ["3", "", "", "2", "", ""],
    ["6", "2", "", "", "3", "4"],
    ["4", "", "5", "1", "", ""],
    ["", "6", "2", "", "", "5"],
    ["5", "", "", "", "", "1"]
];
sudoku6[3] = [
    ["2", "", "5", "", "", "3"],
    ["", "6", "3", "", "", ""],
    ["3", "", "", "5", "1", "4"],
    ["", "", "1", "6", "", ""],
    ["6", "3", "2", "", "", ""],
    ["", "1", "", "", "", "6"]
];
sudoku6[4] = [
    ["", "", "6", "1", "5", ""],
    ["3", "", "", "4", "", ""],
    ["5", "2", "", "", "6", "4"],
    ["", "6", "3", "", "1", ""],
    ["", "3", "2", "", "", ""],
    ["", "", "", "2", "3", "1"]
];

sudoku8[0] = [
    ["7", "", "", "2", "", "", "1", "5"],
    ["", "1", "3", "", "", "", "", "2"],
    ["", "2", "", "6", "", "8", "", ""],
    ["", "", "", "5", "", "", "3", "4"],
    ["", "", "8", "4", "1", "5", "", ""],
    ["", "", "7", "", "3", "6", "", ""],
    ["1", "6", "", "", "2", "", "8", ""],
    ["4", "8", "", "", "7", "", "", ""]
];
sudoku8[1] = [
    ["2", "4", "", "", "", "", "", "1"],
    ["", "", "8", "5", "3", "", "4", ""],
    ["", "", "6", "7", "", "3", "", ""],
    ["4", "", "2", "", "1", "", "6", "7"],
    ["", "", "", "4", "", "", "", "6"],
    ["3", "", "7", "", "8", "", "", "5"],
    ["", "", "5", "3", "", "", "8", ""],
    ["7", "", "", "1", "", "2", "5", ""]
];
sudoku8[2] = [
    ["8", "", "2", "", "6", "", "3", ""],
    ["3", "4", "1", "", "", "", "2", ""],
    ["", "", "4", "", "", "6", "", "7"],
    ["", "", "", "7", "", "3", "8", ""],
    ["5", "1", "", "", "2", "", "", ""],
    ["4", "6", "7", "", "", "8", "1", ""],
    ["", "8", "5", "", "", "", "", "1"],
    ["6", "", "3", "", "", "7", "4", "5"]
];
sudoku8[3] = [
    ["6", "", "", "2", "3", "", "", "8"],
    ["", "1", "", "", "", "4", "5", "2"],
    ["", "5", "8", "", "7", "", "3", "4"],
    ["", "3", "6", "", "", "", "", ""],
    ["", "", "", "7", "8", "", "6", ""],
    ["", "", "", "", "1", "2", "", ""],
    ["3", "", "", "5", "", "", "1", ""],
    ["", "", "4", "8", "5", "", "2", "3"]
];
sudoku8[4] = [
    ["7", "", "1", "5", "3", "4", "6", ""],
    ["", "2", "", "", "", "", "", ""],
    ["8", "", "5", "", "4", "6", "2", ""],
    ["3", "", "", "4", "", "", "7", "1"],
    ["", "3", "", "", "", "", "8", "5"],
    ["1", "", "6", "", "7", "2", "3", ""],
    ["", "", "", "6", "5", "", "", "8"],
    ["", "7", "8", "", "", "", "", ""]
];

sudoku9[0] = [
    ["", "5", "3", "", "", "", "1", "", ""],
    ["", "", "1", "", "3", "5", "", "9", "7"],
    ["4", "", "", "", "", "1", "2", "3", ""],
    ["", "", "", "", "9", "", "7", "", "6"],
    ["", "2", "7", "", "1", "", "5", "4", ""],
    ["5", "", "9", "", "6", "", "", "", ""],
    ["", "6", "4", "9", "", "", "", "", "1"],
    ["3", "1", "", "4", "8", "", "9", "", ""],
    ["", "", "2", "", "", "", "6", "8", ""]
];
sudoku9[1] = [
    ["", "8", "", "3", "2", "7", "", "", ""],
    ["5", "", "9", "", "", "", "2", "", "3"],
    ["", "", "", "4", "", "", "", "6", ""],
    ["", "", "8", "", "3", "1", "4", "7", ""],
    ["7", "", "4", "", "", "", "8", "", "1"],
    ["", "1", "5", "7", "8", "", "9", "", ""],
    ["", "3", "", "", "", "5", "", "", ""],
    ["8", "", "2", "", "", "", "6", "", "4"],
    ["", "", "", "2", "6", "8", "", "5", ""]
];
sudoku9[2] = [
    ["6", "9", "1", "5", "", "", "8", "", ""],
    ["", "", "", "", "9", "", "", "1", ""],
    ["", "", "5", "", "3", "8", "", "4", "9"],
    ["9", "", "", "", "4", "5", "", "7", ""],
    ["", "4", "", "", "", "", "", "6", ""],
    ["", "1", "", "2", "6", "", "", "", "5"],
    ["8", "5", "", "6", "1", "", "3", "", ""],
    ["", "2", "", "", "8", "", "", "", ""],
    ["", "", "6", "", "", "2", "1", "9", "8"]
];
sudoku9[3] = [
    ["9", "3", "", "4", "", "2", "", "", "5"],
    ["", "5", "8", "3", "", "7", "", "4", ""],
    ["", "", "2", "", "8", "", "", "", ""],
    ["", "2", "6", "", "", "", "", "5", ""],
    ["1", "", "", "6", "", "9", "", "", "4"],
    ["", "9", "", "", "", "", "7", "8", ""],
    ["", "", "", "", "9", "", "5", "", ""],
    ["", "6", "", "1", "", "4", "2", "9", ""],
    ["5", "", "", "2", "", "8", "", "6", "7"]
];
sudoku9[4] = [
    ["3", "2", "8", "1", "7", "", "", "6", "9"],
    ["", "5", "", "", "6", "", "", "", ""],
    ["", "1", "6", "", "", "4", "", "", "2"],
    ["5", "", "", "2", "", "", "", "", ""],
    ["", "9", "2", "", "4", "", "1", "8", ""],
    ["", "", "", "", "", "7", "", "", "4"],
    ["2", "", "", "6", "", "", "8", "4", ""],
    ["", "", "", "", "8", "", "", "7", ""],
    ["8", "3", "", "", "2", "1", "5", "9", "6"]
];

function startSudoku() {
    // document.getElementById("img").style.display = "none";
    var size_sudoku = document.getElementById("mysudoku").value.split("");
    sudoku_x = size_sudoku[0];
    sudoku_y = size_sudoku[1];
    sudoku_size = sudoku_x * sudoku_y;
    sudoku = [];
    switch(sudoku_size) {
        case 4:
            sudoku = sudoku4[Math.floor(Math.random() * sudoku4.length)];
            document.getElementById("btn5").style.backgroundColor = "gray";
            document.getElementById("btn6").style.backgroundColor = "gray";
            document.getElementById("btn7").style.backgroundColor = "gray";
            document.getElementById("btn8").style.backgroundColor = "gray";
            document.getElementById("btn9").style.backgroundColor = "gray";
        break;
        case 6:
            sudoku = sudoku6[Math.floor(Math.random() * sudoku6.length)];
            document.getElementById("btn5").style.backgroundColor = "white";
            document.getElementById("btn6").style.backgroundColor = "white";
            document.getElementById("btn7").style.backgroundColor = "gray";
            document.getElementById("btn8").style.backgroundColor = "gray";
            document.getElementById("btn9").style.backgroundColor = "gray";
        break;
        case 8:
            sudoku = sudoku8[Math.floor(Math.random() * sudoku8.length)];
            document.getElementById("btn5").style.backgroundColor = "white";
            document.getElementById("btn6").style.backgroundColor = "white";
            document.getElementById("btn7").style.backgroundColor = "white";
            document.getElementById("btn8").style.backgroundColor = "white";
            document.getElementById("btn9").style.backgroundColor = "gray";
        break;
        case 9:
            sudoku = sudoku9[Math.floor(Math.random() * sudoku9.length)];
            document.getElementById("btn5").style.backgroundColor = "white";
            document.getElementById("btn6").style.backgroundColor = "white";
            document.getElementById("btn7").style.backgroundColor = "white";
            document.getElementById("btn8").style.backgroundColor = "white";
            document.getElementById("btn9").style.backgroundColor = "white";
        break;
    }
    alert(sudoku_size + "x" + sudoku_size + " SUDOKU\n\nYour objective is to fill the given " + sudoku_size + "x" + sudoku_size + " table of " + (sudoku_size * sudoku_size) + " cells using the numbers 1 to " + sudoku_size + " such that:\n* Each row contains all the numbers from 1 to " + sudoku_size + ".\n* Each column contains all the numbers from 1 to " + sudoku_size + ".\n* Each " + sudoku_x + "x" + sudoku_y + " block contains all the numbers from 1 to " + sudoku_size + ".\n\nClick on a cell to select it. Use the number buttons below the table to fill the cells. Then, click the \u2713 button to submit your solution. Your score will depend on the time you take to solve the sudoku.\n\nWhat are you waiting for? Let's start!");
    document.getElementById("mysudoku").style.display = "none";
    document.getElementById("startSudoku").style.display = "none";
    drawSudoku();
    document.getElementById("controls").style.display = "block";
    document.getElementById("sudokuTimer").style.display = "block";
    sudokuTimer = setInterval(function() {
        var sudoku_time = parseInt(document.getElementById("sudokuTimer").innerHTML.split(" ")[2]);
        document.getElementById("sudokuTimer").innerHTML = "<i>Time Taken</i>:<b> " + (sudoku_time + 1) + " </b>Seconds";
    }, 1000);
    document.getElementById("doneSudoku").style.backgroundColor = "green";
    document.getElementById("stopSudoku").style.backgroundColor = "red";
}

function drawSudoku() {
    var table = document.getElementById("sudoku");
    table.innerHTML = "";
    var i, j, rows = [], cols = [];
    for (i = 0; i < sudoku_size; i++) {
        rows[i] = table.insertRow(i);
        for (j = 0; j < sudoku_size; j++) {
            cols[j] = rows[i].insertCell(j);
            cols[j].id="cell_" + i + "_" + j;
            if (sudoku[i][j] === "")
                cols[j].innerHTML = "";
            else
                cols[j].innerHTML = "<i><b style='color:yellow'>" + sudoku[i][j] + "</b></i>";
            cols[j].onclick = function() {
                if (!this.innerHTML.startsWith("<i>") && this.style.backgroundColor !== "red") {
                    for (var x = 0; x < sudoku_size; x++)
                        for (var y = 0; y < sudoku_size; y++)
                            document.getElementById("cell_" + x + "_" + y).style.backgroundColor = "grey";
                    this.style.backgroundColor = "yellow";
                    document.getElementById("curr_x").value = this.id.slice(5).split("_")[0];
                    document.getElementById("curr_y").value = this.id.slice(5).split("_")[1];
                }
            };
        }
    }
    var ui, u;
    ui = document.querySelectorAll("table tr:nth-of-type(" + sudoku_x + "n)");
    for (u = 0; u < ui.length; u++)
        ui[u].style.borderBottom = "solid thick white";
    ui = document.querySelectorAll("table td:nth-of-type(" + sudoku_y + "n)");
    for (u = 0; u < ui.length; u++)
        ui[u].style.borderRight = "solid thick white";
}

function fillSudoku(n) {
    var x = document.getElementById("curr_x").value;
    var y = document.getElementById("curr_y").value;
    if (n <= sudoku_size && x !== "" && y !== "")
        if (document.getElementById("cell_" + x + "_" + y).style.backgroundColor === "yellow")
            document.getElementById("cell_" + x + "_" + y).innerHTML = "<b>" + n + "</b>";
    
}

function doneSudoku() {
    var x, y, filledSudoku = [];
    for (x = 0; x < sudoku_size; x++) {
        filledSudoku[x] = [];
        for (y = 0; y < sudoku_size; y++)
            filledSudoku[x][y] = document.getElementById("cell_" + x + "_" + y).innerText;
    }
    var sudokuCheck = "";
    for (var w = 0; w < sudoku_size; w++)
        sudokuCheck += (w + 1);
    var sort = function(arr) {
        for (var i = 0; i < arr.length; i++)
            for (var j = 0; j < arr.length - i - 1; j++)
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
        return arr;
    };
    var rowFill;
    for (x = 0; x < sudoku_size; x++) {
        rowFill = "";
        for (y = 0; y < sudoku_size; y++)
            rowFill += filledSudoku[x][y];
        if (sort(rowFill.split("")).join("") !== sudokuCheck)
            break;
    }
    if (x === sudoku_size && y === sudoku_size) {
        var colFill;
        for (y = 0; y < sudoku_size; y++) {
            colFill = "";
            for (x = 0; x < sudoku_size; x++)
                colFill += filledSudoku[x][y];
            if (sort(colFill.split("")).join("") !== sudokuCheck)
                break;
        }
        if (x === sudoku_size && y === sudoku_size) {
            var l = 0, m, n, bFill;
            for (m = 0; m < sudoku_y; m++) {
                for (n = 0; n < sudoku_x; n++) {
                    bFill = "";
                    for (x = m * sudoku_x; x < (m + 1) * sudoku_x; x++)
                        for (y = n * sudoku_y; y < (n + 1) * sudoku_y; y++)
                            bFill += filledSudoku[x][y];
                    if (sort(bFill.split("")).join("") !== sudokuCheck) {
                        l = 1;
                        break;
                    }
                }
                if (l === 1)
                    break;
            }
            if (x === sudoku_size && y === sudoku_size) {
                var sudokuTime = parseInt(document.getElementById("sudokuTimer").innerHTML.split(" ")[2]);
                sudokuScore = Math.ceil(sudoku_size / 2) * (Math.ceil(sudoku_size / 2) * 120 - sudokuTime);
                alert("You solved the " + sudoku_size + "x" + sudoku_size + " Sudoku!\nTime Taken: " + sudokuTime + " Seconds!\nYour Score: " + sudokuScore + "!\nCongrats!");
                clearInterval(sudokuTimer);
                document.getElementById("sudokuTimer").innerHTML = "<i>Time Taken</i>:<b> 0 </b>Seconds";
                document.getElementById("sudokuTimer").style.display = "none";
                document.getElementById("mysudoku").style.display = "block";
                document.getElementById("startSudoku").style.display = "inline";
                document.getElementById("sudoku").innerHTML = "";
                document.getElementById("controls").style.display = "none";
                document.getElementById("curr_x").value = "";
                document.getElementById("curr_y").value = "";
            } else {
                for (var z = m * sudoku_x; z < (m + 1) * sudoku_x; z++)
                    for (var w = n * sudoku_y; w < (n + 1) * sudoku_y; w++)
                        document.getElementById("cell_" + z + "_" + w).style.backgroundColor = "red";
                setTimeout(function() {
                    for (var z = m * sudoku_x; z < (m + 1) * sudoku_x; z++)
                        for (var w = n * sudoku_y; w < (n + 1) * sudoku_y; w++)
                            document.getElementById("cell_" + z + "_" + w).style.backgroundColor = "black";
                }, 500);
            }
        } else {
            for (var z = 0; z < sudoku_size; z++)
                document.getElementById("cell_" + z + "_" + y).style.backgroundColor = "red";
            setTimeout(function() {
                for (var z = 0; z < sudoku_size; z++)
                    document.getElementById("cell_" + z + "_" + y).style.backgroundColor = "black";
            }, 500);
        }
    } else {
        for (var z = 0; z < sudoku_size; z++)
            document.getElementById("cell_" + x + "_" + z).style.backgroundColor = "red";
        setTimeout(function() {
            for (var z = 0; z < sudoku_size; z++)
                document.getElementById("cell_" + x + "_" + z).style.backgroundColor = "black";
        }, 500);
    }
}

function stopSudoku() {
    if (confirm("Are you sure to restart?")) {
        clearInterval(sudokuTimer);
        document.getElementById("sudokuTimer").innerHTML = "<i>Time Taken</i>:<b> 0 </b>Seconds";
        document.getElementById("sudokuTimer").style.display = "none";
        document.getElementById("mysudoku").style.display = "block";
        document.getElementById("startSudoku").style.display = "inline";
        document.getElementById("sudoku").innerHTML = "";
        document.getElementById("controls").style.display = "none";
        document.getElementById("curr_x").value = "";
        document.getElementById("curr_y").value = "";
    }
}

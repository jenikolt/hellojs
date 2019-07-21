const WIDTH_COUNT = 5;
const HEIGHT_COUNT = 5;

const SAPER_POLE = document.getElementById("saper_pole");
/*
var Cell = {
    id: 0,
    pos_w: 0,
    pos_h: 0,
    status: 0, 0 - close, 1 - open
    weight: 0,  weight >= 9 - this mine 
    mark: 0, 0 - empty, 1 - ?, 2 - ^. visible on open status 
}
*/

function createArray(rows, columns){
    let arr = [columns];
    for(let i = 0; i< rows; i++){
        arr[i] = [];
    }
    return arr;
}

function initCells(){
    let index_cell = 1;
    let arrayCells = createArray(WIDTH_COUNT,HEIGHT_COUNT);
    for (let j = 0; j < WIDTH_COUNT; j++){
        for(let k = 0; k < HEIGHT_COUNT; k++){
            //var c =  {};
            let c = {};
            c.id = index_cell;
            index_cell++;
            c.pos_h = k+1;
            c.pos_w = j+1;
            c.status = 0;
            if(j == 1 && k == 1) {c.status = 1; }
            c.weight = 0;
            c.mark = 0;
            arrayCells[j][k] = c;
        }
    }
    return arrayCells;
}
function CellToStr(cell){
    let str = `[${cell.id} | ${cell.pos_h} | ${cell.pos_w} | ${cell.status} | ${cell.weight} | ${cell.mark}]`;
    return str;
}
function outArray(arr){
    let str = "";
    for (let j = 0; j < WIDTH_COUNT; j++){
        for(let k = 0; k < HEIGHT_COUNT; k++){
            str = str + " " + CellToStr(arr[j][k]);
        }
        console.log(str);
        str = "";
    }
}

function drawCells(width, height, cells){
    let arrayCells = initCells();
    let width_cell = 25;
    let height_cell = 25;
    let width_pole = width_cell * WIDTH_COUNT + WIDTH_COUNT * 2;
    let height_pole = height_cell * HEIGHT_COUNT + HEIGHT_COUNT * 2;

    for(let j = 1; j <= width; j++){
        for(let k = 1; k <= height; k++){
            let cell = document.createElement("div");
            cell.className = "cell";
            if(arrayCells[j-1][k-1].status == 1){
                cell.className = cell.className + " down";
            }
            cell.id = j + "_" + k;
            SAPER_POLE.appendChild(cell);
        }
    }
    outArray(arrayCells);
}


(drawCells(WIDTH_COUNT,HEIGHT_COUNT,null));
alert("Это Калькулятор!");
let go_calc = true; /**калькулятор предложит считать до тех пор пока true */
const LIST_OPERATION = "/*-+"; /**список допустимых операций */

/** выполняет действие указанное в action над операндами oper1 и oper2 и возвращает результат*/
function calc(action, oper1, oper2){
    if(action === "+"){
        return Number(oper1)+Number(oper2);
    }
    else if(action==="-"){
        return oper1 - oper2;
    }
    else if(action === "/"){
        return oper1 / oper2;
    }
    else if(action === "*"){
        return oper1 * oper2;
    }
    else{
        return null;
    }
}

/**проверка строки на соответсвие числу */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

/**получение от пользователя числа. функция вызывает себя пока не будет введено число или пользователь не откажеться продолжать */
function get_digit(message){
    let digit = prompt("введите число: \n" + message,"1");
    if(isNumeric(digit)){
        return digit;
    }else{
        if(confirm("введено не число. попробовать снова?")){
            return digit = get_digit(message);
        }
        return null;
    }
}

/**цикл калькулатора */
while (go_calc){
    let operation = null;
    operation = prompt("введите операцию. \n'/', '*', '-', '+'", "+");
    if(operation.length === 1){ /**ожидаем только один символ */
        if(LIST_OPERATION.indexOf(operation) > -1){/**проверка на соответсвие символа допустимому списку операций */
            let oper1 = get_digit("первый операнд");
            let oper2 = get_digit("второй операнд");
            if(oper1 != null && oper2 != null){
                result = calc(operation, oper1, oper2);
                alert("Результат: " + oper1 + " " + operation + " " + oper2 + " = "+ result);
            }else{
                go_calc = confirm("ошибка! числа null. \nПродолжим считать?");
                continue;
            } 
        }else{
            go_calc = confirm("ошибка! неизвестный символ операции. \nПродолжим считать?");
            continue;
        }
    }else{
        go_calc = confirm("ошибка! символ операции должен быть один. \nПродолжим считать?");
        continue;
    }
    go_calc = confirm("Продолжим считать?");
}
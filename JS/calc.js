var $calc_btn = $(".calc_btn");
var $dis = $("#dis");
var calculate = '';
var display = '';
var operator = '';
var firstNum = 0;
var secondNum = 0;
var total = 0;
$calc_btn.click(function() {
    switch ($(this).val()) {
        case "1":
            calculate += $(this).val();
            display += $(this).val();
            updateDisplay(display);
            break;
        case "2":
            calculate += $(this).val();
            display += $(this).val();
            updateDisplay(display);
            break;
        case "3":
            calculate += $(this).val();
            display += $(this).val();
            updateDisplay(display);
            break;
        case "4":
            calculate += $(this).val();
            display += $(this).val();
            updateDisplay(display);
            break;
        case "5":
            calculate += $(this).val();
            display += $(this).val();
            updateDisplay(display);
            break;
        case "6":
            calculate += $(this).val();
            display += $(this).val();
            updateDisplay(display);
            break;
        case "7":
            calculate += $(this).val();
            display += $(this).val();
            updateDisplay(display);
            break;
        case "8":
            calculate += $(this).val();
            display += $(this).val();
            updateDisplay(display);
            break;
        case "9":
            calculate += $(this).val();
            display += $(this).val();
            updateDisplay(display);
            break;
        case "0":
            calculate += $(this).val();
            display += $(this).val();
            updateDisplay(display);
            break;
        case ".":
            calculate += $(this).val();
            display += $(this).val();
            updateDisplay(display);
            break;
        case "/":
            if (firstNum !== '' && operator !== '' && calculate !=='') {
                firstNum = sumTotal(firstNum, operator, calculate);
            } else if (total !== 0 && operator === '') {
              firstNum = total;
            } else if (calculate !== '') {
                firstNum = calculate;
            }
            calculate = '';
            operator = "/";
            display = firstNum + operator;
            updateDisplay(display);
            break;
        case "*":
            if (firstNum !== '' && operator !== '' && calculate !=='') {
                firstNum = sumTotal(firstNum, operator, calculate);
            } else if (total !== 0 && operator === '') {
              firstNum = total;
            } else if (calculate !== '') {
                firstNum = calculate;
            }
            calculate = '';
            operator = "*";
            display = firstNum + operator;
            updateDisplay(display);
            break;
        case "+":
            if (firstNum !== '' && operator !== '' && calculate !=='') {
                firstNum = sumTotal(firstNum, operator, calculate);
            } else if (total !== 0 && operator === '') {
              firstNum = total;
            } else if (calculate !== '') {
                firstNum = calculate;
            }
            calculate = '';
            operator = "+";
            display = firstNum + operator;
            updateDisplay(display);
            break;
        case "-":
            if (firstNum !== '' && operator !== '' && calculate !=='') {
                firstNum = sumTotal(firstNum, operator, calculate);
            } else if (total !== 0 && operator === '') {
              firstNum = total;
            } else if (calculate !== '') {
                firstNum = calculate;
            }
            calculate = '';
            operator = "-";
            display = firstNum + operator;
            updateDisplay(display);
            break;
        case "%":
            if (firstNum !== '' && operator !== '' && calculate !=='') {
                firstNum = sumTotal(firstNum, operator, calculate);
            } else if (total !== 0 && operator === '') {
              firstNum = total;
            } else if (calculate !== '') {
                firstNum = calculate;
            }
            calculate = '';
            operator = "%";
            display = firstNum + operator;
            updateDisplay(display);
            break;
        case "CE":
            calculate = '';
            display = '';
            firstNum = 0;
            total = 0;
            updateDisplay(display);
            break;
        case "=":
            display = '';
            total = sumTotal(firstNum, operator, calculate)
            updateDisplay(total);
            calculate = '';
            firstNum = '';
    }
    console.log(calculate);
});

function updateDisplay(display) {
    $dis.val(display);
};

function sumTotal(firstNum, operator, calculate) {
    if (operator == "+") {
        return parseInt(firstNum) + parseInt(calculate);
    } else if (operator == "-") {
        return parseInt(firstNum) - parseInt(calculate);
    } else if (operator == "/") {
        return parseInt(firstNum) / parseInt(calculate);
    } else if (operator == "*") {
        return parseInt(firstNum) * parseInt(calculate);
    } else if (operator == "%") {
        return parseInt(firstNum) % parseInt(calculate);
    }
}

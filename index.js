let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDevide = document.getElementById("buttonDevide");

buttonPlus.addEventListener("click", F_buttonPlusClick);
buttonMinus.addEventListener("click", F_buttonMinusClick);
buttonMultiply.addEventListener("click", F_buttonMultiplyClick);
buttonDevide.addEventListener("click", F_buttonDevideClick);

let input1 = document.getElementById("inputFirst");
let input2 = document.getElementById("inputSecond");

function F_buttonPlusClick()
{
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    window.alert(number1 + number2);
};

function F_buttonMinusClick()
{
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    window.alert(number1 - number2);
};

function F_buttonMultiplyClick()
{
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    window.alert(number1 * number2);
};

function F_buttonDevideClick()
{
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    window.alert(number1 / number2);
};

// let mounted = () =>  {
//     if (messages[this.$route.query.message]) {
//       this.$message(messages[this.$route.query.message])
//     }
//   }

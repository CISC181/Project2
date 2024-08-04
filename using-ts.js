//  Compile the code with
//  tsc using-ts.ts
//  Run the code by opening index.html in browser.  F12, go to console to see output
var btn1 = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var v1 = 4.2;
//  Passing in two numbers and a boolean
//  This function... is weird.  Sometimes it returns something, sometimes it doesn't.  I don't have a return type required
function add(num1, num2, bShow) {
    //  If/else logic.
    //  The expression you're evaluating needs to be in ().
    //  Operator === is equality (triple equals)
    if (bShow === true) {
        console.log(num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
btn1.addEventListener("click", function () {
    //  v1 is defined a constant.  If you attempt to compile the code, it compiles, but also warns
    //  'const' is a typescript declaration.  When it's compiled, it's changed to 'var'.
    //  'var' value can be replaced.
    //                  this does not compile v1 = 44;
    console.log(v1);
    add(+input1.value, +input2.value, true);
    console.log("returned value " + add(+input1.value, +input2.value, false));
});
//  Switch Statement
var day = 4;
console.log("****** Switch Statement 1");
switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}
console.log("****** Switch Statement 2");
day = 6;
switch (day) {
    case 0:
    case 6:
        console.log("This is a weekend");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("This is a weekday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}

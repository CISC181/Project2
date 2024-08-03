//  Compile the code with
//  tsc using-ts.ts
//  Run the code by opening index.html in browser.  F12, go to console to see output

const btn1 = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

const v1 = 4.2;

//  Passing in two numbers and a boolean 
//  This function... is weird.  Sometimes it returns something, sometimes it doesn't.  I don't have a return type required

function add(num1: number, num2: number, bShow: boolean)  {

  //  If/else logic.  
  //  The expression you're evaluating needs to be in ().  
  //  Operator === is equality (triple equals)
  if (bShow === true)
  {
    console.log(num1+num2);
  }
  else
  {
    return num1 + num2;
  }
  
}

btn1.addEventListener("click", function() {

  //  v1 is defined a constant.  If you attempt to compile the code, it compiles, but also warns
  //  'const' is a typescript declaration.  When it's compiled, it's changed to 'var'. 
  //  'var' value can be replaced.  
    v1 = 44;
  

    console.log(v1);
  add(+input1.value, +input2.value, true);

  console.log('returned value ' + add(+input1.value, +input2.value, false));
});

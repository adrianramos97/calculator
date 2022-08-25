let num1 = 0;
let num2 = 0;
let result = 0;
let operation = '';
let num = [];
// check where to store the input number (num1 or num2)
function check() {
   if (operation == '') {
      num1 = num.join('');
      display.textContent = num1;
   }
   else {
      num2 = num.join('');
      display.textContent = num2;
   }
}
// empty the array (num)
function emptyArr() {
   while(num.length > 0) {
      num.pop();
   }
}

const display = document.getElementById('text')
const one = document.getElementById('one');
const two = document.getElementById('two');
const plus = document.getElementById('plus');

one.addEventListener('click', function() { 
   num.push(1);
   check();
})

two.addEventListener('click', function() { 
   num.push(2);
   check();
})

three.addEventListener('click', function() { 
   num.push(3);
   check();
})

four.addEventListener('click', function() { 
   num.push(4);
   check();
})

five.addEventListener('click', function() { 
   num.push(5);
   check();
})

six.addEventListener('click', function() { 
   num.push(6);
   check();
})

seven.addEventListener('click', function() { 
   num.push(7);
   check();
})

eight.addEventListener('click', function() { 
   num.push(8);
   check();
})

nine.addEventListener('click', function() { 
   num.push(9);
   check();
})

cero.addEventListener('click', function() { 
   num.push(0);
   check();
})

dot.addEventListener('click', function() { 
   num.push('.');
   check();
})

divide.addEventListener('click', function() { 
   if (operation == '') {
      operation = '/';
      emptyArr();
   }
   else {
      result = Number(num1) / Number(num2);
      display.textContent = result;
   }
})

multiply.addEventListener('click', function() { 
   if (operation == '') {
      operation = '*';
      emptyArr();
   }
   else {
      result = Number(num1) * Number(num2);
      display.textContent = result;
   }
})

minus.addEventListener('click', function() { 
   if (operation == '') {
      operation = '-';
      emptyArr();
   }
   else {
      result = Number(num1) - Number(num2);
      display.textContent = result;
   }
})

plus.addEventListener('click', function() { 
   if (operation == '') {
      operation = '+';
      emptyArr();
   }
   else {
      result = Number(num1) + Number(num2);
      display.textContent = result;
   }
})

equal.addEventListener('click', function() {
   result = eval(num1 + operation + num2)
   display.textContent = result;
})

ac.addEventListener('click', function() {
   num1 = 0;
   num2 = 0;
   operation = '';
   emptyArr();
   display.textContent = '';
})

more_less.addEventListener('click', function() {
   if (operation == '+') {
      operation = '-';
   }
   if (operation == '-') {
      operation = '+';
   }
})

porcentage.addEventListener('click', function() { 
      emptyArr();
      result = Number(num1) / 100
      display.textContent = result;
})
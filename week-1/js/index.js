
// comment example
/* console.log('initial');
document.addEventListener('DOMContentLoaded', () => {
  const loginEl =  document.querySelector('.text');
  console.log(loginEl);
});
console.log('end'); */

/* var name = 'caglayan';
const lastname = 'yanikoglu';
let age = 27;
age = 'test';

console.log(name);
console.log(lastname);
console.log(age);

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log('after i', i); */

// Hoisting
/* console.log(name);
var name = 'caglayan'; */

/* const name = 'caglayan'; // String
const age = 27; // number
const isMarried = false; // boolean
const kodluyoruz = {
  instructor: 'caglayan',
  companyName: 'Kodluyoruz'
}; // object

const users = [
  'ünal', 'tugce', 'anil'
]; // array

users[0] = 'murat';
users.push('burak');

console.log(typeof name);
console.log(typeof age);
console.log(typeof isMarried);
console.log(kodluyoruz);
console.log(kodluyoruz.companyName);
console.log(kodluyoruz['companyName']);
console.log(users);
console.log(users[users.length]); // users[3] = undefined

const helloName = `hello ${name}`; // literal string
console.log(helloName); */

const textEl = document.querySelector('.class-text');
/* const textEl = document.querySelector('#id-text'); */
/* const textEl = document.getElementById('id-text'); */
/* const textEl = document.getElementsByClassName('class-text')[0]; */
// console.log(textEl);
/* textEl.innerHTML = '<h2>Hello World</h2>';
textEl.style.color = 'red';


function changeColor() {
  textEl.style.color = 'blue';
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', changeColor);

const age = 16;
if (age > 35) {
  console.log('age > 35');
} else if (age > 17) {
  console.log('age > 17');
} else {
  console.log('age < 17');
}

const canDrink = age > 17 ? true : false;
console.log(canDrink); */

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    // break;
    // continue;
  }
  // console.log(i);
}

/* let i = 0;

while (i < 10) {
  console.log(i);
  i++;
} */
/* 
const users = ['ünal', 'tugce', 'anil'];
users.push('caglayan');

users.forEach(user => {
  console.log(user);
}) */


/* function sumNumbers(num1, num2) {
  console.log('function is called');
  
  return num1 + num2;
} */

/* const sumNumbers = (num1, num2) => {
  console.log('function is called');
  return num1 + num2;
}

const makeColorRed = function() {
  textEl.style.color = 'red';
}

console.log(sumNumbers(7, 14));
makeColorRed();

console.log(this);


let obj = {
  name: 'caglayan',
}

console.log(obj);
console.log(JSON.stringify(obj));

localStorage.setItem('lastname', 'yanikoglu');

console.log(typeof localStorage.getItem('language'));
console.log(JSON.parse(localStorage.getItem('language'))['tr-TR']); */

const fruits = ['apple', 'banana', 'orange'];
fruits.push('pineapple');
/* console.log(fruits.includes('banana'));
console.log(fruits.includes('kiwi')); */
/* fruits.push('kiwi');
console.log(fruits);
fruits.pop(); // remove last element
fruits.shift(); // remove first element
console.log(fruits);
fruits.splice(1, 1); */

// console.log(fruits);

/* const fruitsContainer = document.querySelector('.fruits');

fruits.forEach(fruit => {
  const fruitEl = document.createElement('p');
  fruitEl.innerHTML = fruit;
  fruitsContainer.appendChild(fruitEl);
})
console.log(fruitsContainer);

// map
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => {
  return number * 2;
});
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
})
console.log(numbers);
console.log(doubledNumbers);

const oddNumbers = numbers.filter(number => {
  return number % 2 !== 0;
});

const usersArr = [
  {
    name: 'ünal',
    age: 27
  }, {
    name: 'tugce',
    age: 26
  }
]


const ünalObj = usersArr.find(user => {
  return user.name === 'ünal';
})

console.log(oddNumbers);
console.log(ünalObj); */

// TODO: reduce

/* let number1 = 12;
let number2 = number1;
console.log(number1);
console.log(number2);
number2 = 17;
console.log('-----');
console.log(number1);
console.log(number2); */

let userObj = {
  name: 'caglayan',
  age: 27,
  address : {
    city: 'istanbul'
  }
};

/* // let copyArray = JSON.parse(JSON.stringify(userObj));
// let copyArray = {...userObj}; // obj destructuring
console.log(userObj.name);
console.log(copyArray.name);
copyArray.name = 'murat';
console.log('2----')
console.log(userObj.name);
console.log(copyArray.name);
console.log('####');
console.log(userObj.address.city);
console.log(copyArray.address.city);
copyArray.address.city = 'ankara';
console.log('----');
console.log(userObj.address.city);
console.log(copyArray.address.city); */

try {
  console.log(asdada);
} catch (error) {
  console.log('Unexpected error');  
} finally {
  console.log('Finally');
}
console.log('hello');

// .then => promise
try {
  /* fetch('https://jsonplaceholderas.typicode.com/todos')
    .then(response => {
      console.log(response);
      return response.json()
    })
    .then(data => {
      console.log(data);
      const todosEl = document.querySelector('.todos');
      data.forEach(todo => {
        const todoEl = document.createElement('p');
        todoEl.innerHTML = todo.title;
        todosEl.appendChild(todoEl);
      })
    }); */
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    console.log(data);
} catch (error) {
  console.log(error);  
}
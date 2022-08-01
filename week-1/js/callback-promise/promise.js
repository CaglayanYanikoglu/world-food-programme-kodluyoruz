// callback
// callback hell problem
/* function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, callback) {
  setTimeout(() => {
    let sum = num1 + num2;
    callback(sum);
  }, 2000);
}

myCalculator(5, 5, myDisplayer); */

// Promise (resolve, reject);
/* function myDisplayer(some) {
  console.log(some);
}
const myPromise = new Promise((resolve, reject) => {
  axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
    resolve(response.data);
  }).catch(error => {
    reject(error);
  })
});
 */
/* const res = await myPromise();
console.log(res); */

/* myPromise.then(data => {
  console.log(data);
})

const res = axios.get("https://jsonplaceholder.typicode.com/todos/1");
console.log(res); */

const isAuthUser = name => {
  // think like a api request
  return new Promise((resolve, reject) => {
    if (name == 'caglayan') {
      resolve('success')
    } else {
      reject('error, wrong person')
    }
  });
};

// promise chaining
/* isAuthUser('caglayan')
  .then(data => console.log(data))
  .catch(err => console.error(err)); */

// async await 
/* const checkUser = async (name) => {
  const res = await isAuthUser(name);
  console.log(res);
}

checkUser('caglayan');
 */
/* let number1 = 5;
let number2= 5;
console.log(number1 === number2);

let testArr = [];
let testArr2 = [];
console.log(testArr === testArr2); */
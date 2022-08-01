/* console.log('1');
setTimeout(() => {
  console.log('2');
}, 2000);
console.log('3');

// 1 2 3 => 1
// 1 3 2 => 2
// random şekilde duruma göre calisir => 3

// call stack

function a() {
  console.log('a started');
  b();
  console.log('a finish');
}
function b() {
  console.log('b started');
  c();
  console.log('b finish');
}
function c() {
  console.log('c start');
  console.log('c finish');
}

a();

// call stack
// a 
// a b
// a b c
// a b
// a
// empty */
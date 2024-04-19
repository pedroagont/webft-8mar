// PURE
// Fn that affects only elements within its own scope

const addTwoHundred = (num) => {
  return num + 100;
};

const result = addTwoHundred(200);
console.log(result);

// SIDE EFFECT
// Fn that affects elements outside its scope

function printHello() {
  console.log('Hello! 👋');
}

printHello();

//

const myFerrari = {
  name: 'ferrari',
  color: 'red',
};

const changeColor = (car) => {
  car.color = 'blue';
};

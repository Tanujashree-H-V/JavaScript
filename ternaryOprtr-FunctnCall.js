function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function sayGoodbye(name) {
  console.log(`Goodbye, ${name}!`);
}

let isLeaving = true;
let name = 'Geeks';

isLeaving ? sayGoodbye(name) : sayHello(name);
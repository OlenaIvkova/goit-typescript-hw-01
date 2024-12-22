function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// Приклад 
const objA = { name: 'Alice', age: 25 };
const objB = { profession: 'Engineer', location: 'Ukraine' };

const result = merge(objA, objB);

console.log(result);
// Результат: { name: 'Alice', age: 25, profession: 'Engineer', location: 'Ukraine' }
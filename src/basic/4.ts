function showMessage(message: string): void {
    console.log(message);
}

showMessage('Hello, TypeScript!');

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(calc(10, 20));

function customError(): never {
  throw new Error('Error');
}

customError();
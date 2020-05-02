## Typescript

## :trophy: Overview
- The main advantage of types is type safety which means the compiler and the development supporting tools can catch potential problems in your application during development rather than running into exceptions at the runtime.

- TypeScript is a strongly typed superset of JavaScript. It is a compiled rather than an interpreted language; which means errors can be caught and fixed before the code runs. This is a huge advantage not found in JavaScript even to catch type mismatch issues which many times JavaScript fails to catch until the code is executed.

## Variable Declarations in TypeScript
- syntax
```
let variableName: variableType = value;
```
// or
```
let variableName: variableType;
```

## Classification of types in TypeScript
1. Basic or Primitive Types
boolean, number, string, array, tuple (tuple.ts), enum (enum.ts), null, undefined, any, void: exists purely to indicate the absence of a value, such as in a function with no return value.
2. Complex or Non-Primitive Types
class, interface

## Type assertions
- Type assertions have two forms. One is the "angle-bracket" syntax < >:
```
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```
- And the other is the as-syntax:
```
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```
The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed.

## complex types in TypeScript:
Interfaces (/interface), Class Types (/class), Function Types (/functions), Indexable Types (/indexable)
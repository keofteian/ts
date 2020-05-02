let mySquare = createSquare({color: "black"});

interface Point {
    readonly x: number;
    readonly y: number;
}
// You can construct a Point by assigning an object literal. After the assignment, x and y can't be changed.

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
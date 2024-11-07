// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// // Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

type Circle = {
    shape: string;
    radius: number;
}

type Rectangle = {
    shape: string;
    width: number;
    height: number
}
type Area = Circle | Rectangle

const calculateShapeArea = (area: Circle | Rectangle) => {
    const circleArea = `Math.PI * ${area.radius} * ${area.radius}`
    const rectangleArea = rectangle.height * rectangle.width
    const circleAreaTwoFixed = circleArea.toFixed(2)
    const circleAreaInNumber = parseFloat(circleAreaTwoFixed)
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 })
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(circleArea);


type Circle = {
    shape: "circle";
    radius: number;
}

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number
}

const calculateShapeArea = (structure: Circle | Rectangle): number => {
    if (structure.shape === "circle") {
        const areaShapeOfCircle = Math.PI * structure.radius * structure.radius
        return parseFloat(areaShapeOfCircle.toFixed(2));
    }
    else if (structure.shape === "rectangle") {
        const areaOfRectangleShape = structure.height * structure.width
        return areaOfRectangleShape
    }
    else {
        throw new Error('Unkown shape')
    }

}



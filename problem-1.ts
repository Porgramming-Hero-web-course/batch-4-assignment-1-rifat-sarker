const sumArray = (arr: number[]): number => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        sum += element
    }
    return sum;
}

// const result = sumArray([4,1,35,5])
// console.log(result);


const sumArray = (arr: number[]): number => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        sum += element
    }
    return sum;
}


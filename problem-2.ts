const removeDuplicates = (arr: number[]) => {
    const uniqueElements: number[] = []
    arr.map((element, index) => {
        if (arr.indexOf(element) === index) {
            uniqueElements.push(element)
        }
    })
    return uniqueElements

}
// const result = removeDuplicates([12, 4, 5, 21, 3, 4, 4, 5, 1])
// console.log(result);

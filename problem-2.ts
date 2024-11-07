const removeDuplicates = (arr: number[]) => {
    const uniqueElements: number[] = []
    arr.map((element, index) => {
        if (arr.indexOf(element) === index) {
            uniqueElements.push(element)
        }
    })
    return uniqueElements

}


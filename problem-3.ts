const countWordOccurrences = (sentences: string, word: string) => {
    let count: number = 0
    let allWord = sentences.toLowerCase().split(" ")
    const inputWord = word.toLowerCase()
    for (let i = 0; i < allWord.length; i++) {
        const EachWord = allWord[i]
        if (EachWord == inputWord) {
            count++
        }
    }
    return count

}


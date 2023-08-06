function solution(phone_book) {
    const book = phone_book.map(phone_number => phone_number.replace(/[^\d]/g, '')).sort()
    for (let i = 0; i < book.length - 1; i++) {
        const number = book[i]
        const next = book[i+1]
        if (next.slice(0, number.length) === number) return false
    }
    return true
}
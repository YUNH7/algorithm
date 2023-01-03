function solution(A, B) {
    let numCase = [A]
    let changeA = A
    
    for (let i = 0; i< A.length; i++) {
        changeA = changeA[changeA.length-1] + changeA.slice(0, changeA.length-1)
        numCase.push(changeA)
    }
    
    return numCase.indexOf(B)

}
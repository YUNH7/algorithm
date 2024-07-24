function solution(A, B) {
    if (A === B) return 0;
    const index = A.repeat(2).lastIndexOf(B);
    return index === -1 ? -1 : A.length - index;
}
function solution(sides) {
    const [first, second, third] = sides.sort((a,b) => a - b);
    return first + second > third ? 1 : 2;
}
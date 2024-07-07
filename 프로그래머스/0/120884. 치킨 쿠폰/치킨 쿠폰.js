function solution(chicken) {
    let result = 0;
    while (chicken >= 10) {
        const service = Math.floor(chicken / 10);
        result += service;
        chicken = chicken % 10 + service;
    }
    return result
}
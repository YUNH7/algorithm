function solution(picture, k) {
    return picture.map(el => new Array(k).fill(el.split('').map(c => c.repeat(k)).join(''))).flat();
}
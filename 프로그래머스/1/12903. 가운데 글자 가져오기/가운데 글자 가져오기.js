function solution(s) {
    const half = s.length / 2;
    return s.length % 2 ? s[Math.floor(half)] : s.slice(half-1, half+1);
}
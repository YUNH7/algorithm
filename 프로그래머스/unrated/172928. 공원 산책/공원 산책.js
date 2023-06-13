function solution(park, routes) { // 공원 S 시작, O 이동 가능, X 장애물, 봇멍 경로
    const now = [0, 0]; // 시작점 찾기
    for (let i = 0; i < park.length; i++) {
        if (park[i].includes('S')) {
            now[0] = i;
            now[1] = park[i].indexOf('S');
            break;
        }
    }
    
    const dir = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1]
    }
    const xLen = park[0].length;
    const yLen = park.length;    
    const move = (direct, num, y, x) => {
        if (num === 0) return [y, x];
        
        y += dir[direct][0]
        x += dir[direct][1]
        // 장애물이 있거나, 공원을 벗어나면 해당 명령 무시
        if (y >= yLen || y < 0 || x >= xLen || x < 0 || park[y][x] === 'X') return;
        return move(direct, num-1, y, x)
    }
    
    return routes.reduce((a, route) => {
        const [direct, n] = route.split(' ');
        const result = move(direct, +n, now[0], now[1])
        if (result) now[0] = result[0], now[1] = result[1]
        return now
    }, now)    
}
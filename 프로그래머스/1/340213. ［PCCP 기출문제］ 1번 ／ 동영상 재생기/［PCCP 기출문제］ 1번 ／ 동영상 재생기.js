function solution(len, pos, op_start, op_end, commands) {
    const convertSec = (str) => {
        const [m, s] = str.split(':');
        return +m * 60 + +s;
    }
    const [opStart, opEnd] = [op_start, op_end].map(str => convertSec(str));
    const skipOp = (sec) => opStart <= sec && sec <= opEnd ? opEnd : sec;
    
    const end = convertSec(len);
    const result = commands.reduce((a, c) => {
        let now = a;
        if (c === 'prev') now = now - 10 < 0 ? 0 : now - 10;
        else now = now + 10 > end ? end : now + 10;        
        return skipOp(now);
    }, skipOp(convertSec(pos)));
    
    const formatTime = (sec) => [Math.floor(sec / 60), sec % 60].map(n => `${n}`.padStart(2, '0')).join(':');
    return formatTime(result);
}
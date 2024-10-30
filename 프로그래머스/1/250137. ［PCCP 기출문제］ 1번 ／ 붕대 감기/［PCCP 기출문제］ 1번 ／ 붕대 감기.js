function solution([t, x, y], health, attacks) {
    return attacks.reduce((a, [sec, damage], i, arr) => {
        if (a < 0) return a;
        
        const [prevSec] = arr[i-1] || [0];
        const seconds = sec - prevSec - 1;
        const heal = seconds * x;
        const bonus = Math.floor(seconds / t) * y
        let nowHP = a + heal + bonus;        
        if (nowHP > health) nowHP = health;
        nowHP -= damage;
        return nowHP > 0 ? nowHP : -1;
    }, health);
}
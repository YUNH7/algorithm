function solution(bandage, health, attacks) { 
    // [시전 시간, 초당 회복량, 추가 회복량], 최대 체력, [몬스터 공격시간, 피해량]
    // 붕대 감기
    // t초 동안 1초마다 x만큼 체력 회복
    // t초를 연속으로 붕대 감기에 성공한다면 y만큼 체력 추가 회복
    // 최대 체력 초과 불가
    // 몬스터에게 공격 당하면 기술 취소, 피해량만큼 체력 소모, 연속 성공 시간 0으로 초기화
    // 체력이 0이 되면 캐릭터 사망
    // 공격 끝난 후 남은 체력 || -1
    const [t, x, y] = bandage;
    return attacks.reduce((acc, [time, damage], i) => {
        if (acc < 0) return -1;
        const prevTime = i !== 0 ? attacks[i-1][0] : 0;
        const calcTime = time - prevTime - 1;
        if (calcTime !== 0) {
            acc += calcTime * x + Math.floor(calcTime / t) * y;
            if (acc > health) acc = health;
        }
        return acc - damage || -1;
    }, health);
}
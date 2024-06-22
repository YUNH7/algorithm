function solution(common) {
    const first = common[1] - common[0];
    const second = common[2] - common[1];
    const lastEl = common.at(-1);
    return first === second ? lastEl + first : lastEl * second / first;
}
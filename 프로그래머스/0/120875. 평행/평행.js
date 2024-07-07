function solution([base, ...dots]) {
    const calcSlope = (first, second) => (first[1]-second[1]) / (first[0]-second[0]);
    return dots.reduce((a, dot, i) => {
        if (a === 0) {
            const rest = [...dots];
            rest.splice(i, 1)
            const slope1 = calcSlope(base, dot);
            const slope2 = calcSlope(...rest);

            if (slope1 === slope2) return 1;
        } 
        return a;
    }, 0);
}
function solution([[baseX, baseY], ...rest]) {
    return rest.reduce((a, [x, y]) => baseX !== x && baseY !== y ? Math.abs(baseX - x) * Math.abs(baseY - y) : a, 1);
}
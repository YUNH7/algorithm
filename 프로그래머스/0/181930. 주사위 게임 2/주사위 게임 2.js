function solution(...nums) {
    const dif = new Set(nums).size;
    return new Array(dif === 3 ? 1 : dif === 2 ? 2 : 3).fill(0)
        .reduce((a, c, i) => a * nums.reduce((a, c) => a + c**(i+1), 0), 1);
}

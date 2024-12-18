function solution(nums) {
    const type = new Set(nums);
    return Math.min(type.size, nums.length / 2);
}
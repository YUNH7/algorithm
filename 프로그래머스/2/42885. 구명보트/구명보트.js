function solution(people, limit) {
    people.sort((a, b) => a - b);
    let start = 0, end = people.length - 1, result = 0;
    while (start <= end) {        
        if (people[start] + people[end] <= limit) start++;
        
        end--;
        result++;
    }
    return result;
}
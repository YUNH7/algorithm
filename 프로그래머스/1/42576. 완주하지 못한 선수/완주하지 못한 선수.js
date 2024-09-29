function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.find((el, i) => el !== completion[i]);
}
function solution(participant, completion) { // 참여 선수 배열, 완주한 선수 배열
    participant.sort()
    completion.sort()
    for (let i = 0; i <= participant.length; i++) {
        if (participant[i] !== completion[i]) return participant[i]
    }
}
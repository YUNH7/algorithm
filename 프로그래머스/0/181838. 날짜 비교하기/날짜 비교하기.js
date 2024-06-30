function solution(date1, date2) {
    return Number(new Date(...date1) < new Date(...date2));
}
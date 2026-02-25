function solution(schedules, timelogs, startday) {
    return schedules.reduce((a, schedule, idx) => {
        const h = Math.floor(schedule/100);
        const m = schedule - h * 100;
        const plusMinute = m + 10;
        const formattedTime = plusMinute >= 60 ? +`${h+1}${String(plusMinute-60).padStart(2, '0')}`: schedule + 10;
        
        return timelogs[idx].every((timelog, i) => {
            const date = (startday + i) % 7;
            if (date === 0 || date === 6) return true;
            
            return formattedTime >= timelog
        }) ? a + 1 : a
    }, 0);
}
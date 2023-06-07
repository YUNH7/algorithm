function solution(id_list, report, k) { // 이용자 아이디, "이용자id 신고한id", 정지 기준
    
    // 누가 누구에게 신고당했는지
    const reportedUser = report.reduce((a, c) => {
        const [reporter, reported] = c.split(' ')
        if (!a[reported]) a[reported] = []
        a[reported].push(reporter)
        
        return a
    }, {})
    
    const mailCnt = {}
    for (let user in reportedUser) {
        // 중복 제거
        reportedUser[user] = [...new Set(reportedUser[user])] 
        // 메일 수 세기
        if (reportedUser[user].length >= k) 
            reportedUser[user].forEach(u => mailCnt[u] = (mailCnt[u] || 0) + 1)
    }
    // 유저 이름을 메일 수로 대체
    return id_list.map(id => mailCnt[id] || 0)
}
function solution(new_id) { // 입력한 아이디와 유사하면서 규칙에 맞는 아이디 추천
    // 3자 이상 15자 이하
    // 알파벳 소문자, 숫자, -, _, .만 사용 가능
    // .은 중간에만 가능, 연속 불가
    
    let result = new_id.toLowerCase()
    .replace(/[^\w\-\.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '')
    
    let len = result.length
    return len <= 2 ? result + result.slice(len - 1).repeat(3 - len) : result
}
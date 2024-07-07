function solution([id, pw], db) {
    const [_, userPw] = db.find((user) => user[0] === id) || [];
    return userPw ? userPw === pw ? 'login' : 'wrong pw' : 'fail';
}
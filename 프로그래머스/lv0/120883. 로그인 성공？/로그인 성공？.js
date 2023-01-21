function solution(id_pw, db) { 
    for (let member of db) {
        if (member[0] === id_pw[0]) {
            if (member[1] === id_pw[1]) {
                return "login"
            } else {
                return "wrong pw"
            }
        }
    }
    return "fail"
}
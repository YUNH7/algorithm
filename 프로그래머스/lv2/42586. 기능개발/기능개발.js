function solution(progresses, speeds) {
    const result = []    
    for (let i = 0; i < progresses.length; i++) {
        const mul = Math.ceil((100 - progresses[i])/speeds[i])
        for (let j = i; j < progresses.length; j++) progresses[j] += speeds[j]*mul
        
        for (let j = i; j < progresses.length; j++) {
            if (progresses[j+1] < 100 || !progresses[j+1]) {
                result.push(j-i+1)
                i = j        
                break
            }
        }
    }
    return result
}
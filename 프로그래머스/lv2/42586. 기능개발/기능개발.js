function solution(progresses, speeds) {
    const deployArr = progresses.map((progress, i) => Math.ceil((100 - progresses[i])/speeds[i]))
    let deploy = deployArr[0]
    
    const result = [0]
    for (let i = 0, nth = 0; i < deployArr.length; i++) {
        if (deployArr[i] <= deploy) result[nth]++
        else {
            nth++
            result[nth] = 1
            deploy = deployArr[i]
        }
    }
    return result
}
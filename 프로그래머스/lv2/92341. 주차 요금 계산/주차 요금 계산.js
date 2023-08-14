function solution(fees, records) {    
    const calcMinutes = (inTime, outTime) => {
        const [outHour, outMin] = outTime.split(':')
        const [inHour, inMin] = inTime.split(':') 
        return (+outHour - +inHour)*60 + +outMin - +inMin
    }
    const recordObj = records.reduce((a,c) => {
        const [t, n, io] = c.split(' ')
        if (!a[n]) a[n] = {time:0, input: t}
        else if (io === 'IN') a[n].input = t
        else {
            a[n].time += calcMinutes(a[n].input, t)
            a[n].input = null
        }
        return a
    }, {})
    
    const [baseTime, basePrice, unitTime, unitPrice] = fees;
    return Object.entries(recordObj).sort((a,b) => +a[0] - +b[0]).map(([_,obj]) => {
        if (obj.input) obj.time += calcMinutes(obj.input, '23:59')
        obj.time -= baseTime
        return obj.time > 0 
        ? basePrice + Math.ceil(obj.time / unitTime) * unitPrice 
        : basePrice
    })
}
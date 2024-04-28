function solution(bridge_length, weight, truck_weights) {
    const bridge = new Array(bridge_length).fill(0);
    let time = 0;
    while(truck_weights.length) {
        time++
        bridge.shift()
        if (bridge.reduce((a,c) => a+c, 0) + truck_weights[0] <= weight)
            bridge.push(truck_weights.shift());
        else bridge.push(0);
    }
    return time + bridge_length;
}
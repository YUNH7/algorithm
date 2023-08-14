function solution(scoville, K) {    
    const heap = new Heap()
    scoville.forEach(s => heap.push(s))

    let result = 0
    while (heap.heap[1] < K) {
        if (heap.size() === 2) return -1
        result++
        const mix = heap.shift() + 2 * heap.shift()
        heap.push(mix)
    }
    return result
}

class Heap {
    constructor() {
        this.heap = [null]
    }
    
    size() {
        return this.heap.length
    }
    
    push(val) {
        this.heap.push(val);
        let curIdx = this.size() - 1;
        let midIdx = Math.floor(curIdx / 2);
        while (this.heap[curIdx] < this.heap[midIdx]) {
            [this.heap[curIdx], this.heap[midIdx]] = [this.heap[midIdx], this.heap[curIdx]];
            curIdx = midIdx;
            midIdx = Math.floor(curIdx / 2);
        }
    }
    
    shift() {
        if (this.size() === 1) return
        else if (this.size() === 2) {
            return this.heap.pop();
        }

        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
        let curIdx = 1;
        let [left, right] = [2 * curIdx, 2 * curIdx + 1];
        let nextIdx = this.heap[right] && this.heap[right] < this.heap[left] ? right : left;
        while (this.heap[curIdx] > this.heap[nextIdx]) {
            [this.heap[curIdx], this.heap[nextIdx]] = [this.heap[nextIdx], this.heap[curIdx]];
            curIdx = nextIdx;
            left = 2 * nextIdx;
            right = 2 * nextIdx + 1;
            nextIdx = this.heap[right] && this.heap[right] < this.heap[left] ? right : left;
        }
        return min;
    }
}
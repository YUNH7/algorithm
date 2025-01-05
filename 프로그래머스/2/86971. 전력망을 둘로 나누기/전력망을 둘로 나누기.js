function solution(n, wires) {
    const tree = new Array(n+1).fill(0).map(() => []);
    wires.forEach(([p, c]) => {
        tree[p].push(c);
        tree[c].push(p);        
    });

    const result = {};
    const size = new Set();
    const aux = (node, p) => {
        if (result[node]) return [];
        result[node] = new Set(tree[node]);
        result[node].add(node)
        for (let i = 0; i < tree[node].length; i++) {
            aux(tree[node][i], true).forEach(val => result[node].add(val));
        }
        size.add(result[node].size - Number(p));
        return [...result[node]];
    }
    
    aux(wires[0][0], false);
    return n - Math.max(...[...size].map(num => num <= Math.floor(n/2) ? num : n - num)) * 2;
}
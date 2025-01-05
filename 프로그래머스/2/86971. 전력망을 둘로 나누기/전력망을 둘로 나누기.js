function solution(n, wires) {
    const neighbor = new Array(n+1).fill(0).map(() => []);
    wires.forEach(([p, c]) => {
        neighbor[p].push(c);
        neighbor[c].push(p);        
    });

    const tree = {};
    const size = new Set();
    const aux = (node, p) => {
        if (tree[node]) return [];
        tree[node] = new Set(neighbor[node]);
        tree[node].add(node)
        for (let i = 0; i < neighbor[node].length; i++) {
            aux(neighbor[node][i], true).forEach(val => tree[node].add(val));
        }
        size.add(tree[node].size - Number(p));
        return [...tree[node]];
    }
    
    aux(wires[0][0], false);
    return n - Math.max(...[...size].map(num => num <= Math.floor(n/2) ? num : n - num)) * 2;
}
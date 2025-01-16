function solution(hp, dungeons) {
    const result = new Set();
    
    const aux = (hp, dungeons, n) => {
        result.add(n);
        if (dungeons.length === 0) return;
        
        for (let i = 0; i < dungeons.length; i++) {
            const [entry, damage] = dungeons[i];
            if (hp >= entry) {
                const newDungeons = [...dungeons];
                newDungeons.splice(i, 1);
                aux(hp - damage, newDungeons, n+1);
            }
        }
    }
    
    aux(hp, [...dungeons], 0);
    
    return Math.max(...result);
}
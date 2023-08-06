function solution(k, dungeons) {    
    const result = []
    const aux = (health, dungeons, n) => {
        if (!dungeons.length) result.push(n)
                
        for (let i = 0; i < dungeons.length; i++) {
            const copyDungeons = dungeons.slice()
            const [entry, exit] = copyDungeons.splice(i, 1)[0]
            if (health >= entry) aux(health - exit, copyDungeons, n+1)
            aux(health, copyDungeons, n)
        }
    }
    aux(k, dungeons, 0)
    return result.sort((a,b) => b-a)[0]
}
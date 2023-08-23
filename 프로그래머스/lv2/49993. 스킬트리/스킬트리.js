function solution(skill, skill_trees) {
    return skill_trees.reduce((acc, tree) => {
        let copiedSkill = skill
        for (let i = 0; i < tree.length; i++) {
            if (copiedSkill.includes(tree[i]))
                if (copiedSkill[0] === tree[i])
                    copiedSkill = copiedSkill.slice(1)
                else return acc
        }
        return ++acc
    }, 0)
}
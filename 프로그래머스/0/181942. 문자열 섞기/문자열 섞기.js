function solution(str1, str2) {
    return [...str1].map((c, i) => c + str2[i]).join('');
}
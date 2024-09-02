function solution(phone_number) {
    const n = phone_number.length - 4;
    return phone_number.replace(new RegExp(`\\d{${n}}`), '*'.repeat(n));
}
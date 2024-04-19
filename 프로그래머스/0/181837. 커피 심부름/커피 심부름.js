function solution(order) {
    return order.reduce((price, menu) => price + (menu.includes('cafelatte') ? 5000 : 4500), 0)
}
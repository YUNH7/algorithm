function solution(enroll, referral, seller, amount) {
    const account = seller.reduce((a, c, i) => {
        if (!a[c]) a[c] = [];
        a[c].push(amount[i] * 100);
        return a;
    }, {});
    
    for (let i = enroll.length -1; i >= 0; i--) {
        const priceArr = account[enroll[i]];
        if (priceArr) {
            const parent = account[referral[i]] || [];
            account[enroll[i]] = priceArr.map((price, idx) => {
                const result = Math.ceil(price * 0.9);
                const toParent = price - result;
                if (toParent) parent.push(toParent);
                return result;
            })
            account[referral[i]] = parent;
        }
    }
    return enroll.map(member => (account[member] || []).reduce((a, c) => a+c, 0));    
}

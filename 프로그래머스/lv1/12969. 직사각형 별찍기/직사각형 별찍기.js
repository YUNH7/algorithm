process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ");
    for (let row = 0; row < m; row++) {
        console.log('*'.repeat(n))
    }
});
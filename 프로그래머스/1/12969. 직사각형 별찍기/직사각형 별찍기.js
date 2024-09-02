process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ");
    console.log(new Array(+m).fill('*'.repeat(n)).join('\n'));
});
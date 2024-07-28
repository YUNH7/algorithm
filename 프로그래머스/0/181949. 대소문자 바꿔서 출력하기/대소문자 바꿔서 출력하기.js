const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const result = [...input[0]].map(c => c.toLowerCase() === c ? c.toUpperCase() : c.toLowerCase()).join('');
    console.log(result);
});
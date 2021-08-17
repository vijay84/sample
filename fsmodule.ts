const fs = require('fs');
// fs.readFile('Notes.txt', 'utf8', (err, data) => {
//     console.log('Data--', data);
// })

const da = fs.readFileSync('Notes.txt');
console.log('File content is', da.toString());

console.log('Yes it is working!!');


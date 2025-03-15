const fs = require('fs');

// this is the blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}./nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut );
// console.log('file written!');

// this is the non-blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
   console.log(data2)
  });
});
console.log('will read file!');

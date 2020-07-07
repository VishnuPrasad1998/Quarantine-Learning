const fs = require('fs');
const path = require('path');

//Create Folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...');
// });

//Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hhhh hello!!!', {}, err => {
//     if(err) throw err;
//     console.log('File created and written...');

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'byebye!!!', {}, err => {
//         if(err) throw err;
//         console.log('File created and written...');
// });});

//Read File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

//Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hai.txt'), (err, data) => {
    if(err) throw err;
    console.log("File name changed");
});
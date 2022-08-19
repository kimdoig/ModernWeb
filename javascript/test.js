// console.log('Hello World~~!!!!');

// //var a = 1;
// //var b = 2;

// //var result = a + b;



// function add(x, y)
// {
//     var result;

//     result = x + y;

//     return result;

// };

// console.log(add(1, 2));


// 파일 읽기 동기시
// const fs = require('fs');
// var data = fs.readFileSync('c:/Temp/read.txt','utf-8');
// console.log(data);
// console.log('Done');




// 파일 읽기 비동기
function myCallback(err, data)
{
    if (err) return console.log(err);
 
    console.log(data);
};


const fs = require('fs');
fs.readFile('c:/Temp/read.txt','utf-8',myCallback);
console.log('Done');






















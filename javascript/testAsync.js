// 동기
// function run() 
// {
//   const start = Date.now();
//   for (let i = 0; i < 1000000000; i++) {}
//   const end = Date.now();
//   console.log(end - start + 'ms');
// }
 
// run();
// console.log('Done !!!');

// 비동기
// function run() 
// {
//   setTimeout(() => 
//   {
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) {}
//     const end = Date.now();
//     console.log(end - start + 'ms');
//   }, 1000);
// }
 
// run();
// console.log('Done !!!');

// 비동기_콜백
// function run(callback) 
// {
//   setTimeout(() => 
//   {
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) {}
//     const end = Date.now();
//     console.log(end - start + 'ms');
//     callback();
//   }, 1000);
// }
 
// run(() => 
// {
//   console.log('Done !!!');
// });

// 비동기 async
function run() 
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
}
 
async function process() {
    await run();
    await run();
    console.log('Done !!!');
}
 
process();
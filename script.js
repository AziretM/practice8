// 1
// function func(num){
//     return num + 10
// }
// const sum = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve(func(10));
//     }, 3000);
// })

// sum.then((value) => {
//     console.log(value);
// })


// 2


function func(num1, num2) {
    return num1 + num2
}
const sum = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(func(5,10))
    }, 5000)
})

sum.then((value) => {
    console.log(value);
})




function func(arr){
    arr.forEach((element, i) => {
        setTimeout(() => {
            console.log(`${i+1} элемент: ${element}`);
        }, 1000 * i)
    });
}
arr([1,2,3,4,5])
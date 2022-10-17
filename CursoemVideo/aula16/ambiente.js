// function calc(num) {
//     if (num % 2 == 0) {
//         return `O número ${num} é par`
//     } else {
//         return `O número ${num} é ímpar`
//     }
// }

// let res = calc(908)
// console.log(res)

// function fat(num) {
//     var res  = 1;
//     for (var i = num; i >= 1; i--) {
//         res *= i;
//     }
//     return res;
// }

// console.log(fat(30))

function fatorial(num) {
    if (num == 1) {
        return 1
    } else {
        return num * fatorial(num-1)
    }
}

console.log(fatorial(54))
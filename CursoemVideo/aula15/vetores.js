var num = [1, 5, 3, 7, 8]
num.sort()
// console.log(num.sort())

// for (var i = 0; i < num.length; i++) {
//     console.log(num[i])
// }

for (var key in num) {
    console.log(`A posição ${key} tem o valor ${num[key]}`)
}
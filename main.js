const numbers = [199, 206, 19, 26, 25, 28]

let index = 0
let sum = 0
do {
  //  sum = sum + numbers[index]
   sum+= numbers[index]
    console.log(sum)
    index++
} while (index < numbers.length)
console.log("el total es: ",sum)



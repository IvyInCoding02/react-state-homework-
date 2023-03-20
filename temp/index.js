// iteration - one(first) step of the loop
// map возвращает новый массив, выполняя функция для каждого элемента
const newArr = srr.map(function(item){
    return item + 1
})
console.log("Old array", arr)
console.log("New array", newArr)


// arr.filter(num => num > 30)
const filteredArr = arr.filter(function(item){
    return item > 30 
})

console.log("filtered", filterArr)

const number = [10, 20, 30, 40, 50]
const newArr1 =[...numbers]

// rest
const [num1, num2, ...rest] = numbers 
console.log(num1) 
console.log(num2) 
console.log(nums) 
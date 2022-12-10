//2 вариант

//задание 1
// let ex = new Exam('Андрей', 'Ресетов ', 4, 5, 3)


//задание 2

//создание класса Toy
import { Toy } from "./Toy.js";


//создаем массив из объектов класса
let toys = [
    new Toy('Кукла барби', 4, 1400, 99, 'Британия'),
    new Toy('Фигурка Человека-паука', 16, 2350, 0, 'США'),
    new Toy('Игрушечный автомат', 9, 500, 99, 'Китай'),
    new Toy('Плюшевый мишка', 1, 500, 99, 'Китай')
]

//сортировка в порядке убывания
let toysDescending = toys.sort((a, b) => b.priceRub - a.priceRub)
toysDescending.forEach(item => console.log(item.toString()))

//игрушки для выбранного возраста
let forAge = ""
let age = 7
let ageToy = toys.filter(item => item.recAge <= age)
ageToy.forEach(item => forAge += `игрушка подходит под возраст ${age}: ${item}; <br>`)
document.querySelector("#forAge").innerHTML = forAge

//самые дешевые игрушки с указанием их количества
let min = 10000000000000000000000000000000
let count = 0
let forPrice = ""
toys.forEach(item => {
    if (item.priceRub < min) {
        min = item.priceRub
    }
})

toys.forEach(item => {
    if (item.priceRub == min) {
        count++
        forPrice += `cамая дешева игрушка: ${item}; <br>`
    }
})
document.querySelector("#forPrice").innerHTML = forPrice
document.querySelector("#count").innerHTML = `самых дешевых игрушек: ${count}`


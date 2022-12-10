//создаем класс Toy - 1 способ
// export class Toy {
//     constructor(name, recAge, priceRub, priceKopek, countryManufacturer) {
//     this.name = name
//     this.recAge = recAge
//     this.priceRub = priceRub
//     this.priceKopek = priceKopek
//     this.countryManufacturer = countryManufacturer
//     }

//     get fullPrice() {
//     return `Цена: ${this.priceRub}.${this.priceKopek}`
//     }

//     toString() {
//         return `${this.name} (${this.fullPrice} рублей), рек. возраст: ${this.recAge}+, изготовлена в: ${this.countryManufacturer}`
//         }
//     }


//создаем класс Toy - 2 способ
export function Toy(name, recAge, priceRub, priceKopek, countryManufacturer) {
    this.name = name
    this.recAge = recAge
    this.priceRub = priceRub
    this.priceKopek = priceKopek
    this.countryManufacturer = countryManufacturer
}

let toyMethods = {
    toString() {
        return ` ${this.name} (${this.fullPrice} рублей), рек. возраст: ${this.recAge}+, изготовлена в: ${this.countryManufacturer}`
    }
}
Object.assign(Toy.prototype, toyMethods)
Object.defineProperty(Toy.prototype, 'fullPrice', {
    get() {
        return `Цена: ${this.priceRub}.${this.priceKopek}`
    }
})

class Person {
    constructor(name) {
        this.name = name
    }
}

const alice = new Person('alice')
console.log(alice.name)
console.log(alice.__proto__)
console.log(Person.prototype)
console.log(alice.prototype)


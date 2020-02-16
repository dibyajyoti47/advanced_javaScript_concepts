const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) {
        return this.health += (num1 + num2);
    }
}

const archer = {
    name: 'Robin',
    health: 30
}
console.log(archer);
wizard.heal.call(archer, 10, 20);
console.log(archer);
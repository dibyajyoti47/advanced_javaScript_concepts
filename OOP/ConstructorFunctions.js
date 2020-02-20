function Elf (name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function () {
    return this.name +" is attacking with "+this.weapon;
}

const peter = new Elf ("Peter", "stones");
const sam = new Elf ("Sam", "Fire");

console.log(peter.attack());
console.log(sam.attack());
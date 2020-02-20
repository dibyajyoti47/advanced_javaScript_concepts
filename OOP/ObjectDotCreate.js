//prototypal inheritance with Object.create
const elfFunctions = {
    attack() {
        return 'attack with '+this.weapon;
    }
} 

function createElf (name, weapon) {
    let newElf = Object.create(elfFunctions);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const dj = createElf("DJ", "Stones");
const linku = createElf("Linku", "axe");

console.log(dj.attack());
console.log(linku.attack());

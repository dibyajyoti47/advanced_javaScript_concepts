const obj = {
    name: "Billy",
    sing() {
        console.log('a', this);
        var anaotherFunc = function () {
            console.log('b', this);
        }        
        anaotherFunc();
    }
}
obj.sing();
//a {name: "Billy", sing: ƒ}
// b Window {parent: Window, opener: null, top: Window, length: 4, frames: Window, …}


//to avoid problem 
const obj = {
    name: "Billy",
    sing() {
        console.log('a', this);
        var anaotherFunc = () => {
            console.log('b', this);
        }        
        anaotherFunc();
    }
}
obj.sing();
//a {name: "Billy", sing: ƒ}
// b {name: "Billy", sing: ƒ}
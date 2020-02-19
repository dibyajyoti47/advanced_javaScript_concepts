let view;

function initialize() {
    let called= 0;
    return () => {
        if (called > 0) {
            return;
        } else {
            view = "test"
            called++;
            console.log("View has been set !");
        }
    } 
}

let sds = initialize();
sds();
sds();
sds();
console.log(view);
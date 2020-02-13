console.log('1');
setTimeout(()=>{console.log('2')}, 1000);
console.log('3');



/////////////////////////////////

const list = new Array(6).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        removeItemsFromList();  //will lead to stackoverflow
        setTimeout(removeItemsFromList,0); //will solve the stack overflow problem
    }
};
 
removeItemsFromList();
list;
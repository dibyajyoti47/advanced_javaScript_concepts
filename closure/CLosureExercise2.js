const array = [1,2,3,4];

for (let i=0; i<array.length;i++) {
    setTimeout((index) =>{
        console.log(index);    
    },1000, i);
}
const recursiva = (num)=>{
    if(num==1){
        return 1;
    }
    return num + recursiva(num-1);
}

console.log(recursiva(10));
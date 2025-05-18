//somar numeros ate N
//Soma recursiva
function addNum(num) {
    if (num === 1) return num;
    return num + addNum(num - 1)
}

console.log(addNum(5));
   
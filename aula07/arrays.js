let fruitList = Array();

fruitList[0] = 'apple';
fruitList[1] = 'strawbarry';
fruitList[2] = 'orange';
fruitList['sweet'] = 'grape';
fruitList[4] = 'coconut';

console.table(fruitList);

fruitList.push('Watermelon'); //add at the last position
fruitList.unshift('strawbarry'); // add in the first position
console.table(fruitList);

fruitList.pop() // remove the last item
fruitList.shift()// remove the first item
console.table(fruitList);

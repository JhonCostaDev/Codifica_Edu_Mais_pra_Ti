// Given is an object obj each with two properties (name & category) of type String. Return the value of the property with the longer string. If both are of equal length, return the value of the name property.

function longerString(obj) {
    let listValues = Object.values(obj);

    if (listValues[0].length === listValues[1].length || listValues[0].length > listValues[1].length) {
        return listValues[0];
    } else  {
        return listValues[1];
    } 
}

let theGround =  {"name":"dirt","category":"alpha"}
//'alpha'

let theGround1 =  {"name":"stone","category":"alpha"}
//'stone'

let theGround2 =  {"name":"slush","category":"beta"}
//'slush'

let theGround3 =  {"name":"quartz","category":"gamma"}
//'quartz'

let theGround4 =  {"name":"water","category":"delta"}



const listObj = [theGround, theGround1, theGround2, theGround3, theGround4];

listObj.forEach((ground) => {console.log(longerString(ground))})
//console.log(longerString(theGround1));
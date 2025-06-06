// Record Collection
// You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

// The updateRecords function takes 4 arguments represented by the following function parameters:

//  * records - an object containing several individual albums
//  * id - a number representing a specific album in the records object
//  * prop - a string representing the name of the album’s property to update
//  * value - a string containing the information used to update the album’s property
// 
// Complete the function using the rules below to modify the object passed to the function.

//  * Your function must always return the entire records object.
//  * If value is an empty string, delete the given prop property from the album.
//  * If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
//  * If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
//  * If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// 
// Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.

const recordCollection = {
    2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
    artist: 'Robert Palmer',
    tracks: []
    },
    5439: {
    albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if(value === "") {
        delete records[id][prop];
    } else if(prop !== 'tracks' && value !== '') {
        records[id][prop] = value;
    } else if(prop === 'tracks' && value !== '' && !records[id].hasOwnProperty(prop)) {
        records[id][prop] = [value]; 
    } else if(prop === 'tracks' && value !== '') {
        records[id][prop].push(value);
    }
    
    return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"))
console.log(updateRecords(recordCollection, 2548, "tracks", ""));
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"))

// TESTS
// 1. After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
// Passed:2. After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
// Passed:3. After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
// Passed:4. After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
// Passed:5. After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
// Passed:6. After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
// Passed:7. After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide

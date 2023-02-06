/*
Javascript Objects Exercise
*/
​
/*
1. Write a method that verifies whether an argument is a plain object, not an array or null
It should return true for an object, and false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false
*/
​
const data = { a: 1 };
const data2 = [1, 2, 3];
console.log(checkObject(data));
console.log(checkObject(data2))
​
function checkObject(element) {
    if (typeof element == 'object') {
        return true;
    } else {
        return false;
    }
}
​
/*
2. Change the value of "room" to be correct in the courseInfo object
*/
​
let courseInfo = {
  name: 'HCDE 438',
  instructor: 'Hannah Twigg-Smith',
  room: 'SIEG 128'
};
​
//put your code here
courseInfo.room = 'SIEG 329'
console.log(courseInfo);
​
/*
3. Add a new key/value pair to the courseInfo object
*/
​
//put your code here
courseInfo['time']= '12:30'
console.log(courseInfo);
​
​
/*
4. Iterate over the courseInfo object and print the key/value pairs
*/
​
//put your code here
for (let key in courseInfo) {
    console.log(`${key}: ${courseInfo[key]}`);
}
​
/*
5. Delete a key/value pair in the courseInfo object
*/
​
//put your code here
console.log(courseInfo);
​
/*
6. Iterate through an array of objects and print each object (in this case the objects are coordinate positions)
*/
​
let positions = [
    {x: 200, y: 100},
    {x: 200, y: 200},
    {x: 200, y: 300}
];
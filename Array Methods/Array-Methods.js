/* 
Array.at()
The at() method takes an integer value and returns the item at that index,
 allowing for positive and negative integers. Negative integers count back from
  the last item in the array
*/
let array=[25,30,15,2,174,90]

console.log(array.at(2)) 
/* 
expected result 15
*/
console.log(array.at(-2))
/* 
expected result 174
*/

/* Concat
The concat() method is used to merge two or more arrays. This method does not 
change the existing arrays, but instead returns a new array
*/
const alphabet1=["a","b","c","d"];
const alphabet2=["e","f","g","h"];
const alphabet3=alphabet1.concat(alphabet2)

console.log(alphabet3);


/* copywithin
The copyWithin() method shallow copies part of an array to another
 location in the same array and returns it without modifying its length.
*/
const alphabet4=["a","b","c","d","e"];
console.log(alphabet4.copyWithin(1,2,3))

/* entries
The entries() method returns a new Array Iterator object that contains
 the key/value pairs for each index in the array
*/
const alphabet5=["a","b","c","d"];
const executedArray=alphabet5.entries()

console.log(executedArray.next().value)

/* Fill
The fill() method changes all elements in an array to a static value, 
from a start index (default 0) to an end index (default array.length). 
It returns the modified array
*/

const numArray1=[2,5,6,9,3,4,9]
/* // Fill with 8 from position 3 to 5 */
console.log(numArray1.fill(7,3,6))
//console.log(numArray1.fill(8, 4, 6));

/* Filter
The filter() method creates a shallow copy of a portion of a given array,
filtered down to just the elements from the given array that pass 
the test implemented by the provided function
*/

const names=["dress","cheppals","shoes","mobiles","watches"];
const result=names.filter(names=>names.length<6);

console.log(result);


/* Find
The find() method returns the first element in the provided array that 
satisfies the provided testing function. If no values satisfy the testing 
function, undefined is returned
*/
const numArray2=[7,2,5,6,9,3,4,7,19];
const numresult=numArray2.find(numArray2=>numArray2>8);
console.log(numresult);

/* Findlast
The findLast() method iterates the array in reverse order and returns the 
value of the first element that satisfies the provided testing function. 
If no elements satisfy the testing function, undefined is returned.
*/
const numArray3=[2,5,6,9,3,4,7,19];
const numresult1=numArray3.findLast(numArray3=>numArray3>8);
console.log(numresult1);

/*findIndex
The findIndex() method returns the index of the first element in an array that 
satisfies the provided testing function. If no elements satisfy the testing 
function, -1 is returned.
*/
const numArray4=[8,7,6,1,3,4,7,19];
const large_num=numArray4.findIndex((numArray4=>numArray4>9))
console.log(large_num);

/*findLastIndex
The findLastIndex() method iterates the array in reverse order 
and returns the index of the first element that satisfies the provided testing 
function. If no elements satisfy the testing function, -1 is returned
*/

/* flat
The flat() method creates a new array with all sub-array elements concatenated 
into it recursively up to the specified depth.
*/
const arr1 = ["America","India",["Tamilnadu","Chennai"]];

console.log(arr1.flat())


/* flatMap() 
This method returns a new array formed by applying a given callback 
function to each element of the array, and then flattening the result by one 
level. It is identical to a map() followed by a flat() of depth 1 
(arr.map(...args).flat()), but slightly more efficient than calling those two
 methods separately
*/

const arr2 = ["furniture",["table","cot","shofa"],"laptp",["Dell","HP"]];

const flattened = arr2.flatMap(num => num);

console.log(flattened);

/*Includes
The includes() method determines whether an array includes a certain value 
among its entries, returning true or false as appropriate
*/
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('bat'));

/*indexOf
The indexOf() method returns the first index at which a given element can be 
found in the array, or -1 if it is not present.
*/
const pets1 = ['cat', 'dog', 'bat'];
console.log(pets1.indexOf('dog'));

/*lastIndexOf
The lastIndexOf() method returns the last index at which a given element 
can be found in the array, or -1 if it is not present. The array is searched 
backwards, starting at fromIndex*/

const animals = ["tiger", "lion", "elaphant","tiger","elaphant"];
console.log(animals.lastIndexOf('tiger'));

/* Join
The join() method creates and returns a new string by concatenating all 
of the elements in an array.
*/
const universe= ['Fire', 'Air', 'Water'];
console.log(universe.join("-"));

const mycolor=["Red", "Green", "White", "Black"]
console.log(mycolor.join("+"))
//// Expected output: Red+Green+White+Black

/* map
The map() method creates a new array populated with the results of
 calling a provided function on every element in the calling array
*/

const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);

/*of
The Array.of() static method creates a new Array instance from a 
variable number of arguments, regardless of number or type of the arguments
*/
console.log(Array.of(3,"letter",4,5,"word"))

/*Pop
The pop() method removes the last element from an array and returns 
that element. This method changes the length of the array
*/
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
console.log(plants);
// Expected output: "tomato"

/* Push
The push() method adds one or more elements to the end of an array 
and returns the new length of the array.
*/
const fruits1=["apple","orange","banana","gouva","mango"]
console.log(fruits1.push("lemon"));
// Expected output: 5

/*Reverse
The reverse() method reverses an array in place and returns the
 reference to the same array, the first array element now becoming the last, 
 and the last array element becoming the first. 
*/
const tvbrands=["samsung","LG","onida","videocon","BPL"]
console.log(tvbrands.reverse())

/* Shift
The shift() method removes the first element from an array and returns that 
removed element. This method changes the length of the array
*/

const tvbrands1=["BPL","videocon","onida","LG","samsung"]
console.log(tvbrands1.shift())
console.log(tvbrands1)

/*slice
The slice() method returns a shallow copy of a portion of an array into a new 
array object selected from start to end (end not included) where start and end 
represent the index of items in that array. The original array will not be .
modified
*/

const animals3 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals3.slice(2,4));
console.log(animals3);

/* some
The some() method tests whether at least one element in the array passes the 
test implemented by the provided function. It returns true if, in the array, 
it finds an element for which the provided function returns true; otherwise 
it returns false. It doesn't modify the array
*/

/* Every
The every() method tests whether all elements in the array pass the test 
implemented by the provided function. It returns a Boolean value
*/
const numArray5=[1,2,3,4,5];

const even=(myeven)=> myeven%2==0;
console.log(arr1.some(even))
console.log(arr1.every(even))

/* sort
The sort() method sorts the elements of an array in place and returns 
the reference to the same array, now sorted. The default sort order is 
ascending, built upon converting the elements into strings, then comparing 
their sequences of UTF-16 code units value
*/
const months = ['March', 'Jan', 'Feb', 'Dec'];

console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array6 = [1, 30, 4, 21, 100000];
console.log(array6);
// Expected output: Array [1, 100000, 21, 30, 4]


const sortNums= [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

let sortResult=sortNums.sort((a,b)=>(a-b));
console.log(sortResult);
// Expected output: Array [-4,-3,1,2,3,5,6,7,8]

/* splice
The splice() method changes the contents of an array by removing or replacing
 existing elements and/or adding new elements in place. To access part of an
  array without modifying it, see slice()
*/
const months1 = ['Jan', 'March', 'April', 'June'];
months.splice(1, 2, 'Feb');
// Inserts at index 1
console.log(months1);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months1.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months1);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
console.log(months1);

/*Unshift
The unshift() method adds one or more elements to the beginning of
 an array and returns the new length of the array.
*/
const array7 = [1, 2, 3];

console.log(array7.unshift(4, 5));
// Expected output: 5

console.log(array7);
// Expected output: Array [4, 5, 1, 2, 3]

/* Values
The values() method returns a new array iterator object that 
iterates the value of each item in the array
*/
const array8 = ['a', 'b', 'c'];
const iterator = array8.values();
console.log(iterator);
for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const string="The Quick Brown Fox";
let strToArr=string.split(" ");//["The","Quick" ,"Brown","Fox"]

const convertCase=strToArr.map(element=>element.charAt(0).toLowerCase()+
element.slice(1).toUpperCase());
const arrToStr=convertCase.join(" ");
  console.log(arrToStr);
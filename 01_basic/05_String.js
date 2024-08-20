// string declaration 1
const name="abc";
const age=25;

//console.log(`name is ${name} and ang is ${age}`);

// string declartion 2
const gameName=new String('Mahank-a-r-mahai');
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('3'));
// console.log(gameName.indexOf('a'))

//onst  newString=gameName.substring(0,2);
//console.log(newString);

// const anotherString=gameName.slice(-8,2);
// console.log(anotherString);


// const newSAtringOne="  apjkalam   ";
// console.log(newSAtringOne);
// console.log(newSAtringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))
// console.log(url.includes('hitesh'));

// console.log(gameName.split('-'));


// const array1 = [5, 12, 8, 130, 44];

// let index = 2;

// console.log(`An index of ${index} returns ${array1.at(index)}`);
// // Expected output: "An index of 2 returns 8"

// index = -2;

// console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"

//--------------------
//String() constructor
//The String() constructor creates String objects. When called as a function, it returns primitive values of type String.


//String.fromCharCode()
//The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.

//console.log(String.fromCharCode(298,23,190,190));

//String.fromCodePoint()
//The String.fromCodePoint() static method returns a string created from the specified sequence of code points.

//console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"

//String.raw()
//The String.raw() static method is a tag function of template literals. This is similar to the r prefix in Python, or the @ prefix in C# for string literals. It's used to get the raw string form of template literals — that is, substitutions (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.

//Try it

//const filePath=String.raw`c://dev/abc/asd/cd`;
//console.log(`output:${filePath}`);
// Expected output: "output:c://dev/abc/asd/cd"


//---instance methods

  //String.prototype.anchor()  -->no long term spport


//String.prototype.at()
//The at() method of String values takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.


//const sentence = 'The quick brown fox jumps over the lazy dog.';

//let index = 5;

//console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

//index = -4;

//console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

//String.prototype.big()  ---no support

//String.prototype.blink()



// const contentString = "Hello, world";

// const newsd = document.body.innerHTML = contentString.blink();
// console.log(newsd)

//String.prototype.bold()   ==>no long suppot Deprecated   

// const icons='☃★♲';
// console.log(icons.codePointAt(1));
// Expected output: "9733"


//String.prototype.endsWith()

// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!'));
// // Expected output: true

// console.log(str1.endsWith('best', 17));
// console.log(str1.indexOf('b'))


// // Expected output: true

// const str2 = 'Is this a question?';

// console.log(str2.endsWith('question'));
// Expected output: false

// String.prototype.isWellFormed()
// The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.


// const illFormed = "https://example.com/search?q=\uD800";

// try {
//   encodeURI(illFormed);
// } catch (e) {
//   console.log(e); // URIError: URI malformed
// }

// if (illFormed.isWellFormed()) {
//   console.log(encodeURI(illFormed));
// } else {
//   console.warn("Ill-formed strings encountered."); // Ill-formed strings encountered.
//}


// String.prototype.lastIndexOf()

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const searchTerm = 'dog';

// console.log(
//   `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
// );
// Expected output: "Index of the last "dog" is 38"


// String.prototype.localeCompare()
// The localeCompare() method of String values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order. In implementations with Intl.Collator API support, this method simply calls Intl.Collator.

// When comparing large numbers of strings, such as in sorting large arrays, it is better to create an Intl.Collator object and use the function provided by its compare() method.

// Try it
const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(b.localeCompare(a));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0


///-match---------\











// console.log('ammar')

// function getLaptop (make, model, year) {
//   return {
//     sayModel () {
//       return year
//     },
//     make,
//     model,
//     year
//   }
// }

// console.log(getLaptop('Apple', 'MacBook', '2015').sayModel())

// var name = "make";
// const laptop = {
//     [name]:"Apple"
// }

// console.log(laptop.make)

// var name = 'make'
// var i = 0
// const laptop = {
//   [name + i++]: 'Apple',
//   [name + ++i]: 'Dell',
//   [name + ++i]: 'HP'
// }

// console.log(laptop.make1)
// console.log(laptop.make2)
// console.log(laptop.make3)

// Error = object distructuring use ()
// let person = {name:"Sarah",country:"Nigeria",job:"Developer"}
// let name, country,job
//  {name,country,job} = person;

// console.log(country)

// let person = {name:"Sarah",country:"Nigeria",job:"Developer"}
// let name, country,job
//  ({name,country,job} = person);
// console.log(country)

// var prop = 'name'

// var { [prop]: foo } = { name: 'Sarah', country: 'Nigeria' }
// console.log(foo)

// var person = {name:'Sarah',country:'Nigeria',job:'Developer',friends:["Annie","Becky"]}

// var {name,friends , ...others} = person;

// console.log(name)
// console.log(friends);
// console.log(others)

// Object destructuring and functions

// function person({name:x,job:y}={}){
//     console.log(x)
// }

// person({name:'ammar'})

// let a , b;

// [a,b] = ['ammar','arbaz']
// console.log(a)

// const iterable = ['mini','mani','mo'];

// for(const value of iterable){
//     console.log(value)
// }

// const iterable = new Map([['one',1],['two',2]]);

// for(const [key,value] of iterable){
//     console.log(`key:${key} and Value: ${value}`)
// }

// const iterable = new Set([1,2,3,1,3,1,1]);
// for(const value of iterable){
//     console.log(value)
// }

// const iterable = 'javascript';
// for(const iter of iterable){
//     console.log(iter)
// }
// argument object
// function args () {
//   for (const arg of arguments) {
//     console.log(arg)
//   }
// }

// args('a', 'b', 'c')



// Generators are functions which can be exited and later re-entered.


// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;

// }

// for( const g of generator()){
//     console.log(g)
// }

// Closing Iterators
// break, continue, return and throw

// const iterable = ['mini','mani','mo']
// for(const value of iterable){
//     console.log(value)
//     break
// }



//Plain object are not iterable
// const obj = {length:2,0:'ammar',1:'ashfaq'}

// const arr = Array.from(obj)// from() convert into array and it has one property length which is index
// for(const value of arr){
//     console.log(value)
// }
// The Array.from() method creates a new Array instance from an array-like or iterable object.


// For...in doesn't only enumerate the array declaration above, it also looks for inherited non-enumerable properties from the constructor's prototype

// For...of is more specific to collections such as arrays and object but doesn't include all objects.

//use case for arrow functions is array manipulation and the like. It’s common that you’ll need to map or reduce an array.
// const smartPhones = [
//     { name:'iphone', price:649 },
//     { name:'Galaxy S6', price:576 },
//     { name:'Galaxy Note 5', price:489 }
//   ];
// const prices = smartPhones.map((smartPhones,key)=>
// {
//     return(
//     smartPhones.key,
// smartPhones.price)})

// console.log(prices)

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const divisibleByThrreeES6 = array.filter(v => v % 3 === 0);
// console.log(divisibleByThrreeES6)

// function createPerson(name,age){
// return{
//     name,
//     age
// }
// }

// console.log(createPerson('ammar',23))
// concise method syntax,
// var person = {
//     name:'Nicholas',
//     sayName(){
//         console.log(this.name)
//     }
// }

// console.log(person.sayName())

// var person = {};
// lastName = "last name";
// person["first name"] = "Ammar"
// person[lastName] = "Ashfaq"

// console.log(person["first name"])
// console.log(person[lastName])
// var suffix = " name"
// var person = {
//     ["first" + suffix]:"Ammar",
//     ["last" + suffix]:"Ashfaq"
// }

// console.log(person["last name"])

// console.log(+0 == -0)
// console.log(Object.is(+0,-0))
// let public ={

// }
// let crowd ={
//     name:'ammar',
//     lastName:'ashfaq',
//     age:23
// }
// function mixin(receiver,supplier){
//     Object.keys(supplier).forEach(function(key){
//         console.log(key)
//         receiver[key] = supplier[key]
//     })
//     return receiver
// }

// console.log(mixin(public,crowd))
// console.log(public)

// let person = {
//     getGreeting(){
//         return "Hello"
//     }
// }

// let dog = {
//     getGreeting(){
//         return "Woof"
//     }
// }

// let friend = Object.create(person);
// console.log(friend)
// console.log(friend.getGreeting());
// console.log(Object.getPrototypeOf(friend) === person)
// Object.setPrototypeOf(friend,dog);
// console.log(friend.getGreeting())



/* recursion */
// function pow(x,n){
//     if(n== 1){
//         return x;
//     }
//     else{
//         return x* pow(x,n-1);
//     }
// }

// alert(pow(2,3))


/* Symbol */

// let firstName = Symbol("first name");
// let person = {};

// person[firstName] = "Nicholes";
// console.log(person[firstName])
// console.log(firstName)


// console.log(typeof firstName)



// let firstName = Symbol("first name");
// let person = {
//     [firstName]:"Nicholas"
// };

// Object.defineProperty(person,firstName,{writable:false})
// let lastName = Symbol('last name');
// Object.defineProperties(person,{
//     [lastName]:{
//         value:"Zakas",
//         writable:false

//     }
// })

// console.log(person[firstName])
// console.log(person[lastName])


/* Uniquely identies the codebase in your application*/
// Symbol.for() find the global symbol registry
// let uid = Symbol.for("uid");

// let object = {};
// object[uid] = "12345";
// console.log(object[uid]);
// console.log(uid)
// console.log(Symbol.keyFor(uid))


// let uid = Symbol.for("uid");
// let object = {
//     [uid]:"12345"
// };

// let symbols = Object.getOwnPropertySymbols(object);
// console.log(symbols.length);
// console.log(symbols[0])
// console.log(object[symbols[0]])


/* iterator using es5*/
/* many programming languages iterate over data with a for loop which return the next collection of object using iterator in for loop*/

// function createIterator(items) {
//     var i = 0;

//     return {
//         next: function () {
//             var done = (i > items.length);
//             var value = !done ? items[i++] : undefined;
//             return {
//                 done: done,
//                 value: value
//             }

//         }
//     }

// }

// var iterator = createIterator([1,2,3]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

/*Generator function */

// function *createIterator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let iterator = createIterator();
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)

/* Generator with for loop*/

// function *createIterator(items) {
//     for (let i = 0; i < items.length; i++) {
//         yield items[i];
//     }
// }
// let iterator = createIterator([1,2,3])



// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

/* Yield through errors if it is not in the generator funnction*/


/* Iterables and for-of loops (an iterable is an object with a Symbol.iterator property)*/

/* for of loop */
// let values = [1,2,3];
// for(let num of values){
//     console.log(num)
// }

/* Accessing the Default iterator */
// let values = [1,2,3];
// let iterator = values[Symbol.iterator]();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

/* page 144 */





/* Built - in Iteratore */

// you can create your own iterator if only you require it is in class or object
//ES6 has three types of collection.arrays,mapsand sets

// let arr = [1,2,3,4,5,6];
// console.log(arr.entries((val)=>{
// return val
// }))
// entries return the key value pair
// values return the value 
// let colors = ["red","green","blue"];
// let tracking = new Set([1234,5678,9012]);
// let data = new Map();

// data.set("title","Understanding ECMASCRIPT 6");
// data.set("format","ebook");
// for(let entry of 
// colors.values()    
//     // colors.entries()
// ){
//     console.log(entry);

// }
// for(let entry of 
// tracking.values()    
//     // tracking.entries()
// ){
//     console.log(entry);
// }
// for(let entry of 
// data.values()    
//     // data.entries()
// ){
//     console.log(entry)
// }
// var message = "A 𠮷 B";
// // for (let i=0; i < message.length; i++) {
// //     console.log(message[i]);
// //    }

// for(let c of message){
//     console.log(c)
// }

// var divs = document.getElementsByTagName("div");

// for(let div of divs){
//     console.log(div.id)
// }



// let set = new Set([1,2,2,3,4,5,3,3]),
// array=[...set];
// console.log(array)

// let map = new Map([["name","Nicholas"],["age",25]]),
// array=[...map];
// console.log(array)
// let smallNumber = [1,2,3],
// bigNumbers = [100,101,102],
// allNumbers = [0,...smallNumber,...bigNumbers];

// console.log(allNumbers)


/* Passing arguments to iterator */
function *createIterator(){
    let first = yield 1;
    let second = yield first +2;
    yield second+3;
}
let iterator = createIterator();
console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.next(5));
console.log(iterator.next());

// const date = new Date();
// console.log(date.getTime());
// console.log(date.toLocaleTimeString());

const myMap = new Map();
myMap.set("name", "sardar").set("age", 32).set(5, 20);
console.log(myMap);

const age = Symbol("age")
const data = {
    name1:"sardar",
    lastName:"balnour",
    [age]:22,
}
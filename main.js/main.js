console.log("hello again i'm back =)))");

//unary operators
const value = "-5";
// console.log(+value);

//nullish coalescing operator
let name;
const num = 2;
// console.log(name ?? num);

const str = "slaw mama jian vaazt chona?";
// console.log(str.split(" "));
// console.log(str.length);

//template literals
// console.log(`${str} qurbant bm kaka jian!`);

const array = ["ali", "mamad", "asqar", "ahmad"];
array.push("sardar");
array.splice(0, 1, "sard");
console.log(array);
// console.log(array);

const array2 = [];
array2.push("fdbal");
array2.push("baskitbal");
array2.push("valibal");
array2.push("moz");
const stringSports = array2.join();
console.log(`my favorite sports are ${stringSports}`);
const lastIndex = array2.length - 1;
array2.splice(lastIndex);
const firstTwoSports = array2.slice(0, 2);
console.log(firstTwoSports);
console.log(array2);
array2.splice(0, 2, firstTwoSports);
console.log(array2);

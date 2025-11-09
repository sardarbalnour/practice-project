// const length = 5;
// for (let i = 1; i <= length; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += j + " ";
//   }
//   console.log(str);
// }

// const arr = [2, 4, 4, 5, 9, 2, 8];
// const unique = [];
// const duplicate = [];
// //just unique values
// for (let i = 0; i < arr.length; i++) {
//   if (unique.indexOf(arr[i]) === -1) {
//     unique.push(arr[i]);
//   }
// }
// console.log(unique);
// //duplicate values
// for (let i = 0; i <= arr.length; i++) {
//   for (let j = i + 1; j <= arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       if (!duplicate.includes(arr[i])) {
//         duplicate.push(arr[i]);
//       }
//     }
//   }
// }
// console.log(duplicate);

// const sum = () => {};
// const showMessage = (text) => console.log(`the result is ${text}`);
// function sum(num1, num2, callback) {
//   const sum = num1 + num2;
//   const result = sum ** 2;
//   callback(result)
// }
// sum(2,2,showMessage)
// const names = ["ali", "mmd", "sardar"];
// names.forEach((item, index) => {
//   console.log(item);
//   item.toUpperCase();
// });
// console.log(names);
// const newNames = names.map((item) => item.toUpperCase());
// console.log(newNames);
const data = {
  firstName: "sardar",
  lastName: "balnour",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(string) {
    this.firstName = string.split(" ")[0];
    this.lastName = string.split(" ")[1];
    console.log(this.firstName);
  },
};
data.fullName = "mama jian";
console.log(data);

// const length = 5;
// for (let i = 1; i <= length; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += j + " ";
//   }
//   console.log(str);
// }

const arr = [2, 4, 4, 5, 9, 2, 8];
const unique = [];
const duplicate = [];
//just unique values
for (let i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
    unique.push(arr[i]);
  }
}
console.log(unique);
//duplicate values
for (let i = 0; i <= arr.length; i++) {
  for (let j = i + 1; j <= arr.length; j++) {
    if (arr[i] === arr[j]) {
      if (!duplicate.includes(arr[i])) {
        duplicate.push(arr[i]);
      }
    }
  }
}
console.log(duplicate);

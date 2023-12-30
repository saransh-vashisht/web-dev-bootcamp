// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// normal way so we do not have to return it will return directly

// const newNums = myNums.filter((num) => num > 4);


//  since we are using { } in arrow function it opens a new scope so we have to return the value by writing return to avoid getting undefined

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);


// solving using for each loop
const newNums =[]

myNums.forEach((num) =>{
  if (num>4) {
      newNums.push(num)     
  }
} )

console.log(newNums);
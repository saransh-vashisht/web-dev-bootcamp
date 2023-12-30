console.log("This is tutorial 53")
function greet(name, greetText){
    let name1="Name1";
    console.log(greetText +" "+ name);

    console.log(name +" is a good boy");
}
function sum(a,b,c){
    let d= a+b+c;
    return d;
    // This line will never execute(Unrecheable code)
    // console.log("Function is returned");

}
let name= "Harry";
let name1= "saransh";
let name2= "kage";
let name3= "tanny";
let greetText="Good Morning";

greet(name, greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
// let returnVal=greet(name3);
// console.log(returnVal);
let returnVal=sum(1,2,3);
console.log(returnVal);

// can use a function to avoid repeated steps

// console.log(name +" is a good boy");
// console.log(name1 +" is a good boy");
// console.log(name2 +" is a good boy");
// console.log(name3 +" is a good boy");

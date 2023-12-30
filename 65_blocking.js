// Synchronous or blocking
// line by line execution

// Asynchronous or non-blocking
// -line by line execution not guranteed
// -callbacks will Fire 

const fs=require("fs");
fs.readFile("dede.txt", "utf-8", (error,data)=>{
    console.log(error,data);
});
console.log("This is a message");
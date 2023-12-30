const fs=require("fs");
let text=fs.readFileSync("dele.txt", "utf-8");
text=text.replace("Bootstrap","Rohan");
// to replace text

console.log("The content of the file is")
console.log(text);

console.log("Creating New File.....");

fs.writeFileSync("Rohan.txt", text);
// to write in new files
// module are of three types- built in , user created and third party (npms)

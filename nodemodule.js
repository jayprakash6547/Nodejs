const fs=require("fs");
let text=fs.readFileSync("jay.txt","utf-8");

text=text.replace("Hello","hello");
console.log(text);


console.log("creating a new file");

fs.writeFileSync("Mangal.txt",text);

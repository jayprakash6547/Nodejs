// in this there is blocking and non-blocking or synchronous and asynchronous
//In non-synchronous this means that first read the 
//In blocking line by line execution and non-blocking line by line execution not guaranteed call backs will fire


const fs = require("fs");
fs.readFile("jay.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is a message");//this print first because this is a non-blocking execution in non-blocking when data read is delay then it jump another function
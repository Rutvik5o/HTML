const fs=require("fs");

let text=fs.readFileSync("delete.txt","utf-8");

text=text.replace("nothin","xyz");




console.log("Content of file is being read................")

console.log(text);


console.log("Creating new file....");
fs.writeFileSync("xyz.txt",text);


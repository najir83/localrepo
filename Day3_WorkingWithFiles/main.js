// const fs = require("fs")

// // console.log(fs);
// // write on file
// console.log('Creating File')

// fs.writeFile("tem.txt", "Hello My self  Sk Najir 333",()=>{
//     console.log('Done');
//     console.log('Start Reading');
//     fs.readFile("tem.txt",(error,data)=>{
//         console.log(error,data.toString());
        
//     })
    

// })


//path module
import path from "path"
let myPath="~//projects//backEnd//Day3_WorkingWithFiles//tem.txt"
console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));



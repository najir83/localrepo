import fs from "fs/promises"
let a = await fs.readFile("tem.txt")
console.log(a.toString());
fs.writeFile("tem.txt", "\n\nOMG OMG OMG");

let b = await fs.readFile("tem.txt")
console.log(b.toString());
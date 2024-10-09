
import fs from "fs/promises"
import fsn from "fs"
import path from "path"
let p = "//home//luca402//projects//backEnd//Day6_Exersize//demo_dir"
let a = await fs.readdir(p)
// console.log(a);
// console.log(fs);
for (const e of a) {
    let s = path.extname(e);
    let fl = s.slice(1, s.length);
    if (fsn.existsSync(path.join(p, fl))) {
        fs.rename(path.join(p, e), path.join(p, fl, e))

    }
    else {
        fs.mkdir(path.join(p, fl))
        fs.rename(path.join(p, e), path.join(p, fl, e))


    }


}

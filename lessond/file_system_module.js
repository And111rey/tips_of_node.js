const fs = require("fs");
const path = require("path");

// ASYNC CREATE ONE FOLDER
// fs.mkdirSync(path.resolve(__dirname, "folder"));
// ASYNC CREATE DIP FOLDERS
// fs.mkdirSync(path.resolve(__dirname, "folder2", 'folder_1', 'folder_2', 'folder_3'), { recursive: true });

// fs.rmdir( path.resolve(__dirname, 'folder'), (er) => {
//     console.log(er)
// })

// WRITE FIRL BY PROMISE

const data = "console.log('Hwllo world')\n";
const fileName = "somefile.js";
const filePath = path.resolve(__dirname, fileName);

const writeFileAsync = async (filePath, data,) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (er) => {
      if (er) {
        console.log("ERROR-> ", er);
        return reject(er);
      }
      resolve(data);
    });
  });
};
writeFileAsync(filePath, data).then((data) => {
    appenTestAsy(filePath, data).then((data) => console.log(data))
    appenTestAsy(filePath, data).then((data) => console.log(data))
});


const appenTestAsy = async(filePath, data) => {
    return new Promise((res, rej) => {
        fs.appendFile(filePath, `${data}\n`, (er) =>{
            if(er) {
                rej(er)
            }
            res("PERFECTO...")
        })
    })
}

appenTestAsy(filePath, data).then((data) => console.log(data))


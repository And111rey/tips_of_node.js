const fs = require("fs");
const path = require("path");

// console.log(path.resolve(__dirname))

console.log("START");

// fs.mkdir(path.resolve(__dirname, "dir"), (er) => {
//     if (er) {
//         console.log(er)
//         return
//     }
//     console.log("Папка создана....")
// })
// console.log("end")

// fs.writeFile(path.resolve(__dirname, 'test.js'), "console.log(`Hello`)" , (err) => {
//     if(err) {
//         console.log(err)
//     }
//     fs.appendFile(path.resolve(__dirname, 'test.js'), "console.log(`Hello world`)" , (err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log("FILE WROTEN....")
//     })

// })

//......CREATING AND ADD FILE WITH PTOMISE

// const path_to  =path.resolve(__dirname, "jjjjj", "new_file.csv")
//with error
// const path_to  =path.resolve(__dirname, "&*&*&*&", "new_file.csv")
const path_to = path.resolve(__dirname, "new_file.csv");
const data = "console.log('ADD THIS TEXT....')";

const writeFileAsync = (path_to) => {
  return new Promise((res, rej) => {
    fs.writeFile(path_to, "Helll", (err) => {
      if (err) {
        rej("error here");
        return;
      }
      res("DONE");
    });
  });
};

const appendFileAsync = (path_to, data) => {
  return new Promise((res, rej) => {
    fs.appendFile(path_to, data, (err) => {
      if (err) {
        rej("now error here");
        return;
      }
      res("DONE");
    });
  });
};

const removeFileAsync = (path_to, data) => {
  return new Promise((res, rej) => {
    fs.rm(path_to, (err) => {
      if (err) {
        rej("now error here");
        return;
      }
      res("DONE");
    });
  });
};

// writeFileAsync(path_to)
//   .then((res) => {
//     appendFileAsync(path_to, "consolr.log('HHHHHHEEE')\n");
//   })
//   .then((res) => {
//     appendFileAsync(path_to, "consolr.log('111')\n");
//   })
//   .then((res) => {
//     appendFileAsync(path_to, "consolr.log('2222')\n");
//   })
//   .then((res) => {
//     appendFileAsync(path_to, "consolr.log('2222')\n");
//   })
//   .then((res) => {
//     appendFileAsync(path_to, "consolr.log('2222')\n");
//   })
//   .then((res) => {
//     appendFileAsync(path_to, "consolr.log('2222')\n");
//   })
//   .then(() => {
//     readFile(path_to).then((data) => console.log(data));
//   })

//   .catch((e) => console.log(e));

const readFile = (path_to) => {
  return new Promise((res, rej) => {
    fs.readFile(path_to, { encoding: "utf-8" }, (err) => {
      if (err) {
        rej("now error here");
        return;
      }
      res();
    });
  });
};

removeFileAsync(path_to)
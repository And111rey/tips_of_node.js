const fs = require("fs");
const path = require("path");

const text = process.env.TEXT || "";

const writeFileAsync = (path, text) => {
  return new Promise((res, rej) => {
    fs.writeFile(path, text, (e) => {
      if (e) {
        rej(e);
        return;
      }
      res("FILE WRITET");
    });
  });
};

const reafFile = (path) => {
  return new Promise((res, rej) => {
    fs.readFile(path, { encoding: "utf-8" }, (e, text) => {
      console.log("TEST----", text);
      if (e) {
        rej(e);
        return;
      }
      res(text);
    });
  });
};
// reafFile(path.resolve(__dirname, 'test.txt')).then((data) => console.log("----->",data))

writeFileAsync(path.resolve(__dirname, "test.txt"), text).then(() => {
  reafFile(path.resolve(__dirname, "test.txt"))
    .then((data) => data.split("").length)
    .then((count) =>
      writeFileAsync(
        path.resolve(__dirname, 'test.txt"'),
        `Количество слов: ${count} `
      )
    );
});

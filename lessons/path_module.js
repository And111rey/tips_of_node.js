const path = require("path");

// console.log(path.join("one", "two", "thre"));
//one/two/thre

// console.log(path.join(__dirname));
// from root to current directory

// console.log(path.resolve());



// PAERSE PATH
const fullPath = path.resolve(__dirname, "11", "22", "33");
console.log(path.parse(fullPath))

// {
//     root: '/',
//     dir: '/Users/andreylysak/Documents/Node/UIbiTV_node_course/tips_of_node.js/lessond/11/22',
//     base: '33',
//     ext: '',
//     name: '33'
//   }

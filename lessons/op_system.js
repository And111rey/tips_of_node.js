const os = require("os")

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

const cpus = os.cpus();

for (let i = 0; i < cpus.length; i++) {
  const CPUcore = cpus[i];
  console.log(CPUcore);
}




console.log(process.pid)
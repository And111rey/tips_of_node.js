const os = require("os")
const cluster = require('cluster')

// console.log(cluster)

const cpus = os.cpus();


if (cluster.isMaster) {
    for (let i = 0; i < cpus.length; i++) {
        cluster.fork()
      }
      cluster.on("exit", (worker, code, signal) => {
        console.log(`Воркер с pid  = ${worker.process.pid}  - умер`)
        cluster.fork()
      })
} else {
    setInterval(() => {
        console.log(`WORKER PID=${process.pid}`)
    }, 3000)
}




// for (let i = 0; i < cpus.length; i++) {
//     const CPUcore = cpus[i];
//     console.log(">>>>>> ", CPUcore)
//   }



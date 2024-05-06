const Emitter = require('events')

const emitter =new Emitter()

emitter.on('message', (data, seccond, third) => {
    console.log("DATA", data)
    console.log("SECIND ANRG->", seccond)
})

const MESSAGE = process.env.message|| "";

if (MESSAGE) {
    emitter.emit("message", MESSASGE, 123)
} else {
    emitter.emit("message", "YOU DID NOR SPECIFY MESSAGE ")
}


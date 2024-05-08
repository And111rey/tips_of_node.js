module.exports = class Router {
    constructor() {
        this.endpoints = {}
    }

    request(method = "GET", path, hendler) {
        console.log(method)

        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path]

        if (endpoint[path]) {
            throw new Error(`[${method} on the  ${path} already exist ]`)
        }

        endpoint[method] = hendler
        
    }

    get(path, hendler) {
        console.log("TEST GET---", path, hendler)
        this.request("GET", path, hendler)
    }
    post(path, hendler) {
        this.request("POST", path, hendler)
    }
    put(path, hendler) {
        this.request("PUT", path, hendler)
    }
    delete(path, hendler) {
        this.request("DELETE", path, hendler)
    }
}
module.exports = (req, res, next) => {
    res.writeHead(200, {
        'ContentType': "application/json"
    })
    res.send = (data) => {
        res.end(JSON.stringify(data))
    }
}
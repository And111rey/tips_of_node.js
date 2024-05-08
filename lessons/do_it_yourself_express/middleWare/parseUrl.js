module.exports = (baseUrl) => (req, res) => {
    const parsedUrl = new URL(req.url, baseUrl)

    const params = {}
    parsedUrl.searchParams.forEach((val, key) => params[key] = val)
    req.pathName = parsedUrl.pathname
    req.params = params

}

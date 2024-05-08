const users = [
    { id: 1, name: "Stas" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Vasya" },
    { id: 4, name: "Igor" },
]

const getUsers = (req, res) => {
    if (req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    }
    res.send(users)
}


const createUser = (req, res) => {
    console.log(req.body)
    const user = req.body
    users.push(user)
    res.send(users)
}


module.exports = {
    getUsers, createUser
}
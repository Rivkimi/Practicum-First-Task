const users=[
    {name:"rivki",email:"ri212@gmail.com",phone:"0583235847"},
    {name:"efrat",email:"345452@gmail.com",phone:"0527635847"}

]
exports.getAllUsers = (req, res) => {
    res.send(users)
}
exports.createUser = (req, res) => {

    users.push(req.body)
    res.send(users)
}

exports.deleteUserById = (req, res) => {
    const email = req.params.email
    const index = users.findIndex(x => x.email === email)
    users.splice(index, 1)
    res.send(users)
}

exports.getUserById = (req, res) => {
    const email  = req.params.email
    console.log(req.params);
    const user = users.find(x => x.email === email)
    if (!user) {
        res.status(404).json({ massege: "emp not found" })
    }
    res.send(emp)
}
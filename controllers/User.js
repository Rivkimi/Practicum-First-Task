import Users from "../models/User"

export const addUser = async (res, req) => {
    try {
        let { Id, name, email, phone } = req.body;
        let newUser = await Users.create({ Id, name, email, phone })
        res.json({ newUser });
    } catch (error) {
        res.status(500).send("create user failed");
    }
}
export const updateUser = async (res, req) => {
    try {
        let { id } = req.params;
        let user = await Users.findOne(x => x._id = id);
        if (!user)
            res.status(404).json({ massege: "user not found" });
        let { name, email, phone } = req.body;
        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ massege: "user not found" });
    }
}
export const delelteUser = async (res, req) => {
    try {
        let { id } = req.params;
        let user = await Users.findByIdAndDelete({ _id: id });
        if (!user)
            res.status(404).json({ massege: "user not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ massege: "user not found" });
    }
}
export const getAllUsers = async (res, req) => {
    try {
        let allUsers = await Users.find();
        res.json(allUsers);
    } catch (error) {
        res.status(500).json({ massege: "cannot get users" });
    }
}
export const getUserById=async(res,req)=>{
    try{
        let id= req.params.id;
        let user = await Users.findOne(x => x.Id = id);
        if (!user)
            res.status(404).json({ massege: "user not found" });
         res.json(user);
    }catch(error){
        res.status(500).json({ massege: "cannot get user" });
    }
}
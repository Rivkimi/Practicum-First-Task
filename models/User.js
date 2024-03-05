import mongoose from "mongoose"
import Joi from "joi";

const UserSchema = new mongoose.Schema({
    Id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true }
})

export const Users = mongoose.model('Users', UserSchema);

export const userValidatorForCreate = (_userToValidate) => {

    let userJoi = Joi.object({
        Id: Joi.string().required(),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.number().required()
    })

    return userJoi.validate(_userToValidate);
}
export const userValidatorForUpdate = (_userToValidate) => {

    let userJoi = Joi.object({
        Id: Joi.string().required(),
        name: Joi.string(),
        email: Joi.string().email(),
        phone: Joi.number()
    })

    return userJoi.validate(_userToValidate);
}

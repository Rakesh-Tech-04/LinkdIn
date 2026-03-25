import userSchema from "../utils/userJoi.js";
import ExpressError from '../utils/ExpressError.js'

export const userJoiValidation = (req, res, next) => {
    let { error } = userSchema.validate(req.body, {
        abortEarly: false,
        allowUnknown: false
    })
    if (error) {
        let errmsg = error.details.map((el) => el.message).join(", ")
        return next(new ExpressError(400, errmsg))
    }
    next()
}
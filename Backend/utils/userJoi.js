import JOI from 'joi'

const userSchema = JOI.object({
    firstname: JOI.string()
        .min(2)
        .trim()
        .required(),

    lastname: JOI.string()
        .min(2)
        .optional(),

    email: JOI.string()
        .email()
        .required(),

    username: JOI.string()
        .min(2)
        .trim()
        .required(),
    password: JOI.string()
        .min(3)
        .trim()
        .required()
})

export default userSchema
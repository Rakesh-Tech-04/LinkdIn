import User from "../models/user.js"
import bcrypt from 'bcrypt'
import { generateToken } from '../middelware/authentication.js'
import ExpressError from '../utils/ExpressError.js'

export const signup = async (req, res) => {
    let { username, firstname, lastname, email, password } = req.body
    let fullname = firstname + " " + lastname
    password = await bcrypt.hash(password, 10)
    let newUser = await User.create({ username, fullname, password, email })
    let payload = {
        id: newUser._id,
        fullname: newUser.fullname
    }
    let token = generateToken(payload)
    res.cookie('LinkdInToken', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict'
    })
    res.status(401).json({ success: true, message: "Welcome to LinkdIn" })
}

export const login = async (req, res) => {
    let { email, password } = req.body
    let user = await User.findOne({ email })
    if (!user) throw new ExpressError(400, "User doesn't exists")
    let isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw new ExpressError(400, "Invalide Password")

    let payload = {
        id: user._id,
        fullname: user.fullname
    }
    let token = generateToken(payload)
    res.cookie('LinkdInToken', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict'
    })
    res.status(401).json({ success: true, message: "Welcome back to LinkdIn" })
}

export const logout = async (req, res) => {
    res.clearCookie('LinkdInToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict'
    })
    res.status(200).json({ success: true, message: 'You Logged Out' })
}
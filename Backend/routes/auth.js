import e from "express";
import { userJoiValidation } from '../middelware/userJoiValidation.js'
import { login, logout, signup } from "../controller/auth.js";
import wrapAsync from '../middelware/wrapAsync.js'

const router = e.Router()

router.post('/signup', userJoiValidation, wrapAsync(signup))
router.post('/login', wrapAsync(login))
router.delete('/logout', wrapAsync(logout))

export default router
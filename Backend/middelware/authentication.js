import jwt from 'jsonwebtoken'

export const generateToken = (plaload) => {
    return jwt.sign(plaload, process.env.JWTSECUREKEY, { expiresIn: '1d' })
}
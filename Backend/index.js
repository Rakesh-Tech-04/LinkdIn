import e from "express";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.js'
import mongoose from "mongoose";
import cors from 'cors'

async function main() {
    mongoose.connect(process.env.MONGOURL)
}
main().then(() => {
    console.log("connet to db")
})
    .catch((err) => {
        console.log(err)
    })

let app = e()

app.use(cors({
    origin: process.env.DEVELOPMENTURL,
    credentials: true
}))

app.use(e.json())
app.use(e.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
    console.log(err.name)
    if (err.name === 'CastError') {
        err.status = 400
        err.message = 'Invalid ID format'
    }
    if (err.name === 'ValidationError') {
        err.status = 400
    }
    if (err.name === 11000) {
        err.status = 400
        err.message = 'Duplicate field value'
    }
    let { status = 500, message = 'Server Error' } = err
    res.status(status).json({
        success: false,
        message: message
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Port is running')
})
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.mongo_url!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("Database connected successfully")
        })

        connection.on('error', (err) => {
            console.log("Database connection error" + err)
        })

    } catch (error) {
        console.log("unable to connect to database")
        console.log(error)
    }
}
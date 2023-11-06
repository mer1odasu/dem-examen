import express from "express";
import authRoutes from "./app/auth/auth.routes";

const app = express()

async function main() {
    app.use(express.json())
    app.use('/api/auth', authRoutes)

    app.listen(PORT, console.log(`Server started ${process.env.NODE_ENV} on port ${PORT}`))
}

main()
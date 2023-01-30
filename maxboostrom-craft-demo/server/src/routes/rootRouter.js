import express from "express"

import parksRouter from './api/v1/parksRouter.js'
import clientRouter from "./clientRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/parks", parksRouter)
rootRouter.use("/", clientRouter)


export default rootRouter
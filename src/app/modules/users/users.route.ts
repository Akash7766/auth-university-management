import express from 'express'
import { createUserController } from './users.controller'

export const userRouter = express.Router()

userRouter.post('/create-user', createUserController)

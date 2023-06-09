import { model, Schema, Model } from 'mongoose'
import { IUser } from './users.interface'

type UserModel = Model<IUser, object>
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export const User = model<IUser, UserModel>('User', userSchema)

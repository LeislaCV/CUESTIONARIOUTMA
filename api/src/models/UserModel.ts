import {Schema, model} from "mongoose";
import { IUser } from "../GlobalTypes";


const UserSchema = new Schema<IUser>({
    name:{
        type: String,
        requerided: true
    },
    lastNames:{
        type: String,
        requerided: true
    },
    email:{
        type: String,
        requerided: true
    },
    password:{
        type: String,
        requerided: true
    },
    rol:{
        type: String,
        enum: ["administrator", "client"],  //Un arreglo de los diferentes valores que rol tendrá
        default:"client"
    }
});

export const UserModel = model("users", UserSchema);
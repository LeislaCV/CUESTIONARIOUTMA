import {Schema, model} from "mongoose";

interface IUser {
    name: string;
    email: string;
    lastNames: string;
    password: string;
    rol: "administrator" | "client";
}

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
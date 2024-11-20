import {Schema, model} from "mongoose";

interface IOption {
    title: string;
    qId:Schema.Types.ObjectId | string;
}

const OptionSchema = new Schema <IOption> ({
    title:{
        type: String,
        required: true
    },
    qId:{
        type: Schema.Types. ObjectId,
        ref:"questions"
    },
})

export const OptionModel = model ("options", OptionSchema)
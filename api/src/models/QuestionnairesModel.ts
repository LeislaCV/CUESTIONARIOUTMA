import {Schema, model} from "mongoose";
import { IQuestionnaire } from "../GlobalTypes";



const QuestionnaireSchema = new Schema <IQuestionnaire>({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    uId:{
        type: Schema.Types. ObjectId,
        ref:"users"
    }
})

export const QuestionnaireModel = model ("questionnaires", QuestionnaireSchema);
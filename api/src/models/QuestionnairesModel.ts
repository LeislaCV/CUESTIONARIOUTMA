import {Schema, model} from "mongoose";

interface IQuestionnaire{
    title: string;
    description: string;
    uId: Schema.Types.ObjectId | string;
}

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
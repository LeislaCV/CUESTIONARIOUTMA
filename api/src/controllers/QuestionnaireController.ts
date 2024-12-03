/// <reference path="../@types/index.d.ts" />

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { QuestionnaireModel } from "../models/QuestionnairesModel";
import { QuestionsModel } from "../models/QuestionsModels";
import { OptionModel } from "../models/OptionsModel";
import { AnswerModel } from "../models/AnswersModel";

export const registerQuestionnaire = async ( req:Request, res:Response):
Promise<any> => {
    try {
        const title = req.body.title
        const description = req.body.description
        const uId = req.body.uId

        if(!title || !description || !uId){
            return res.status(400).json({
                msg:"Favor de rellenar este espacio!!"})
            }
                const questionnaire = await QuestionnaireModel.create ({
                    title,
                    description,
                    uId
                })
            
            const token = jwt.sign(JSON.stringify(questionnaire), "Shhh");
            return res.status(500).json ({msg:"Cuestionario registrado con exito!!", token })

} catch (error) {
    console.log(error);
    return res.status(500).json ({msg:"Hubo un error al crear el Cuestionario!!"})
    
}
}

export const registerQuestion = async ( req:Request, res:Response):
Promise<any> => {
    try {

        const title = req.body.title
        const type = req.body.type
        const isMandatory = req.body.isMandatory
        const qId = req.body.qId

        if(!title || !type || !isMandatory || !qId){
            return res.status(400).json({
                msg:"Lo siento, faltan datos para crear la pregunta!!"})
    }
        const question = await QuestionsModel.create({
            title,
            type,
            isMandatory,
            qId
        });
        const token = jwt.sign(JSON.stringify(question), "Shhh");
        return res.status(500).json ({msg:"Pregunta realizada con exito!!", token })

} catch (error) {
console.log(error);
return res.status(500).json ({msg:"Hubo un error al realizar la preunta!!"})

}
}

export const registerOption = async ( req:Request, res:Response):
Promise<any> => {
    try {
        const title = req.body.title
        const qId = req.body.qId

        if(!title || !qId){
            return res.status(400).json({
                msg:"Upss, aún faltan datos para crear la opción"});
        }
        const option = await OptionModel.create({
            title,
            qId
        });

        const token = jwt.sign(JSON.stringify(option), "Shhh");
        return res.status(500).json ({msg:"Opción realizada con exito!!", token })

} catch (error) {
console.log(error);
return res.status(500).json ({msg:"Hubo un error al realizar la opción!!"})

}
}

export const registerAnswer = async ( req:Request, res:Response):
Promise<any> => {

    try {

        const qstId = req.body.qstId
        const qId = req.body.qId
        const answer = req.body.answer

        if(!qstId || !qId || !answer){
            return res.status(400).json({
                msg:"Upss, aun faltan datos para registrar la respuesta"})
        }
        
        const Answer = await AnswerModel.create({
            qstId,
            qId,
            answer
        });
        const token = jwt.sign(JSON.stringify(Answer), "Shhh");
        return res.status(500).json ({msg:"Respuesta registrada con exito!!", token })

} catch (error) {
console.log(error);
return res.status(500).json ({msg:"Hubo un error al registrar la respuesta!!"})

}
}

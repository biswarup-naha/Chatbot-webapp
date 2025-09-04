"use server";
import { GoogleGenAI } from '@google/genai';

export async function chat(input:string){
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: input,
    });
    return response.text;
}
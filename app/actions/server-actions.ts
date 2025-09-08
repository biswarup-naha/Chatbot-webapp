// "use server";
// import { GoogleGenAI } from '@google/genai';

// export async function chat(input:string){
//     const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
//     const response = await ai.models.generateContent({
//         model: "gemini-2.5-flash",
//         contents: input,
//     });
//     return response.text;
// }

import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

export async function chat(
    userId: string,
    input: string,
    onProcessing?: (isProcessing: boolean) => void // ✅ callback
): Promise<string> {
    return new Promise(async (resolve, reject) => {
        const conversationId = `user:${userId}`;

        const connection = new HubConnectionBuilder()
            .withUrl(`https://localhost:7168/chathub?userId=${userId}`, { withCredentials: true })
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        try {
            await connection.start();

            connection.on("ReceiveMessage", (msg) => {
                resolve(msg.text || msg);
                connection.stop();
            });

            connection.on("BotProcessing", (_convId, isProcessing) => {
                if (onProcessing) onProcessing(isProcessing); // ✅ notify caller
            });

            await connection.invoke("SendUserMessage", conversationId, userId, input);
        } catch (error) {
            reject(error);
            await connection.stop();
        }
    });
}




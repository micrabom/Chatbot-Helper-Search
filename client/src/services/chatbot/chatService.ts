import { chatAPI, githubAPI } from "../clientService"


export const getChatMessages = async () => {
    try {
        const res = await chatAPI.get(`chat/chatbot/chatbot_messages`)
        console.log(res)
        return res
    } catch (error: any) {
        throw new Error(error)
    }
}
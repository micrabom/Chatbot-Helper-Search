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

export const getConversationContents = async (conversationId:any) => {
    try {
        const res = await chatAPI.get(`chat/chatbot/conversation_contents/${conversationId}`)
        return res
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getChatCoversations = async () => {
    try {
        const res = await chatAPI.get(`chat/chatbot/conversations_messages`)
        return res
    } catch (error: any) {
        throw new Error(error)
    }
}


export const inputChatBotMessages = async (data:any) => {
    try {
        const res = await chatAPI.post(`chat/chatbot/input_search`, data)
        return res
    } catch (error: any) {
        throw new Error(error)
    }
}


import axios from "axios";

export const githubAPI = axios.create({
    baseURL: 'https://api.github.com/',
});

export const chatAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CHATBOT_SERVICE_URL,
});
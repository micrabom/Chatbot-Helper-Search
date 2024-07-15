import { githubAPI } from "../clientService"


export const getUserGithub = async (username: any) => {
    try {
        const res = await githubAPI.get(`users/${username}`, {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            },
        })
        return res
    } catch (error: any) {
        throw new Error(error)
    }
}
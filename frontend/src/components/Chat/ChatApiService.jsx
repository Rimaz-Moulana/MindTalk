import axios from '../../api/axios'

const BASE_URL = 'http://localhost:8080/api/v1'

export const getChats = (accessToken) => {
    const config = {
        Headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    return axios.get('${BASE_URL}/chat/getCounsellors', config)
}

export const sendMessage = (accessToken, messageData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    return axios.post(`${BASE_URL}/messages`, messageData, config)
}

import SockJs from 'sockjs-client'
import Stomp from 'stomp'

const WebSocketService = () => {
    let stompClient = null

    const connect = (callback) => {
        const socket = new SockJs('http://localhost:8080/chat')
        stompClient = Stomp.over(socket)

        stompClient.connect({}, (frame) => {
            console.log('Connect to websocket')
            callback()
        })
    }
    const sendMessage = (message) => {
        stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(message))
    }
    return {
        connect,
        sendMessage
    }
}

export default WebSocketService

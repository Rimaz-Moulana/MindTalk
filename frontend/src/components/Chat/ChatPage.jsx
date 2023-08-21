import React from 'react'
import ChatList from './ChatList'
import ChatBox from './ChatBox'

export default ChatPage = () => {
    //store information about chats
    const chats = [
        {
            id: 1,
            avatar: '../../../src/assets/Chat/profilePic1.jpg',
            name: 'Marie Horwitz'
        },
        {
            id: 2,
            avatar: '../../../src/assets/Chat/profilePic2.jpg',
            name: 'Alexa Chung'
        },
        {
            id: 3,
            avatar: '../../../src/assets/Chat/profilePic3.jpg',
            name: 'Mia Maples'
        }
    ]
    //to track whether chat box is open
    const [isChatBoxOpen, setChatBoxOpen] = useState(false)
    const [activeChat, setActiveChat] = useState(null)
    const [showChatList, setShowChatList] = useState(true)
    //get selected chat's info
    const [selectedChatAvatar, setSelectedChatAvatar] = useState('')
    const [selectedChatName, setSelectedChatName] = useState('')

    const handleChatItemClick = (chatId) => {
        setChatBoxOpen(true)
        setActiveChat(chatId)
        if (window.innerWidth < 700 && activeChat) {
            setShowChatList(false)
        }

        const selectedChat = chats.find((chat) => chat.id === chatId)
        setSelectedChatAvatar(selectedChat.avatar)
        setSelectedChatName(selectedChat.name)
    }
    const handleShowChatList = () => {
        setActiveChat(false)
        setShowChatList(true)
        setChatBoxOpen(false)
    }
    return (
        <>
            {window.innerWidth >= 700 && showChatList && !activeChat && <ChatList />}
            <ChatBox />
        </>
    )
}

import React, { useState } from 'react'
import './messageStyle.css'
import placeholderPNG from '../../assets/Chat/chatting.png'

export default ChatBox = () => {
    const [activeChat, setActiveChat] = useState(null)
    const [showChatList, setShowChatList] = useState(true)
    const [selectedChatAvatar, setSelectedChatAvatar] = useState('')
    const [selectedChatName, setSelectedChatName] = useState('')

    const handleChatItemClick = (chatId) => {
        setActiveChat(chatId)
        // setShowChatList(false);
        setShowChatList(true)
        // Fetch the avatar and name of the selected chat from your data source
        const selectedChatAvatar = getChatAvatar(chatId)
        const selectedChatName = getChatName(chatId)
        setSelectedChatAvatar(selectedChatAvatar)
        setSelectedChatName(selectedChatName)
    }
    {
        activeChat ? (
            <div className="chat-messages">
                <div className="chat-header">
                    <div className="avatar">
                        <img src={selectedChatAvatar} alt="avatar" />
                        {/* <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar"
                    /> */}
                    </div>
                    <div className="chat-header-content">
                        <p className="chat-header-name">{selectedChatName}</p>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="message incoming">
                        <p className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <p className="timestamp">12:00 PM | Aug 13</p>
                    </div>
                    <div className="message outgoing">
                        <p className="message-content">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                        <p className="timestamp">12:00 PM | Aug 13</p>
                    </div>
                    <div className="message incoming">
                        <p className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <p className="timestamp">12:00 PM | Aug 13</p>
                    </div>
                    <div className="message outgoing">
                        <p className="message-content">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                        <p className="timestamp">12:00 PM | Aug 13</p>
                    </div>
                    <div className="message incoming">
                        <p className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <p className="timestamp">12:00 PM | Aug 13</p>
                    </div>
                    <div className="message outgoing">
                        <p className="message-content">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                        <p className="timestamp">12:00 PM | Aug 13</p>
                    </div>
                </div>
                <div className="message-input">
                    <input type="text" placeholder="Type message" />
                    <a href="#!">
                        <i className="fas fa-paperclip"></i>
                    </a>
                    <a href="#!">
                        <i className="fas fa-smile"></i>
                    </a>
                    <a href="#!">
                        <i className="fas fa-paper-plane"></i>
                    </a>
                </div>
            </div>
        ) : (
            <div className="placeholder-picture">
                <img src={placeholderPNG} alt="placeholderpic" />
            </div>
        )
    }
}

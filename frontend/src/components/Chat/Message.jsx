import React, { useState } from 'react'
import './messageStyle.css'
import Searchbar from '../shared/Searchbar'
import placeholderPNG from '../../assets/Chat/chatting.png'

const ChatApp = () => {
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

    return (
        <div className="chat-container">
            <div className={`chat-list ${showChatList ? '' : 'hidden'}`}>
                <div className="chat-list-header">
                    <span>Messages</span>
                </div>
                <Searchbar />
                <div
                    onClick={() => {
                        handleChatItemClick(1)
                    }}
                    className={`chat-item ${activeChat === 1 ? 'active' : ''}`}
                >
                    <div className="avatar">
                        {/* <img src={require('../assets/Chat/profilePic1.jpg').default} alt="" /> */}
                        <img
                            src="../../../src/assets/Chat/profilePic1.jpg"
                            // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="avatar"
                        />
                        <span className="badge bg-success badge-dot"></span>
                    </div>
                    <div className="chat-content">
                        <p className="chat-name">Marie Horwitz</p>
                        <p className="chat-message">Hello, Are you there?</p>
                        <span className="badge bg-danger rounded-pill">3</span>
                    </div>
                    <p className="timestamp">Just now</p>
                </div>
                <div
                    onClick={() => {
                        handleChatItemClick(2)
                    }}
                    className={`chat-item ${activeChat === 2 ? 'active' : ''}`}
                >
                    <div className="avatar">
                        <img
                            src="../../../src/assets/Chat/profilePic2.jpg"
                            // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                            alt="avatar"
                        />
                        <span className="badge bg-warning badge-dot"></span>
                    </div>
                    <div className="chat-content">
                        <p className="chat-name">Alexa Chung</p>
                        <p className="chat-message">Lorem ipsum dolor sit.</p>
                        <span className="badge bg-danger rounded-pill">2</span>
                    </div>
                    <p className="timestamp">5 mins ago</p>
                </div>
                <div
                    onClick={() => {
                        handleChatItemClick(3)
                    }}
                    className={`chat-item ${activeChat === 3 ? 'active' : ''}`}
                >
                    <div className="avatar">
                        <img
                            src="../../../src/assets/Chat/profilePic3.jpg"
                            // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                            alt="avatar"
                        />
                        <span className="badge bg-warning badge-dot"></span>
                    </div>
                    <div className="chat-content">
                        <p className="chat-name">Mia Maples</p>
                        <p className="chat-message">Lorem ipsum dolor sit.</p>
                        <span className="badge bg-danger rounded-pill">2</span>
                    </div>
                    <p className="timestamp">11 mins ago</p>
                </div>
                {/* Add more chat items here */}
            </div>

            {activeChat ? (
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
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
            )}
        </div>
    )
}

export default ChatApp

import React, { useState } from 'react'
import './messageStyle.css'
import Searchbar from '../shared/Searchbar'

export default chatList = () => {
    const [activeChat, setActiveChat] = useState(null)
    const [showChatList, setShowChatList] = useState(true)

    const handleChatItemClick = (chatId) => {
        setActiveChat(chatId)
        // setShowChatList(false);
        setShowChatList(true)
        // Fetch the avatar and name of the selected chat from your data source

        return (
            <>
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
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
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
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
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
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
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
            </>
        )
    }
}

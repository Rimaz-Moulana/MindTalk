import React from 'react'
import ChatApp from '../components/Chat/Message'
import { Route, Router, Routes } from 'react-router-dom'

const ChatPage = () => (
    <>
        <Router>
            <Routes>
                <Route path="/message" Component={ChatApp}></Route>
            </Routes>
        </Router>
    </>
)

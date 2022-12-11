import React from 'react'
import Chatsidebar from '../../Page/Clubs/chat/Chatsidebar'
import Chatbox from '../../Page/Clubs/chat/Chatbox'
import style from "../styles/clubchat.module.scss"

const chat = () => {
  return (
    <main className={style.chat_page_container_main}>
        <Chatsidebar/>
        <Chatbox/>
    </main>
  )
}

export default chat
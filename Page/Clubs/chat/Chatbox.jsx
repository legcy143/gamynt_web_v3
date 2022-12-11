import React from 'react'
import Chatnav from './utlis/Chatboxnav'
import style from "./styles/chat.module.scss"
import Memberstatus from "./Memberstatus"

const Chatbox = () => {
  return (
    <main className={style.chat_container_main}>
      <Chatnav/>
      <main className={style.member_chat_container}>
      <section className={style.chat_container}>
        hello wolrd wolfajhfdjhasdfhasdf lfasdfasdfsadfsdfsdfsadfsadfsadfsadfasdf
        </section> 
      <Memberstatus />
      </main>
    </main>
  )
}

export default Chatbox
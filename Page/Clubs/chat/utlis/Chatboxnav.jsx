import React from 'react'
import style from "../styles/chat.module.scss"
import GroupIcon from '@mui/icons-material/Group';

const Chatnav = () => {
  return (
    <nav className={style.nav_top_chat}>
      <section>
      <p>#channel name</p>
      </section>
      <section>
      <GroupIcon/>
      </section>
    </nav>
  )
}

export default Chatnav
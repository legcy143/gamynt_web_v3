import React, { useEffect, useRef } from 'react'
import style from "./styles/sidebar.module.scss"
import Clubnav from './utlis/Clubnav'
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import TagIcon from '@mui/icons-material/Tag';
import {closenav , opennav , opensidebar} from "../../../reduxstore/clubchatnavslice"
import { useSelector , useDispatch} from 'react-redux';

const Chatsidebar = () => {
  let dispatch = useDispatch()
  let handlenav = useSelector((store)=>store.handlenav)
  let menumainref = useRef();

  useEffect(() => {
    // .open_nav class of toggle menu .classList.toggle("mystyle")
    console.log("handle nav =>" , handlenav)
    {handlenav.includes("sidebar") == true && menumainref.current.classList.toggle(style.open_nav)}
}, [handlenav])

return (
  <main  className={style.sidebar_main} ref={menumainref}>
      <Clubnav />
      <section className={style.sidebar_container}>
        <header className={style.club_logo}>
          <img src="/images/freefire.jpeg" alt="" />
          <h1>club name is name</h1>
          <ArrowDownIcon />
        </header>

        {/* create new channel */}
          {/* <header className={style.create_channel}>
            <input type="text" placeholder='new channel' />
            <AddIcon />
          </header> */}

        {/* channel list */}

        <main className={style.channel_list}>
          <ul><TagIcon/><li>genrel chat</li></ul>
          <ul><TagIcon/><li>diccusion hub</li></ul>
          <ul><TagIcon/><li>group hub</li></ul>
          <ul><TagIcon/><li>annoucment</li></ul>
          <ul><TagIcon/><li>genrel</li></ul>
          <ul><TagIcon/><li>genrel</li></ul>
        </main>

      </section>
    </main>
  )
}

export default Chatsidebar
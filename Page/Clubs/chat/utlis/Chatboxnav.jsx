import React from 'react'
import style from "../styles/chat.module.scss"
import GroupIcon from '@mui/icons-material/Group';
import TagIcon from '@mui/icons-material/Tag';
import MenuIcon from '@mui/icons-material/ClearAll';
import { useDispatch } from 'react-redux';
import {closenav , opennav} from "../../../../reduxstore/clubchatnavslice"

const Chatnav = () => {
  let dispatch = useDispatch()
  return (
    <nav className={style.nav_top_chat}>
      <section>
        <div className={style.menu_icon} onClick={()=>{dispatch(opennav())}} >
        <MenuIcon/>
        </div>
      <p> <span><TagIcon/> </span> channel name</p>
      </section>
      <section>
      <GroupIcon/>
      </section>
    </nav>
  )
}

export default Chatnav
import React from 'react'
import Profilecard from './component/Profilecard'
import style from "./styles/profile.module.scss"
import FriendsIcon from '@mui/icons-material/Diversity3';

const Profile = () => {
  return (
    <main className={style.profile_main}>
        <Profilecard/>
        <nav className={style.nav}>
          <ul className={style.active_link}>
            <FriendsIcon/>
            <li>friends</li>
          </ul>
          <ul>
            <FriendsIcon/>
            <li>clubs</li>
          </ul>
          <ul>
            <FriendsIcon/>
            <li>post</li>
          </ul>
          <ul>
            <FriendsIcon/>
            <li>shorts</li>
          </ul>
        </nav>
    </main>
  )
}

export default Profile
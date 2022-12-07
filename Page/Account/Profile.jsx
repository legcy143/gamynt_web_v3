import React from 'react'
import Profilecard from './component/Profilecard'
import style from "./styles/profile.module.scss"

const Profile = () => {
  return (
    <main className={style.profile_main}>
        <Profilecard/>
    </main>
  )
}

export default Profile
import React from 'react'
import style from "./styles/clubitem.module.scss"
import VerifiedIcon from '@mui/icons-material/Verified';

const Joinedclub = () => {
  return (
    <main className={style.club_card_container}>
<section className={style.club_card}>
  <header>
<img src="/images/freefire.jpeg" alt="" />
  </header>
  <div className={style.profile_img}>
  <img src="/images/freefire.jpeg"  alt="" />
  <h1>name hai bulla <VerifiedIcon/></h1>
  </div>
  <div className={style.club_info}>
    <p>250 member</p>
    <p>250 active</p>
  </div>
  <button>join</button>
</section>
    </main>
  )
}

export default Joinedclub
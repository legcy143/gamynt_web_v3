import Image from 'next/image'
import React from 'react'
import style from "./styles/homeitem.module.scss"
import GroupIcon from '@mui/icons-material/Group';
import Tournamentcard from '../Tournament/Tournamentcard';

const Topfeaturedtournament = () => {
  return (
    <main className={style.top_featured_container}>
<header >
  <h2  style={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"1px",
    marginBottom:"-30px"
}}>Top Feadtured Clubs  <img src={"/tournament.gif"} style={{
    width:"100px",
  }} />
</h2>
</header>
    <section className={style.crausal_container}>

<Tournamentcard/>
<Tournamentcard/>
<Tournamentcard/>
    </section>

    </main>
  )
}

export default Topfeaturedtournament
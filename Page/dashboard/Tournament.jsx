import React from 'react'
import style from "./styles/tournament.module.scss"
const Tournament = () => {
  return (
    <main className={style.tournament_container_main}>
      <section className={style.recent_tournament}>
        <header>
        <h1>recent tournaments</h1>
        </header>
        <Tournamentdashboad />
      </section>
      
    </main>
  )
}

const Tournamentdashboad = ()=>{
return(
  <main className={style.card}>

  </main>
)
}

export default Tournament
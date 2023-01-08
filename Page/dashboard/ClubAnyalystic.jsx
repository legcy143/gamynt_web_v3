import React from 'react'
import style from "./styles/clubanyalistic.module.scss"
import GamesIcon from '@mui/icons-material/Games';

const ClubAnyalystic = () => {
  return (
    <main className={style.main_container}>

        <section className={style.member_status}>
            <header>Tournament</header>
            <div className={style.container}>
                <h2><GamesIcon/> tournament</h2>
                <p>450</p>
            </div>
            <div className={style.container}>
                <h2><GamesIcon/> tournament</h2>
                <p>450</p>
            </div>
            <div className={style.container}>
                <h2><GamesIcon/> tournament</h2>
                <p>450</p>
            </div>
            <div className={style.container}>
                <h2><GamesIcon/> tournament</h2>
                <p>450</p>
            </div>
        </section>

        <section className={style.member_status}>
            <header>club</header>
            <div className={style.container}>
                <h2><GamesIcon/> tournament</h2>
                <p>450</p>
            </div>
            <div className={style.container}>
                <h2><GamesIcon/> tournament</h2>
                <p>450</p>
            </div>
            <div className={style.container}>
                <h2><GamesIcon/> tournament</h2>
                <p>450</p>
            </div>
            <div className={style.container}>
                <h2><GamesIcon/> tournament</h2>
                <p>450</p>
            </div>
        </section>

        {/* graph anylastic */}
        <section className={style.graph_anylisis_contianer}>

        </section>

    </main>
  )
}

export default ClubAnyalystic
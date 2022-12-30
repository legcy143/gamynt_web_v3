import React from 'react'
import style from "./styles/registeritem.module.scss"
import GamesIcon from '@mui/icons-material/Games';

const Info = () => {
  return (
    <main className={style.info_container}>
                <header>
            <h1>tournament info</h1>
            </header>

            <section>

            <div className={style.big_info_div}>
                <p><GamesIcon/> game</p>
                <h1>free fire</h1>
            </div>
            <div className={style.mini_info_div}>
                <p>Mode</p>
                <h1>solo</h1>
            </div>
            <div className={style.mini_info_div}>
                <p>slot</p>
                <h1>12/50 <b>{50-2}left</b></h1>
            </div>
            <div className={style.mini_info_div}>
                <p>entry fee</p>
                <h1>150</h1>
            </div>
            <div className={style.mini_info_div}>
                <p>1st rank</p>
                <h1>150</h1>
            </div>
            <div className={style.mini_info_div}>
                <p>2nd rank</p>
                <h1>150</h1>
            </div>
            <div className={style.mini_info_div}>
                <p>3nd rank</p>
                <h1>150</h1>
            </div>

            </section>
    <button className={style.register_btn}>join</button>
    </main>
  )
}

export default Info
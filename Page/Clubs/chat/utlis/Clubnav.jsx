import React from 'react'
import style from "../styles/sidebar.module.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Clubnav = () => {
  return (
    <main className={style.club_nav_main}>
        <div className={style.back_to_club}>
            <ArrowBackIcon/>
        </div>
        <section className={style.club_list}>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>
            <div>
            <img src="/images/pubg.jpeg" alt="" />
            </div>

        </section>
    </main>
  )
}

export default Clubnav
import React , {Fragment} from 'react'
import style from "./styles/club.module.scss"
import Topfeaturedclubs from "../Page/Clubs/Topfeaturedclubs"
import Joindclub from "../page/Clubs/Joinedclub"

const Club = () => {
  return (
    <Fragment>
      <Topfeaturedclubs/>
      <nav className={style.club_nav}>
        <section>
          <button>joined</button>
          <button>joined</button>
          <button>joined</button>
        </section>
      </nav>
      <Joindclub />
    </Fragment>
  )
}

export default Club
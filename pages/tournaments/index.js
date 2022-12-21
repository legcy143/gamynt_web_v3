import React, { Fragment } from 'react'
import ExploreTournament from '../../Page/Tournament/ExploreTournament'
import TopFeaturedtournament from '../../Page/Tournament/TopFeaturedtournament'
import style from "../styles/tournament.module.scss"

function index() {
  return (
    <Fragment>
      <TopFeaturedtournament/>
       <nav className={style.tournament_nav}>
          <ul className={style.active_link}>
            trending
          </ul>
          <ul>
            explore
          </ul>
          <ul>
            filter
          </ul>
        </nav>
        <ExploreTournament/>
    </Fragment>
  )
}

export default index
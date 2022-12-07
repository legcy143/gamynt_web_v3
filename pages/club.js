import React , {Fragment} from 'react'
import style from "./styles/club.module.scss"
import Topfeaturedclubs from "../Page/Clubs/Topfeaturedclubs"
import Joindclub from "../Page/Clubs/Joinedclub"
import FriendsIcon from '@mui/icons-material/Diversity3';
const Club = () => {
  return (
    <Fragment>
      <Topfeaturedclubs/>
      <nav className={style.club_nav}>
          <ul className={style.active_link}>
            joined club
          </ul>
          <ul>
            my guild
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
      <Joindclub />
    </Fragment>
  )
}

export default Club
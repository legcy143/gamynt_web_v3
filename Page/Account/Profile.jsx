import React from 'react'
import Profilecard from './component/Profilecard'
import style from "./styles/profile.module.scss"
import FriendsIcon from '@mui/icons-material/Diversity3';

const Profile = () => {
  return (
    <main className={style.profile_main}>
        <Profilecard/>
        <nav className={style.nav}>
          <ul className={style.active_link}>
            <FriendsIcon/>
            <li>friends</li>
          </ul>
          <ul>
            <FriendsIcon/>
            <li>clubs</li>
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

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, mollitia veritatis perferendis quaerat sequi repudiandae quia vero aspernatur quasi ipsam qui maiores, sed distinctio magni omnis. Praesentium neque voluptate reprehenderit?
          br
        <br /><br /><br /><br /><br />
        <br /><br />
        <br /><br />
        <br /><br /><br /><br /><br />
        <br /><br />
        <br /><br />
        <br /><br /><br /><br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur consequatur iusto eveniet esse sint incidunt a, dolorum quo deserunt autem numquam id praesentium explicabo! Quia, autem consectetur? Doloremque, molestias doloribus?
        </p>
    </main>
  )
}

export default Profile
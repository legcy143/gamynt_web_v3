import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import style from "./styles/dashboard.module.scss"
import ClubAnyalystic from "../../Page/dashboard/ClubAnyalystic"
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Dashboard = () => {
    let router = useRouter()
    const [sidenav, setsidenav] = useState(style.close_nav)
    // const [sidenav, setsidenav] = useState(style.main_nav)
    // let todaydate = new Date().toLocaleString()
    // console.log(todaydate)
    const togglenav = ()=>{
        {sidenav == style.close_nav ? setsidenav(style.main_nav):setsidenav(style.close_nav)}
    }
  return (
      <main className={style.dashboard_main}>
        <nav className={sidenav}>
            <div className={style.close_nav_icon}>
        <ArrowBackIcon onClick={()=>{router.back(-1)}} />
        <MenuIcon onClick={()=>{togglenav()}} />
            </div>
            <header>
                <img src="/images/freefire.jpeg" alt="" />
                <h1>gamer hub</h1>
            </header>
            <ul className={style.active_menu}>
                <DashboardIcon/>
                <li>dashboard</li>
            </ul>
            <ul>
                <DashboardIcon/>
                <li>tournament</li>
            </ul>
            <ul>
                <DashboardIcon/>
                <li>club</li>
            </ul>
        </nav>
        <section className={style.dashboard_item_container}>
            <nav className={style.dash_content_nav}>
                <div className={style.menu_icon} onClick={()=>{togglenav()}} >
                <MenuIcon/>
                </div>
                <section>
                    ok
                </section>
            </nav>
                <section>
                    {/* file changes here */}
                    <ClubAnyalystic/>
                    </section>
        </section>
    </main>
  )
}

export default Dashboard
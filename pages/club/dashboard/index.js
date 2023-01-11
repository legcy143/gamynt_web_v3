import React, { useEffect, useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import style from "./styles/dashboard.module.scss";
import Club from "../../../Page/dashboard/Club";
import ClubAnyalystic from "../../../Page/dashboard/ClubAnyalystic";
import Tournament from '../../../Page/dashboard/Tournament';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Dashboard = () => {
    let router = useRouter();
    const [pageroute, setpageroute] = useState(2)
    const [pagecompo, setpagecompo] = useState("loading .. ")
    const [sidenav, setsidenav] = useState(style.close_nav)
    useEffect(() => {
      switch (pageroute) {
        case 1:
          setpagecompo( <ClubAnyalystic/>)
          break;
        case 2:
          setpagecompo( <Tournament/>)
          break;
        case 3:
          setpagecompo( <Club/>)
          break;
      
        default:
          setpagecompo("page not found")
          break;
      }
    }, [pageroute])
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
            <ul onClick={()=>{setpageroute(1),setsidenav(style.close_nav)}} className={`${pageroute==1 && style.active_menu}`}>
                <DashboardIcon/>
                <li>home</li>
            </ul>
            <ul onClick={()=>{setpageroute(2),setsidenav(style.close_nav)}} className={`${pageroute==2 && style.active_menu}`}>
                <DashboardIcon/>
                <li>tournament</li>
            </ul>
            <ul onClick={()=>{setpageroute(3),setsidenav(style.close_nav)}} className={`${pageroute==3 && style.active_menu}`}>
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
                    {/* <ClubAnyalystic/> */}
                    {pagecompo}
                    </section>
        </section>
    </main>
  )
}

export default Dashboard
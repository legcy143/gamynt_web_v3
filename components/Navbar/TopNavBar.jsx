import React, { useEffect, useState } from 'react'
import Image from "next/image"
import style from "./TopNavBar.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useRouter } from 'next/router';

const TopNavbar = () => {
  let router = useRouter();
  let path = router.pathname;
  
  return (
    <nav className={style.top_navbar}>

      <section className={style.page_name}>
        <h2>{path.slice(1,15)}</h2>
        <h1>{path==="/"? "home" :path.slice(1,15)}</h1>
      </section>

        <section className={style.search_box}>
        <input type="text" placeholder='search..'/>
        <SearchIcon/>
        </section>

        <section className={style.profile_section}>
          <div className={style.coin_diamond_container}>
            <div className={style.coin_nav}>
              <p>23</p>
              <input type="range" name="points" min="0" max="100" value={0}/> 
              </div>
            <div className={style.coin_nav}>
              <p>23</p>
              <input type="range" name="points" min="0" max="100" value={0}/> 
              </div>
          </div>

          <div className={style.notification}>
            <NotificationsIcon/>
            <p>34</p>
          </div>

            <div className={style.profile_icon}>
              <h1>p</h1>
            </div>
        </section>
    </nav>
  )
}

export default TopNavbar
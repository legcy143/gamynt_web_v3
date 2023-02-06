import React , { useState } from 'react'
import Image from "next/image"
import style from "./NavBar.module.scss"
import Tooltip from '@mui/material/Tooltip';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/ClearAll';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WalletIcon from '@mui/icons-material/Wallet';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const NavBar = () => {
    let router = useRouter();
    let path = router.pathname
    const [shrikclass, setshrikclass] = useState(null)
    const [shrinkNavAdjust, setShrinkNavAdjust] = useState(null)
    const sidebaradjust = ()=>{
        if(shrikclass == null){
            setshrikclass(style.shrink_item)
            setShrinkNavAdjust(style.navbar_adjust)
        }
        else{
            setShrinkNavAdjust(null)
            setshrikclass(null)
        }
    }
  return (
    <nav className={`${style.navbar} ${shrinkNavAdjust}`}>
        <header>
            <MenuIcon onClick={()=>sidebaradjust()}/>
            <Image className={shrikclass} src="/gamynt_logo.png" alt="" width={200} height={50} />
        </header>
        {/*   -----   links  -----  */}
        <section className={style.nav_link}>

            <li className={`${path =="/" && style.active_link}`} onClick={()=>router.push("/")} ><HomeIcon />  <p className={shrikclass}>home</p></li>

            {/* <li className={`${path =="/post" && style.active_link}`} onClick={()=>router.push("/post")}><DynamicFeedIcon /> <p className={shrikclass}>post</p></li> */}


            <li className={`${path =="/tournaments" && style.active_link}`}  onClick={()=>router.push("/tournaments")}><EmojiEventsIcon /> <p className={shrikclass}>tournaments</p></li>

            <li className={`${path =="/streams" && style.active_link}`} onClick={()=>router.push("/streams")}><LiveTvIcon /> <p className={shrikclass}>live stream</p></li>

            <li className={`${path =="/club" && style.active_link}`} onClick={()=>router.push("/club")}><GroupsIcon /> <p className={shrikclass}>club</p></li>

            <li className={`${style.mob_hiden} ${path =="/subscription" && style.active_link}`} onClick={()=>router.push("/subscription")}><SubscriptionsIcon /> <p className={shrikclass}>subscriptions</p></li>

            <li className={`${path =="/account" && style.active_link}`} onClick={()=>router.push("/account")}><AccountCircleIcon /> <p className={shrikclass}>profile</p></li>

        </section>
        
        {/*   -----   mt clubs  -----  */}
        <section className={style.my_clubs}>
            <div>
                <GroupsIcon/>
            <h2 className={shrikclass}>my clubs</h2>
            </div>
            <li> <Image src="/logo_mini.png" alt="" width={50} height={50} /> <p className={shrikclass}>pandey ji ka chai ka dhaba esports</p></li>
            <li> <Image src="/logo_mini.png" alt="" width={50} height={50} />  <p className={shrikclass}>tournament hub</p></li>
        </section>

    </nav>
  )
}

export default NavBar
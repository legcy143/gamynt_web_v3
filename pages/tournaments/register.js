import React, { useEffect, useState } from 'react'
import style from "./styles/register.module.scss"
import { useRouter } from 'next/router'
import Info from '../../Page/Tournament/registeration/Info'
import Rules from '../../Page/Tournament/registeration/Rules'
import Player from '../../Page/Tournament/registeration/Player'

const Register = () => {
    let router = useRouter()
    const [pageroute, setpageroute] = new useState(1)
  const [pagecompo, setpagecompo] = new useState("loading .. ")
  new useEffect(() => {
    switch (pageroute) {
      case 1:
        setpagecompo(<Info/>)
        break;
      case 2:
        setpagecompo(<Rules/>)
        break;
      case 3:
        setpagecompo(<Player/>)
        break;
    
      default:
        setpagecompo("page not found")
        break;
    }
  }, [pageroute])
  return (
    <main className={style.register_main_page_container}>
       
            <button onClick={()=>{router.back(-1)}} className={style.back_btn}>back</button>

            
<main className={style.hero_section}>

        <section className={style.organizer_info}>
        <img src="/images/freefire.jpeg" alt="" />
        <h2>phalana dhimkana tournament </h2>
        <p>bhai tera hero jo na tournament na khele wo zero lol🤣</p>
        <div>
            $400 money
        </div>
        </section>


        <section className={style.register_info_container}>

<nav className={style.register_nav}>
<ul onClick={()=>{setpageroute(1)}} className={`${pageroute==1 && style.active_link}`}>
        <li>info</li>
    </ul>
    <ul onClick={()=>{setpageroute(2)}} className={`${pageroute==2 && style.active_link}`}>
        <li>rules</li>
    </ul>
    <ul onClick={()=>{setpageroute(3)}} className={`${pageroute==3 && style.active_link}`}>
        <li>players</li>
    </ul>
</nav>
    {pagecompo}
        </section>
</main>



{/* backgroup ui */}
    <section className={style.bg}>
            <img src="/images/freefire.jpeg" alt="" />
        </section>

    </main>
  )
}

export default Register
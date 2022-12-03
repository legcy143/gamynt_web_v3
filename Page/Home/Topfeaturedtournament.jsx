import Image from 'next/image'
import React from 'react'
import style from "./styles/homeitem.module.scss"
import GroupIcon from '@mui/icons-material/Group';

const Topfeaturedtournament = () => {
  return (
    <main className={style.top_featured_container}>
    <header>
      <h2>top featured tournament</h2>
    </header>
    <section className={style.crausal_container}>


    <div className={style.tournament_item}>
      <div className={style.image_space}>
        <Image src="/images/freefire.jpeg" alt="" width={200} height={200}/>
        <span>2 thu 2:50 pm</span>
      </div>
      <div className={style.admin_detail}>
        <Image src="/images/freefire.jpeg" alt="" width={50} height={50}/>
        <h3>gamynt admin</h3>
      </div>
        <div className={style.tournament_info}>
        
       <p> <Image src="/images/freefire.jpeg" alt="" width={25} height={25}/>  free fire</p>
       <p><Image src="/util/prize.webp" alt="" width={35} height={25}/>   $ 250</p>
       <p> <Image src="/util/member.png" alt="" width={35} height={30}/> member slot</p>
       <p><GroupIcon/> solo</p>
        </div>
        <button>join tournament</button>
        </div>


    </section>

    </main>
  )
}

export default Topfeaturedtournament
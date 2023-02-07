import React from 'react'
import style from "./styles/streamcard.module.scss"
import LiveIcon from '@mui/icons-material/WifiTethering';
import { useRouter } from 'next/router';


const Streamcard = (props) => {
  let router = useRouter();
  return (
    <main className={style.livestreamcard} style={props.style} onClick={()=>{router.push("/streams/stream")}}>
      <section className={style.image_card}>
      <img src="/images/fortnite.jpeg" alt="img" />
      <small>154 watching</small>
      <span><LiveIcon/> live</span>
      </section>
      <section className={style.liveinfo}>
      <img src="/images/fortnite.jpeg" alt="img" />
      <div>
        <h1>{props.tittle}</h1>
        <small>channel name</small>
      </div>
      </section>
    </main>
  )
}

export default Streamcard
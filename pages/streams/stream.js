import React, { useState } from 'react'
import style from "./styles/streamvedio.module.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const stream = () => {
    let router = new useRouter()
    const sharefunc = ()=>{
      const shareurl = window.location.href
      console.log("share func" , shareurl)

      let shareData = {
        title: 'gamynt',
        text: 'from gamynt',
        url: window.location.href,
      }
     
if (!navigator.canShare) {
  console.log("not supported this browser")
}
else if (navigator.canShare(shareData)) {
  console.log("work fine")
  navigator.share(shareData)
} else {
  console.log("something wrong")
}
    }
  return (
    <>
    <nav className={style.nav}>
        <section>
            <button onClick={()=>router.back(-1)} > <ArrowBackIcon/> back</button>
        </section>
        <section>
            any thing else
        </section>
    </nav>
    {/* vedio streaming parts */}
    <main className={style.stream_container}>
    {/* vedio streaming with vedio and tittle info */}
      <section className={style.stream_section}>
        {/* vedio container  */}
        <div className={style.vedio_container}>
          <img src="/images/fortnite.jpeg" alt="img" />
          <section className={style.vedio_actions_container}>
            <div className={style.bottom_action}>
              <input type="range" name="" id="" />
              <span>live</span>
            </div>
          </section>
        </div>
        {/* vedio container  */}
        <div className={style.stream_details}>
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni assumenda aspernatur voluptates voluptas voluptatibus</h2>
          <div className={style.stream_more_option}>
            <button><ThumbUpIcon/></button>
            <button><ThumbUpIcon style={{transform:"rotate(180deg)"}}/></button>
            <button onClick={()=>{sharefunc()}}><ShareIcon/></button>
          </div>
          <div className={style.streamer_owner_info}>
          <img src="/images/fortnite.jpeg" alt="img" />
          <p>user name</p>
          <button>follow</button>
          </div>
        </div>

      </section>

    {/* liove chat and many more */}
      <section className={style.stream_feature_section}>
        <nav className={style.stream_feature_nav}>
          <li>live chat</li>
        </nav>
        <div className={style.livechat_container}>

          <div className={style.live_user}>
            <div>
            <img src="/images/fortnite.jpeg" alt="img" />
              <small>user name</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, error voluptas quam rem praesentium 
            </p>
            </div>
          <div className={style.live_user}>
            <div>
            <img src="/images/fortnite.jpeg" alt="img" />
              <small>user name</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, error voluptas quam rem praesentium 
            </p>
            </div>
          <div className={style.live_user}>
            <div>
            <img src="/images/fortnite.jpeg" alt="img" />
              <small>user name</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, error voluptas quam rem praesentium 
            </p>
            </div>
          <div className={style.live_user}>
            <div>
            <img src="/images/fortnite.jpeg" alt="img" />
              <small>user name</small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, error voluptas quam rem praesentium 
            </p>
            </div>

          <div className={style.send_live_chat}>
            <div>
            <img src="/images/fortnite.jpeg" alt="img" />
              <p>user name</p>
            </div>
            <label>
            <textarea type="text" placeholder='type something ..' />
            <SendIcon/>
            </label>
          </div>
        </div>

      </section>
    </main>
    </>
  )
}

export default stream
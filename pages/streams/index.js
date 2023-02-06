import React , {useRef} from 'react'
import Streamcard from '../../Page/stream/Streamcard'
import style from "./styles/streamhome.module.scss"
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';

const index = () => {

  let scrollsection = new useRef();
  const handlescroll = (x)=>{
    scrollsection.current.scrollLeft += x
  }

  return (
    <>
    <main className={style.top_featured_streams}>
      <header>
        <h2>top fetured</h2>
        <p>top listed gamynt streamers</p>
      </header>
      <section className={style.featured_section} ref={scrollsection}>
      <button className={style.btn} onClick={()=>handlescroll(-500)}>
          <ArrowIcon/>
          </button>
    <Streamcard tittle="gammer hub" style={{flex: "0 0 25rem"}} />
    <Streamcard tittle="gamynt official" style={{flex:"0 0 25rem"}}/>
    <Streamcard tittle="gamynt official" style={{flex:"0 0 25rem"}}/>
    <Streamcard tittle="gamynt official" style={{flex:"0 0 25rem"}}/>
    <Streamcard tittle="gamynt official" style={{flex:"0 0 25rem"}}/>
    <Streamcard tittle="gamynt official" style={{flex:"0 0 25rem"}}/>
    <Streamcard tittle="gamynt official" style={{flex:"0 0 25rem"}}/>
    <button className={style.btn} onClick={()=>handlescroll(410)}>
        <ArrowIcon/>
        </button>
      </section>
    </main>
    <main className={style.explore_streams}>
      <header>
        <h2>explore</h2>
        <p>explore our hard worker gamynt streamer</p>
      </header>
      <section className={style.explore_section}>
    <Streamcard tittle="beginers"/>
    <Streamcard tittle="explore me also"/>
    <Streamcard tittle="beginers"/>
    <Streamcard tittle="explore me also"/>
    <Streamcard tittle="beginers"/>
    <Streamcard tittle="explore me also"/>
    <Streamcard tittle="beginers"/>
    <Streamcard tittle="explore me also"/>
      </section>
    </main>
    </>
  )
}

export default index
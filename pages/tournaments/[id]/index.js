import React from 'react'
import style from "./tournament_id.module.scss"
function index() {
  return (
    <div>
      <div className={style.banner} >
      <img src={"/banner_1.png"} />
      </div>
      <section className={style.container_info} >
      <div className={style.tournament_info} >
        <div className={style.organizer_info} >
        <div>
          <h1>Free Fire T3 Championship 2023</h1>
        </div>
          <img src={"/logo_mini.png"} />
          <div><h1>Organised By <strong>Gamynt</strong></h1></div>
          <button>View Club</button>
        </div>
        <div></div>
      </div>
      </section>
    </div>
  )
}

export default index
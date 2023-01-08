import React from 'react'
import style from "./styles/clubanyalistic.module.scss"

const ClubAnyalystic = () => {
  return (
    <main className={style.main_container}>

        <section className={style.member_status}>
            <div className={style.container}>
                <h2>total member</h2>
                <p>450</p>
            </div>
            <div className={style.container}>
                <h2>active memebr</h2>
                <p>450</p>
            </div>
            <div className={style.container}>
                <h2>tournament active</h2>
                <p>12</p>
            </div>
            <div className={style.container}>
                <h2>tournament completed</h2>
                <p>250</p>
            </div>
        </section>

        {/* graph anylastic */}
        <section className={style.graph_anylisis_contianer}>

        </section>

    </main>
  )
}

export default ClubAnyalystic
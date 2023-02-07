import React from 'react'
import style from "./styles/clubmember.module.scss"

const Clubmember = () => {
  return (
    <main className={style.member_info_container}>
        <h1 className={style.tittle}>club members</h1>
        <section className={style.table}>
        <header className={style.heading}>
            <p>choose</p>
            <p>sno.</p>
            <p>logo</p>
            <p>name</p>
            <p>follower</p>
            <p>following</p>
            <p>visit</p>
        </header>
        <section>
            <input type="checkbox"/>
            <small>1</small>
            <img src="/images/freefire.jpeg" alt="" />
            <h2>nam is name</h2>
            <p>29k</p>
            <p>29k</p>
            <button>view profile</button>
        </section>
        <section>
            <input type="checkbox"/>
            <small>1</small>
            <img src="/images/freefire.jpeg" alt="" />
            <h2>nam is name</h2>
            <p>29k</p>
            <p>29k</p>
            <button>view profile</button>
        </section>
        </section>
    </main>
  )
}

export default Clubmember
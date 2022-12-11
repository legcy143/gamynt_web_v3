import React from 'react'
import Signup from './Signup'
import style from "./styles/auth.module.scss"


const Authentication = () => {
  return (
    <main className={style.auth_main_container}>
            <section className={style.image_authentication}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia cumque doloremque libero? Ipsum nostrum esse natus praesentium sequi, ratione recusandae delectus minima alias perspiciatis modi, voluptatem iusto, beatae labore? </div>
                <img src="/login-bg-3.png" alt="" />
            </section>

            <section className={style.auth_card_ui}>
                <section className={style.auth_card}>
                    <header>
                        <h1>
                        gamynt login
                        </h1>
                    </header>
                    <nav>
                        <li className={style.active}>Sign up</li>
                        <li>Log in</li>
                    </nav>
                    <Signup/>
                </section>
            </section>
    </main>
  )
}

export default Authentication
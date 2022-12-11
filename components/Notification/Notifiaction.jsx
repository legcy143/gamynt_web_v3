import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import style from "./notify.module.scss"


const Notifiaction = () => {
  return (
    <main className={style.notification_main_container}>
        <header>
            <h1>notification</h1>
        </header>
        <section className={style.notification}>
            <img src="/images/freefire.jpeg" alt="img" />
            <div>
                <p>hello sid how are</p>
                <span>12:12 pm</span>
            </div>
        </section>
        <section className={style.notification}>
            <img src="/images/freefire.jpeg" alt="img" />
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas delectus et nulla unde aspernatur pariatur corrupti. Minus, blanditiis! Explicabo quasi enim doloribus similique rerum sunt repudiandae facilis inventore suscipit voluptas!</p>
                <span>12:12 pm</span>
            </div>
        </section>
        <section className={style.notification}>
            <img src="/images/freefire.jpeg" alt="img" />
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span>12:12 pm</span>
            </div>
        </section>
        <section className={style.notification}>
            <img src="/images/freefire.jpeg" alt="img" />
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span>12:12 pm</span>
            </div>
        </section>
{/* clear all btn */}
        <div className={style.clearnotification}>
        <CloseIcon/> clear All
        </div>
    </main>
  )
}

export default Notifiaction
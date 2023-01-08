import { useRouter } from 'next/router'
import React from 'react'
import style from "./styles/createclub.module.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoIcon from '@mui/icons-material/Photo';

const createclub = () => {
    let router = new useRouter()
  return (
    <main className={style.create_club_container}>
        <nav>
            <div onClick={()=>{router.push("/club")}}><ArrowBackIcon/> back</div>
        </nav>
        <form className={style.form_container}>
            <header className={style.images_section}>
        <div className={style.image_banner}>
        <label htmlFor="banenrimg"><PhotoIcon/>choose banner</label>
        <input type="file" id="banenrimg"/>
        </div>
        <div className={style.image_logo}>
        <label htmlFor="logoimg"><PhotoIcon/> logo</label>
        <input type="file" id="logoimg"/>
        </div>
            </header>
            <section className={style.input_section}>
                <div>
                    <p>club name</p>
                    <input type="text" placeholder='club name'/>
                </div>
                <div>
                    <p>description</p>
                    <textarea type="text" placeholder='club name'/>
                </div>
            </section>
            <button>create</button>
        </form>

    </main>
  )
}

export default createclub
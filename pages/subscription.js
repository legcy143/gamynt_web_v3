import React from 'react'
import style from "./styles/subscription.module.scss"
import SubIcon from '@mui/icons-material/GridGoldenratio';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscription = () => {
  return (
    <main className={style.subscription_main_container}>
      <ToastContainer style={{width:"min(20rem , 70%)"}}/>
      <section className={style.Subscription_section}>

        <div className={style.sub_card}>
          <header>
            <h1>
<SubIcon/> basic
            </h1>
          </header>
          <ul>
          <li>no ads</li>
          <li>no ads</li>
          <li>no ads</li>
          <li>free prime message</li>
          </ul>
          <footer>
            <h1>$10 <span>/ month</span></h1>
            <button onClick={()=>toast.error("something went wrong")}>choose</button>
          </footer>
        </div>

        <div className={style.sub_card}>
          <header>
            <h1>
<SubIcon/> pro
            </h1>
          </header>
          <ul>
          <li>no ads</li>
          <li>no ads</li>
          <li>no ads</li>
          <li>free prime message</li>
          </ul>
          <footer>
            <h1>$100 <span>/ month</span></h1>
            <button onClick={()=>toast.error("something went wrong")}>choose</button>
          </footer>
        </div>

      </section>
    </main>
  )
}

export default Subscription
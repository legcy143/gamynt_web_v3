import React from 'react'
import Walletnav from '../../Page/Wallet/Walletnav'
import style from "./styles/wallet.module.scss"

const Withdraw = () => {
  return (
    <main className={style.moneyaction_container_main}>
    <Walletnav tittle={"withdraw"}/>
<h1>with draw</h1>
  </main>
  )
}

export default Withdraw
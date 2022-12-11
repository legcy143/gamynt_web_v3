import React , {Fragment, useState} from 'react'
import style from "./styles/auth.module.scss"
import PhoneIcon from '@mui/icons-material/Phone';

const Login = () => {
  let btntxt = "next";
  const [phoneno, setphoneno] = useState(0)
  const formsubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <>
    <form className={style.auth_form} onSubmit={formsubmit}>
    <div className={style.form_input_box}>
          <PhoneIcon/>
          <input type="text" placeholder='phone number'/>
      </div>
      <div className={style.otp_box}>
          <input type="text" placeholder='0'/>
          <input type="text" placeholder='0'/>
          <input type="text" placeholder='0'/>
          <input type="text" placeholder='0'/>
          <input type="text" placeholder='0'/>
        </div>
        <button>{btntxt}</button>
    </form>
    </>
  )
}

export default Login
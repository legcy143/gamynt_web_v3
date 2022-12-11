import React , {Fragment} from 'react'
import style from "./styles/auth.module.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Https';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signup = () => {
  let btntxt = "next";
  const formsubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Signup
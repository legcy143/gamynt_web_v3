import React , {Fragment} from 'react'
import style from "./styles/auth.module.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signup = () => {
  return (
    <Fragment>
      <form className={style.auth_form}>
        <div className={style.form_input_box}>
          <PersonIcon/>
          <input type="text" placeholder='name'/>
        </div>
        <div className={style.form_input_box}>
          <EmailIcon/>
          <input type="text" placeholder='email'/>
        </div>
        <div className={style.form_input_box}>
          <LockIcon/>
          <input type="password" placeholder='password'/>
          <VisibilityIcon/>
        </div>
        <button>login</button>
      </form>
    </Fragment>
  )
}

export default Signup
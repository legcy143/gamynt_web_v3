import React , {useState} from 'react'
import Profile from '../Page/Account/Profile'


// if login is true then render profile component else render authentication component
const account = () => {
    // const [logincheck, setlogincheck] = new useState(true)

  return (
    <main>
      <Profile />
    </main>
  )
}

export default account
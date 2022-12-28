import React , { useState , useEffect }from 'react';
import '../styles/globals.scss'
import '../styles/app.scss'
import NavBar from '../components/Navbar/NavBar'
import TopNavBar from '../components/Navbar/TopNavBar'
import { useRouter } from 'next/router'
import { store } from '../reduxstore/store'
import { Provider } from 'react-redux'



function MyApp({ Component, pageProps }) {
  const [isnav, setisnav] = useState(1)
  let router = useRouter()
  let path = router.pathname;
  let hidepath = ["/club/chat" , "/tournaments/register"]
  // condition for not showing nav
  useEffect(() => {
    {path ==="/tournaments/register" ?setisnav(1):setisnav(0)}
  }, [path])
  return (
    <>
   <Provider store={store}>
    {
      isnav === 0?
    <main className='page_view'>
    <NavBar/>
    <section className="page_view_section">
      <TopNavBar/>
      <Component {...pageProps} />
    </section>
</main>
       :
       <Component {...pageProps} />
      }
      </Provider>
    </>
  )
}

export default MyApp

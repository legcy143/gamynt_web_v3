import React , { useState , useEffect }from 'react';
import '../styles/globals.scss'
import '../styles/app.scss'
import NavBar from '../components/Navbar/NavBar'
import TopNavBar from '../components/Navbar/TopNavBar'
import { useRouter } from 'next/router'
import { store } from '../reduxstore/store'
import { Provider } from 'react-redux'

import "nprogress/nprogress.css";
import NProgress from 'nprogress';
NProgress.configure({showSpinner:false})


function MyApp({ Component, pageProps }) {
  const [isnav, setisnav] = useState(1)
  let router = useRouter()
  let path = router.pathname;

  // condition for not showing nav
  // http://localhost:3000/club/chat
  useEffect(() => {
    switch (path) {
      case ("/club/chat"):
        setisnav(1);
        break;

      case ("/tournaments/register"):
        setisnav(1);
        break;

      case ("/club/dashboard"):
        setisnav(1);
        break;

      case ("/club/createclub"):
        setisnav(1);
        break;
    
      default:
        setisnav(0)
        break;
    }
  }, [path])

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  NProgress.start());
    router.events.on('routeChangeComplete', () =>  NProgress.done());
    router.events.on('routeChangeError', () =>  NProgress.done());
  }, []);

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


// for maintain speed of application
// const appwithmainnav = ({ Component, pageProps })=>{

// }

export default MyApp

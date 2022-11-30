import '../styles/globals.scss'
import '../styles/app.scss'
import NavBar from '../components/Navbar/NavBar'
import TopNavBar from '../components/Navbar/TopNavBar'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  const [isnav, setisnav] = useState(0)
  let router = useRouter()
  let path = router.pathname;
  // condition for not showing nav
  useEffect(() => {
    if (path == "/account/authentication") {
      setisnav(1)
    }
    else{
      setisnav(0)
    }
  }, [path])
  return (
    <>
    <Head>
      <meta name='theme-color' content='rgb(74, 138, 241)'/>
    </Head>
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
    </>
  )
}

export default MyApp

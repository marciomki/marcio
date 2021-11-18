import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Title from '../components/Title.js'
import Options from '../components/Options.js'
import Navbar from '../components/Nav'
import React, {useState, useCallback} from 'react';
import {useSpring, animated} from 'react-spring'

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSelection, setOpenSelection] = useState(0);

  const callback = useCallback((openSelection) => {
    setOpenSelection(openSelection);
  }, []);

  const burgerAnimation1 = useSpring ({
      config: {
          duration: 100   
      },
      transform: openMenu ? 'rotate(45deg)' : 'rotate(0deg)',
      top: openMenu ? '24px' : '18px',
  })
  const burgerAnimation3 = useSpring ({
      config: {
          duration: 100   
      },
      opacity: openMenu ? '0' : '1',
  })
  const burgerAnimation2 = useSpring ({
      config: {
          duration: 100   
      },
      transform: openMenu ? 'rotate(-45deg)' : 'rotate(0deg)',
      bottom: openMenu ? '24px' : '16px',
  })

  const fixPage = useSpring ({
    config: {
        duration: 100   
    },
    position: openMenu ? 'fixed' : 'absolute',
})

  return (
    <animated.div className='container-fluid' style={fixPage}>
      <Head>
        <title>Márcio Iwamoto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar openMenu={openMenu} parentCallback={callback} setOpenMenu={setOpenMenu}/>
      <button className={styles.menuBtn} onClick={() => setOpenMenu(prev => !prev)}>
        <animated.span style={burgerAnimation1}></animated.span>
        <animated.span style={burgerAnimation3}></animated.span>
        <animated.span style={burgerAnimation2}></animated.span>
      </button>

      <main className={[styles.main]}>
        <Title tname="Márcio's portfolio" />
        <hr className={['container']} />
        <div className={['container']}>
          <Options selection={openSelection} />
        </div>
      </main>
      <footer className={styles.footer}>
        Made by Márcio Iwamoto®
      </footer>
    </animated.div>
  )
}
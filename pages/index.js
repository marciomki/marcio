import Head from 'next/head'
import Image from 'next/image'
import Button from '/components/Button.js'
import styles from '../styles/Home.module.scss'
import Techskills from './menu/TechnicalSkills.js'
import Title from '/components/Titzle.js'

export default function Home() {
  return (
    <div className='container-fluid'>
      <Head>
        <title>Marcio&apos;s portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={[styles.main]}>
        <Title tname="Marcio's portfolio" />
        <hr className={['container']}/>
        <div className={['container']}>
          <div className={'row'}>
            <Button menuName='Technical Skills' modaltitle='Test modal1' selectedmenu={<Techskills />}/>
            <Button menuName='Work experience' modaltitle='Test modal2'/>
            <Button menuName='Education' modaltitle='Test modal3'/>
            <Button menuName='Hobbies' modaltitle='Test modal4'/>  
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

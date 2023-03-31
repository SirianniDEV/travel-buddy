import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router';

import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Button from '../components/Button/button'
import Text from '../components/Text'
import PostCard from '../components/PostCard';

export default function Home() {

  const r = useRouter();

  const Post = () => {
      r.push("/post")
  }

  const Explore = () => {
    r.push("/explore")
}

  return (
    <div className={styles.container}>
      <Header/>
        <main className={styles.main}>

          <Image src='./Logo.svg' width={300} height={200}/>
          <Title txt='Country'/>
          
          
          <div className={styles.grid}>

           <PostCard/>
          </div>
         
        
        </main>
      <Footer/>
    </div>
  )
}
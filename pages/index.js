import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router';

import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Button from '../components/Button/button'
import Text from '../components/Text'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'


export default function Home() {

  const r = useRouter();

  const Post = () => {
      r.push("/addReview")
  }

  const Explore = () => {
    r.push("/explore")
}

  return (
    <div className={styles.container}>
      <Header/>
        <main className={styles.main}>

          <Image src='./Logo.svg' width={300} height={200}/>
          <Title txt='Find your next destination'/>
          <div className={styles.grid}>
          <Button txt='Explore'  onClick={()=>Explore()} />
          <Button txt='Post' onClick={()=>Post()}/>
          </div>

          <a href='/auth'>Sign In</a>
          
        
        </main>
      <Footer/>
    </div>
  )
}

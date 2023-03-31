import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Button from '../components/Button/button'
import Text from '../components/Text'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'


export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
        <main className={styles.main}>

        <Image src='./Logo.svg' width={200} height={200}/>
        <PostForm/>
        
        </main>
      <Footer/>
    </div>
  )
}
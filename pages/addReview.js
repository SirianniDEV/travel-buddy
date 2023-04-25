import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useRouter, useState} from 'next/router';

import axios from 'axios';

import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Button from '../components/Button/button'
import Text from '../components/Text'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'

//review = code

export default function addReview({ user }) {
  const router = useRouter();

  //post: { is, name, city, country, dates, review }
  const posts = []

  const handleSubmit = async({ name, review}) => {
    const {data} = await axios.post('/api/post', {
       name, 
       review,
      })
    console.log('post')
    console.log(data)

    // router.push('/explore')
  }

  return (
    <div className={styles.container}>
      <Header/>
        <main className={styles.main}>

        <Image src='./Logo.svg' width={200} height={200}/>
        <PostForm onSubmit={handleSubmit}/>

        
        </main>
      <Footer/>
    </div>
  )
}
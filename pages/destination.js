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
import PostReview from '../components/PostReview';

export default function Home() {

  const r = useRouter();

  //post: { is, name, city, country, dates, review }
  const posts = []

  const Post = () => {
      r.push("/addReview")
  }

  const Explore = () => {
    r.push("/explore")
}

  return (
    <div>
      <Header/>
          <div className={styles.header}>
            <Button txt='🡸' onClick={()=>Explore()}/>
            <div className={styles.destination}>
              <Title align='left'size='100px' txt='City' />
              <Text color='#f5f5f5' align='left' size='50px' txt='Country'/>
            </div>
          </div>
        <main className={styles.main}>
          
          <div className={styles.grid}>
           <PostReview/>
           {posts?.map(post => (
            <div key={post.id}>
              <PostReview
                username={post.username}
                date={post.date}
                review={post.review}
                // post={post}
                href={`/code/${post.id}`}/>
            </div>
           ))}
          </div>
         
        <Button txt='Add Review' onClick={()=>Post()}/>
        </main>
      <Footer/>
    </div>
  )
}
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"

import styles from '../styles/Home.module.css'
import Image from "next/image"
import Button from "../components/Button/button"
import Title from "../components/Title"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email}` <br /> */}
        <div className={styles.main}>
            <Title txt="Signed in as:"/>{session.user.email} <br />
            <div className={styles.profile}>
            <Image className={styles.profileImage} src={session.user.image} width={200} height={200}/>
            {session.user.name} <br />
            </div>
            <Button txt="Sign out" onClick={() => signOut()}></Button>
        </div>
      </>
    )
  }

return (
    <>
      <div className={styles.main}>
        <Title txt='You are not signed in'/>
        <Button txt="Sign in" onClick={() => signIn()}></Button>
      </div>
    </>
  )
}

//this used to work then idk what happened :/
export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
    
  if (!session) {
    return {   
        redirect: {
            destination: '/api/auth/signin',
            permanent: false,
        },
    };
}
    return {
        props: { 
            session, 
        },
    };
}
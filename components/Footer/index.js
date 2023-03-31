import styled from 'styled-components';
import Image from 'next/image'

const Container = styled.footer
`
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: space-between;
    align-items: center;
    color: #f5f5f5;
`
const Link  = styled.a
`
    display: flex;
    justify-content: center;
    align-items: center;
   
`
const Logo = styled.span
`
    height: 1em;
    margin-left: 0.5rem;
`

export default function Footer () {
    return(
        <Container>
          <Link href='https://port.sofiasirianni.ca'
            target="_blank">
            <p>Developed by {''} Sofia</p>
          </Link>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Logo>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Logo>
        </Link>
      </Container>
    )
}
import styled from "styled-components";
import Image from 'next/image';

const Container = styled.div
`
    // min-width: 300px;
    // min-height: 400px;
    background: #F5f5f5;
    border: 20px dashed #F17878;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    margin: 20px;
`
const Stamp = styled.div
`
    display:flex;
    justify-content: flex-end;
`

export default function PostCard(props){

    return(
       <Container>
            <Stamp>
                <img src='./stamp.svg'/>
            </Stamp>
        {props.children}
       </Container>
    )
}
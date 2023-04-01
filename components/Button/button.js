import styled from 'styled-components';

const Container = styled.button
`
    background:${props=>props.bgColor||"#f5f5f5"};
    color:${props=>props.color||"#000000"};
    border-radius: 50px;
    border: none;
    font-size: 20px;
    padding: 20px 40px 20px 40px;
    
    font-family: 'Open Sans';
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 20px;

    &:hover{
        background-color: #FAD690;

    }
`


export default function Button({
    txt='Button',
    bgColor='#f5f5f5',
    color='#000000',
    onClick=()=>{},
}){

    function handleClick(){
        console.log('button clicked!')
    }
    return (
        <Container 
            onClick={onClick}
            bgColor={bgColor} 
            color={color}>
            {txt}
        </Container>
    )
}
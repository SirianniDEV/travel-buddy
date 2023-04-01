import styled from 'styled-components';

const AppTitle = styled.h1
`
    font-size:${props=>props.size|| "40px"};
    font-weight: 400;
    text-align:  ${props=>props.align||"center"};
    font-family:  'ABeeZee', sans-serif;
    color: ${props=>props.color||"#f5f5f5"};
    padding: 10px;
    margin: 5px;
    padding: 0px;
`

export default function Title({
    txt='Title',
    align='center',
    size='40px',
    color='#f5f5f5',
}){
    return (
        <AppTitle align={align} size={size} color={color}>
            {txt}
        </AppTitle>
    )
}
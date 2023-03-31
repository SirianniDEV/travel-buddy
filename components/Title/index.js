import styled from 'styled-components';

const AppTitle = styled.h1
`
    font-size: 40px;
    font-weight: 400;
    text-align: center;
    font-family:  'ABeeZee', sans-serif;
    color: #f5f5f5;
    padding: 10px;
    margin: 5px;
    padding: 0px;
`

export default function Title({
    txt='Title',
}){
    return (
        <AppTitle>
            {txt}
        </AppTitle>
    )
}
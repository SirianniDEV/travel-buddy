import styled from 'styled-components';

const AppText = styled.p
`
    font-size: 18px;
    font-weight: ${props=>props.weight||400};
    padding: 10px;
    font-family: 'Open Sans', sans-serif;
    color: ${props=>props.color||"#000000"};
    margin: 5px;
    padding: 0px;

`

export default function Text({
    txt='Text',
    color='#000000',
    weight="400",
}){
    return (
        <AppText color={color} weight={weight}>
            {txt}
        </AppText>
    )
}
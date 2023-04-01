import styled from 'styled-components';

const AppText = styled.p
`
    font-size:${props=>props.size|| "18px"};
    font-weight:${props=>props.weight||400};
    padding: 10px;
    font-family: 'Open Sans', sans-serif;
    color:${props=>props.color||"#f5f5f5"};
    margin: 5px;
    padding: 0px;

`

export default function Text({
    txt='Text',
    color='#f5f5f5',
    weight="400",
    size="18px",
}){
    return (
        <AppText color={color} size={size} weight={weight}>
            {txt}
        </AppText>
    )
}
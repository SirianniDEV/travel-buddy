import styled from "styled-components";

import PostCard from "../PostCard";
import Text from "../Text";
import Button from "../Button/button";
import Title from "../Title";

const Name = styled.h1
`
font-size: 40px;
font-weight: 400;
text-align:  left;
font-family:  'ABeeZee', sans-serif;
color:#000000;
padding: 10px;
margin: 5px;
padding: 0px;
`
const Date = styled.p
`

`
const Review = styled.p
`
font-family: 'Caveat', cursive;
font-size: 30px;
`

export default function PostReview({
    username='Username',
    date='March 15 2023 to March 30 2023',
    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac magna sollicitudin lorem fringilla cursus. Ut fringilla ligula sed dolor gravida facilisis quis nec est. "

}){
    return(
        <PostCard>
            <Name>{username}</Name>
            <Date>{date}</Date>

            <Review>{review}</Review>
        </PostCard>

    )
}
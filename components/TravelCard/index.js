import styled from "styled-components";
import Image from 'next/image';
import Button from "../Button/button";
import Text from "../Text";
import Title from "../Title";

const Figure = styled.figure
`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  min-width: 3oopx;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  border-radius: 100px 0px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`
const CardTitle = styled.h1
`
    font-size: 40px;
    font-weight: 400;
    text-align: left;
    font-family:  'ABeeZee', sans-serif;
    color: #f5f5f5;
    margin: 0px 15px 10px 0;
    padding: 0px;;
    z-index: 999;
`
const FigCaption = styled.figcaption
`
    align-items: left;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 20px;
    background-color: #90AB86;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    color: white;
    line-height: 1;
    transition: 0.25s;
    &:hover {
        bottom: 0;
    }
`
const Img = styled.img
`
    transition: all 0.25s ease-out;
    &:hover{
        transform: scale(1.25);
    }
`

export default function TravelCard({
    title='Country',
    href='/'
}){

    return(
        <Figure>
        <Img src="https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        <FigCaption>
            <CardTitle>{title}</CardTitle>
            {/* <Button/> */}
            <a href={href} >See Reviews 🡲</a>
        </FigCaption>
    </Figure>
    )
}
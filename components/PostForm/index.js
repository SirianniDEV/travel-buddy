import styled from "styled-components";

import PostCard from "../PostCard";
import Text from "../Text";
import Button from "../Button/button";

const Form = styled.form
`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
const Container = styled.div
`
    display:flex;
    jutsify-content: center;
    flex-driection: row;
`
const FormButton = styled.button
`
    background-color: #F17878; 
    color:#f5f5f5;
    border-radius: 50px;
    border: none;
    font-size: 20px;
    padding: 20px 40px 20px 40px;
    
    font-family: 'Open Sans';
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 20px;

    &:hover{
        background-color: #FAD690;
        color:#000000;
    }
`

const Input = styled.input
`
    font-family: 'Caveat', cursive;
    font-size: 30px;
    background-color: transparent;
    padding:5px;
    margin-bottom:20px;
    border:none;
    border-bottom:2px #000000 dotted;
    width:100%;
    &:focus {
        outline:none;
      }
`
const Message = styled.textarea
`
    font-family: 'Caveat', cursive;
    font-size: 30px;
    background-color: transparent;
    padding:5px;
    margin-bottom:50px;
    border:none;
    // border-bottom:2px #000000 dotted;
    width:100%;
    background-attachment: local;
    background-image:
        repeating-linear-gradient(transparent, transparent 30px, #000000 30px, #000000 31px, transparent 31px);
    line-height: 28px;
    padding: 8px 10px;
    &:focus {
        outline:none;
    }
`

export default function PostForm({
    onSubmit=()=>{},
}){
    return(
        <Form>
            <PostCard>

                <Text color='#000000' weight='700' txt="First Name:"/> <Input type="text" id="Name"/>

                <Text color='#000000' weight='700' txt="Where did you Travel?"/>
                <Container>
                    <Text color='#000000' txt="City:"/> <Input type="text" id="City"/>
                    <Text color='#000000' txt="Country:"/> <Input type="text" id="Country"/>
                </Container>

                <Text color='#000000' weight='700' txt="When did you Travel?"/>
                <Container>
                     <Input type="date" id="Start-Date" name="Start-Date"/> <Text txt="to"/>  <Input type="date" id="End-Date" name="End-Date"></Input>
                </Container>
                
                <Text color='#000000' weight='700' txt="How did you enjoy your trip?"/> <Message name="message" cols="22" rows="3" id="Message"></Message>
            </PostCard>
            {/* <Input type="submit" value="Submit"/> */}
            <FormButton onSubmit={onSubmit}>Send!</FormButton>
         </Form>

    )
}
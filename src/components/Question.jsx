import { Box } from "@mui/material"
import styled from "@emotion/styled"
import QuestionBtn from "./QuestionBtn"

import adventure from "../assets/adventure.svg"

const BoxQ = styled(Box)`

    width: 100%;
    max-width: 400px;

    .title{
        display: flex;

        h1{
            font-size: 1.5rem;
            font-weight: bold;
            position: relative;
            top: 55px;
        }

        img{
            width: 150px;
            position: relative;
            right: -6%;
            top: 40px;
        }
    }
    
    .question{

        padding: 64px 32px 32px 32px;

        background-color: rgba(255, 255, 255, 0.87);
        color: #242424;

        border-radius: 20px;
    
        
        div{
            background-color: none;
        }
    }
    .options-box{
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .active{

    }
`

const url = 'https://restcountries.com/v3.1/all'

const Question = () =>{



    
    return(
        <BoxQ>
            <div className="title">
                <h1>COUNTRY QUIZ</h1>
                <img src={adventure}/>
            </div>
            <div className="question">
                <h2>Question</h2>
                <div className="options-box">
                    <QuestionBtn letter = {'a'} question = {'a'}></QuestionBtn>
                    <QuestionBtn letter = {'b'} question = {'b'}></QuestionBtn>
                    <QuestionBtn letter = {'C'} question = {'c'}></QuestionBtn>
                    <QuestionBtn letter = {'D'} question = {'d'}></QuestionBtn>
                </div>
            </div>
        </BoxQ>
    )
}

export default Question
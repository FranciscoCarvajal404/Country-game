/* eslint-disable react/prop-types */
import { Box } from "@mui/material"
import styled from "@emotion/styled"
import QuestionBtn from "./QuestionBtn"

import adventure from "../assets/adventure.svg"

const BoxQ = styled(Box)`

    width: 100%;
    max-width: 464px;

    .title{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        position: relative;
        top: 40px;

        h1{
            color: #F2F2F2;
            font-size: 1.55rem;
            font-family: Poppins;
            font-weight: 700;
            text-transform: uppercase;
        }

        img{
            width: 10.125rem;
            height: 7.25rem;
            flex-shrink: 0;
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

    @media (width >= 1024px){
        .title{
            h1{
                font-size: 2.25rem;
            }
        }
    }
`

let i = Math.floor(Math.random()*250)

const Question = ({paises}) =>{
    
    const q1 = `What is the capital of ${paises ? paises[i].name.common : '...'}`

    
    return(
        <BoxQ>
            <div className="title">
                <h1>COUNTRY QUIZ</h1>
                <img src={adventure}/>
            </div>
            <div className="question">
                <h2>{q1}</h2>
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
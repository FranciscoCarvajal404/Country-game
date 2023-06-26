/* eslint-disable react/prop-types */
import { Box } from "@mui/material"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"

import winners from "../assets/winners.svg"

const BoxQ = styled(Box)`

    width: 100%;
    max-width: 464px;
    display: flex;
    flex-direction: column;

    h1{
        color: #F2F2F2;
        font-size: 1.55rem;
        font-family: Poppins;
        font-weight: 700;
        text-transform: uppercase;
        align-self: flex-start;
    }

    img{
        width: 14.875rem;
        height: 7.25rem;
        flex-shrink: 0;
        margin-bottom: 4rem;
    }
    
    .question{

        padding: 2.6rem 2rem;

        background-color: rgba(255, 255, 255, 0.87);
        color: #242424;

        border-radius: 20px;

        h2{
            color: #1D355D;
            font-size: 3rem;
            font-family: Poppins;
            font-weight: 700;
            margin: 0;
        }

        p{
            color: #1D355D;
            font-size: 1.125rem;
            margin: 0;

            span{
                color: #6FCF97;
                font-weight: bold;
                font-size: 2rem;
            }
        }
    
        
        div{
            background-color: none;
        }
    }
    .options-box{
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .div-btn{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .next{
        margin-top: 43px;
        background-color: #EAEBF7;
        border: 2px solid #1D355D;
        color: #1D355D;
        align-self: flex-end;

        :hover{
            outline: none;
            background-color: #eea022;
            border-color: #eea022;
            color: #EAEBF7;
            
        }
    }

    @media (width >= 1024px){
        .title{
            h1{
                font-size: 2.25rem;
            }
        }
    }
`


const GameOver = ({score, setScore}) =>{

    const navigate = useNavigate()

    const tryAgain = ()=>{
        setScore(0)
        navigate('/')
    }

    return(
        <BoxQ>
                <h1>COUNTRY QUIZ</h1>
            <div className="question">
                <img src={winners}/>
                <h2>Results</h2>
                <p>You got <span>{score}</span> correct answers</p>
                <div className="div-btn">
                    <button className="next" onClick={()=>tryAgain()}>Try again</button>
                </div>
            </div>
        </BoxQ>
    )
}

export default GameOver
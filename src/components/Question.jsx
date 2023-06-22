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


const Question = ({paises}) =>{
    
    
    //Renderizacion de botones con sus opciones
    let i = Math.floor(Math.random()*250)
    let j = Math.floor(Math.random()*250)
    let k = Math.floor(Math.random()*250)
    let l = Math.floor(Math.random()*250)
    let order = [0,1,2,3]
    let opciones = [
        paises && (paises[i].capital ? paises[i].capital : 'No capital'), 
        paises && (paises[j].capital ? paises[j].capital : 'No capital'),
        paises && (paises[k].capital ? paises[k].capital : 'No capital'),
        paises && (paises[l].capital ? paises[l].capital : 'No capital')
    ]
    const fourBtns = Array.from({length:4}, (_,index) =>{
        const letters = ['A','B','C','D']
        console.log(order);
        
            let m = Math.floor(Math.random()*(4-index))
            let position = order[m]
            order.splice(m, 1)
            console.log(m);
            console.log(position);
            
            return <QuestionBtn key={index} letter={letters[index]} question={opciones[position]} position={position}></QuestionBtn>
        
    }) 

    const q = `What is the capital of ${paises ? paises[i].name.common : '...'}?`

    return(
        <BoxQ>
            <div className="title">
                <h1>COUNTRY QUIZ</h1>
                <img src={adventure}/>
            </div>
            <div className="question">
                <h2>{q}</h2>
                <div className="options-box">
                    {fourBtns}
                </div>
            </div>
        </BoxQ>
    )
}

export default Question
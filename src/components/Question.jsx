/* eslint-disable react/prop-types */
import { Box } from "@mui/material"
import styled from "@emotion/styled"
import QuestionBtn from "./QuestionBtn"

import adventure from "../assets/adventure.svg"
import { useEffect, useState } from "react"

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
const url = 'https://restcountries.com/v3.1/all'

const Question = () =>{

    const [paises, setPaises] = useState()
    const [next, setNext] = useState()
    const [nextBtn, setNextBtn] = useState(false)

    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>setPaises(data))
    },[])


    //Renderizacion de botones con sus opciones
    let i = Math.floor(Math.random()*250)
    let j = Math.floor(Math.random()*250)
    let k = Math.floor(Math.random()*250)
    let l = Math.floor(Math.random()*250)
    let order = [0,1,2,3]
    let opciones = [
        paises && (paises[i].capital ? [paises[i].capital, 'correct'] : ['No capital']), 
        paises && (paises[j].capital ? [paises[j].capital, 'incorrect'] : ['No capital']),
        paises && (paises[k].capital ? [paises[k].capital, 'incorrect'] : ['No capital']),
        paises && (paises[l].capital ? [paises[l].capital, 'incorrect'] : ['No capital'])
    ]
    const fourBtns = Array.from({length:4}, (_,index) =>{
        const letters = ['A','B','C','D']
        
            let m = Math.floor(Math.random()*(4-index))
            let position = order[m]
            order.splice(m, 1) //Determina la pregunta que se enseñará en el botón correspondiente
            
            return <QuestionBtn key={index} letter={letters[index]} opcion={paises && opciones[position][0]} value={paises && opciones[position][1]} setNext= {setNext} setNextBtn= {setNextBtn}></QuestionBtn>
        
    }) 
    

    const q = `What is the capital of ${paises ? paises[i].name.common : '...'}?`

    //Componente principal
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
                {
                    nextBtn && (next ? <button>Next</button> : <button>Finish</button>)
                }
            </div>
        </BoxQ>
    )
}

export default Question
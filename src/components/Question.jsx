/* eslint-disable react/prop-types */
import { Box } from "@mui/material"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
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

        padding: 4.25rem 2rem 2rem 2rem;

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

    .div-btn{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .next{
        display: none;
        margin-top: 43px;
        background-color: #F9A826;
        border-color: #F9A826;
        color: rgba(255, 255, 255, 0.87);
        align-self: flex-end;
        box-shadow: 0px 2px 4px 0px rgba(252, 168, 47, 0.40);

        :hover{
            outline: none;
            background-color: #eea022;
            border-color: #eea022;
            
        }
    }

    .flag-q{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .flag{
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

const Question = ({handleScore}) =>{

    const [paises, setPaises] = useState()
    const [score, setScore] = useState(0)

    const navigate = useNavigate()


    const nextQuestion = (e) =>{
        const buttons = e.target.parentElement.previousSibling.children;
        const nextBtn = e.target
        const next = e.target.value
        setScore(score+1)

        if (next == 'correct') {
            for (let index = 0; index <=3; index++) {
                buttons[index].removeAttribute('disabled')
                buttons[index].classList.remove('incorrect')
                buttons[index].classList.remove('correct')
            }

            nextBtn.style.display = 'none'
            
        }else{
            handleScore(score)
            return navigate('/Game-over')
        }
    }

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

    const q1 = `What is the capital of ${paises ? paises[i].name.common : '...'}?`
    const q2 = `Which country does this flag belong to?`
    const q = [q1,q2]
    let qi =Math.floor(Math.random()*2)

    let order = [0,1,2,3]
    let opciones = [
        paises && (paises[i] ? [paises[i].capital ? paises[i].capital : ['No capital'] , paises[i].name.common, 'correct'] : ['No country']), 
        paises && (paises[j] ? [paises[j].capital ? paises[j].capital : ['No capital'], paises[j].name.common, 'incorrect'] : ['No country']),
        paises && (paises[k] ? [paises[k].capital ? paises[k].capital : ['No capital'], paises[k].name.common, 'incorrect'] : ['No country']),
        paises && (paises[l] ? [paises[l].capital ? paises[l].capital : ['No capital'], paises[l].name.common, 'incorrect'] : ['No country'])
    ]
    const fourBtns = Array.from({length:4}, (_,index) =>{
        const letters = ['A','B','C','D']
        
            let m = Math.floor(Math.random()*(4-index))
            let position = order[m]
            order.splice(m, 1) //Determina la pregunta que se enseñará en el botón correspondiente
            
            return <QuestionBtn key={index} letter={letters[index]} opcion={paises && opciones[position][0]} opcion2={paises && opciones[position][1]}value={paises && opciones[position][2]} qi={qi}></QuestionBtn >
        
    }) 
    
    

    //Componente principal
    return(
        <BoxQ>
            <div className="title">
                <h1>COUNTRY QUIZ</h1>
                <img src={adventure}/>
            </div>
            <div className="question">
                <h2>{
                    q[qi] == q1 ? q1 : 
                    <div className="flag-q">
                        <p className="flag"/>{paises ? paises[i].flag : '...'}<p/>
                        {q2}
                    </div>
                }</h2>
                <div className="options-box">
                    {fourBtns}
                </div>
                <div className="div-btn">
                    <button className="next" onClick={(e)=>nextQuestion(e)}>Next</button>
                </div>
            </div>
        </BoxQ>
    )
}

export default Question
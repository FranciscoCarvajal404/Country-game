/* eslint-disable react/prop-types */
import { Button } from "@mui/material"
import styled from "@emotion/styled"

const ButtonQ = styled(Button)`
    display: flex;
    justify-content: flex-start;

    color: rgba(96, 102, 208, 0.70);
    font-weight: 500;

    border-radius: 10px;

    border: 2px solid rgba(96, 102, 208, 0.70);

    tab-size: 8;
    font-family: 'Poppins', sans-serif; 

    :enabled:active{
        background-color: #F9A826;
        border-color: #F9A826;
        color: rgba(255, 255, 255, 0.87);
    }

    :hover{
        background-color: none;
        border: 2px solid rgba(96, 102, 208, 0.70);
        opacity: 1;
    }

    :focus{
        outline: none;
    }

    span{
        font-weight: 600;
        margin-right: 32px;
    }


`


const QuestionBtn = ({letter, opcion, value}) =>{

    //Funcion para determinar si la respuesta es correct o no
    const isCorrect = (e) =>{
        const btn = e.target
        const rest = btn.parentElement.children
        const next = btn.parentElement.nextSibling.children[0]
        if(btn.value == 'correct'){
            btn.classList.add('correct')
            next.style.display = 'block'
            next.setAttribute('value','correct')
            for (let index = 0; index <= 3; index++) {
                rest[index].setAttribute('disabled','disabled')
            }
        }else{
            btn.classList.add('incorrect')
            next.style.display = 'block'
            next.setAttribute('value','incorrect')
            for (let index = 0; index <= 3; index++) {
                if (rest[index].value == 'correct') {
                    rest[index].classList.add('correct')
                }
                rest[index].setAttribute('disabled','disabled')
            }
        }
    }

    return(
        <ButtonQ variant="outlined" onClick={(e)=>isCorrect(e)} value={value}>
            <span>{letter}</span>
            {opcion}
        </ButtonQ>
    )
}

export default QuestionBtn
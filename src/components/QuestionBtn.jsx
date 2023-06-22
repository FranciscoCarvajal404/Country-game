/* eslint-disable react/prop-types */
import { Button } from "@mui/material"
import styled from "@emotion/styled"

const ButtonQ = styled(Button)`
    display: flex;
    justify-content: flex-start;

    color: #5256a1;
    font-weight: 500;

    border-radius: 10px;

    border: 1px solid #5256a1;

    tab-size: 8;
    font-family: 'Poppins', sans-serif; 

    :active{
        background-color: #F9A826;
        border-color: #F9A826;
        color: rgba(255, 255, 255, 0.87);
    }

    :hover{
        background-color: none;
        border: 1px solid #5256a1;
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

//Funcion para determinar si la respuesta es correct o no
const isCorrect = (e) =>{
    const btn = e.target
    if(btn.value == 'correct'){
        btn.classList.add('correct')
    }else{
        btn.classList.add('incorrect')
    }
}

const QuestionBtn = ({letter, opcion, value}) =>{
    return(
        <ButtonQ variant="outlined" onClick={(e,value)=>isCorrect(e,value)} value={value}>
            <span>{letter}</span>
            {opcion}
        </ButtonQ>
    )
}

export default QuestionBtn
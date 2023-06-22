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

    :hover{
        background-color: #F9A826;
        border-color: #F9A826;
        color: rgba(255, 255, 255, 0.87);
    }

    :focus{
        outline: none;
    }

    span{
        font-weight: 600;
        margin-right: 32px;
    }

`

const QuestionBtn = ({letter, question}) =>{
    return(
        <ButtonQ variant="outlined">
            <span>{letter}</span>
            {question}
        </ButtonQ>
    )
}

export default QuestionBtn
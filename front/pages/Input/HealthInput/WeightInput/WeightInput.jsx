import React from 'react';
import Title from '../../../../Components/Title';
import Nav from '../../../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function WeightInput() {
    const navigate = useNavigate();

    return (
        <>
            <S.Container>
                <Title />


                <Nav />
            </S.Container>
        </>
    )
}
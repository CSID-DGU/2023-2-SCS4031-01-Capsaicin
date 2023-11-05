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

                <S.Info>
                    <S.Backward src="../../../assets/images/backward.png" onClick={() => navigate(`/inputmain`)} />
                    <S.InputTitle>몸무게 입력</S.InputTitle>
                </S.Info>

                <S.JoinBox>
                    <S.JoinContent>측정일자</S.JoinContent>
                    <S.JoinInput type="date"></S.JoinInput>
                </S.JoinBox>


                <S.JoinBox>
                    <S.JoinContent>몸무게</S.JoinContent>
                    <S.JoinInput type="text" placeholder='몸무게(kg 생략, 숫자만 작성)'></S.JoinInput>
                </S.JoinBox>


                <S.CompleteButton onClick={() => navigate(`/inputmain`)}>작성완료</S.CompleteButton>


                <Nav />
            </S.Container>
        </>
    )
}
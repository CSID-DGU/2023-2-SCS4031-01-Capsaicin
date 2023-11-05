import React from 'react';
import * as S from "./style";
import Nav from '../../Components/Nav';
import Title from '../../Components/Title';

export default function InputInfo() {

    return (
        <>
            <S.Container>
                <Title />
                <S.CenterTitle>&lt; 음식 정보 입력</S.CenterTitle>
                <S.UserBox>
                    <S.Box>혈당<br></br>입력</S.Box>

                    <S.Box>몸무게<br></br>입력</S.Box>
                </S.UserBox>
                <Nav />
            </S.Container>
        </>
    );
}
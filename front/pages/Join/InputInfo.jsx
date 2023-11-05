import React from 'react';
import * as S from "./style";
import Nav from '../../Components/Nav';
import Title from '../../Components/Title';
import { useNavigate } from "react-router-dom";

export default function InputInfo() {

    const navigate = useNavigate();
    
    return (
        <>
            <S.Container>
                <Title />
                <S.LeftTitle>건강입력</S.LeftTitle>
                <S.User>
                    <S.Blood>혈당<br></br>입력</S.Blood>
                    <S.Weight>몸무게<br></br>입력</S.Weight>
                </S.User>
                <S.User>
                <S.InfoInput onClick={() => navigate(`/inputinfo_cate`)}>  
                    <S.ImgFood src="../../assets/images/food.png" />
                    식단 정보<br></br>입력</S.InfoInput>
                </S.User>
                <S.User>
                <S.InfoInput>
                    <S.ImgFood src="../../assets/images/health.png" />
                      운동 정보<br></br>입력</S.InfoInput>
                </S.User>
                <Nav />
            </S.Container>
        </>
    );
}
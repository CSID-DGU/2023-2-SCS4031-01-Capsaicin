import React from 'react';
import Title from '../../../Components/Title';
import Nav from '../../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function SportsInput() {
    const navigate = useNavigate();
    return (
        <>
            <S.Container>
                <Title />
                <S.Info>
                    <S.Backward src="../../../assets/images/backward.png" onClick={() => navigate(`/inputmain`)} />
                    <S.InputTitle>운동 정보 입력</S.InputTitle>
                </S.Info>
                <S.UserBox>
                    <S.Box>유산소 운동
                    <S.FoodIcon src="../../../assets/images/running.png" />
                    </S.Box>

                    <S.Box onClick={() => navigate(`/strength`)}>근력 운동
                    <S.FoodIcon src="../../../assets/images/arm.png" />
                    </S.Box>
                </S.UserBox>
                <S.UserBox>
                    <S.Box onClick={() => navigate(`/side`)}>유연성 운동
                    <S.FoodIcon src="../../../assets/images/flexibility.png" />
                    </S.Box>

                    <S.Box>무부하 운동
                    <S.FoodIcon src="../../../assets/images/lowimpact.png" />
                    </S.Box>
                </S.UserBox>
                <S.UserBox>
                    <S.Box>놀이 및 레저
                    <S.FoodIcon src="../../../assets/images/bowling.png" />
                    </S.Box>

                    <S.Box>그룹 운동
                    <S.FoodIcon src="../../../assets/images/group.png" />
                    </S.Box>
                </S.UserBox>
                <Nav />
            </S.Container>
        </>
    );
}
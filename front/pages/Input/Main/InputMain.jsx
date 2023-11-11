import React from 'react';
import Title from '../../../Components/Title';
import Nav from '../../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { GotoCareInput } from '../../Main/style';

export default function InputMain() {
    const navigate = useNavigate();

    return (
        <>
            <S.Container>
                <Title />

                <S.Info>
                    <S.Backward src="../../../assets/images/backward.png" onClick={() => navigate(`/main`)} />
                    <S.InputTitle>건강 입력</S.InputTitle>
                </S.Info>

                <S.GotoCareInputs>
                    <S.GotoBloodPressureInput onClick={() => navigate(`/bloodpressureinput`)}>
                        혈압<br></br>
                        입력
                    </S.GotoBloodPressureInput>
                    <S.GotoWeightInput onClick={() => navigate(`/weightinput`)}>
                        몸무게<br></br>
                        입력
                    </S.GotoWeightInput>
                </S.GotoCareInputs>

                <S.GotoFoodInput onClick={() => navigate(`/inputinfo_cate`)}>
                    <S.FoodIcon src="../../../assets/images/food.png" />
                    식단 정보
                    입력
                </S.GotoFoodInput>
                <S.GotoHealthInput>
                    <S.HealthIcon src="../../../assets/images/health.png" />
                    운동 정보
                    입력
                </S.GotoHealthInput>

                <Nav />
            </S.Container>
        </>
    )
}
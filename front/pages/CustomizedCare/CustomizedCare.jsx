import React from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function CustomizedCare() {
    const navigate = useNavigate();

    return (
        <>
            <S.Container>
                <Title />
                <S.Recommend>
                    <S.InputTitle>맞춤케어</S.InputTitle>
                    <S.RecommendTitle>1. 추천 식단</S.RecommendTitle>
                </S.Recommend>
                <S.RecommendFood>
                    <S.RecommendFoodTitle>김건강님은 단백질이 부족해요.</S.RecommendFoodTitle>
                    <S.RecommendFoodContent>한식을 좋아하시니 한식을 추천해 드릴게요.</S.RecommendFoodContent>

                    <S.RecommendFoodName>1. 고등어구이</S.RecommendFoodName>
                    <S.RecommendFoodName>2. 콩자반</S.RecommendFoodName>
                    <S.RecommendFoodName>3. 두부조림</S.RecommendFoodName>
                </S.RecommendFood>

                <S.Recommend>
                    <S.RecommendTitle>2. 추천 운동</S.RecommendTitle>
                </S.Recommend>

                <S.RecommendExercise>
                    <S.RecommendExerciseTitle>김건강님은 운동이 부족해요.</S.RecommendExerciseTitle>
                    <S.RecommendExercisecontent>김건강님의 하루 권장 섭취 칼로리는
                        <br></br>1800kcal입니다.
                        <br></br>소모 칼로리가 800kcal만큼 필요해요.</S.RecommendExercisecontent>

                    <S.RecommendExerciseName>1. 계단 오르내리기</S.RecommendExerciseName>
                    <S.RecommendExerciseName>2. 앉았다 일어나기</S.RecommendExerciseName>
                    <S.RecommendExerciseName>3. PT 체조</S.RecommendExerciseName>
                </S.RecommendExercise>

                <Nav />
            </S.Container>
        </>
    )
}
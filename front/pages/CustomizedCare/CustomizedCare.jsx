import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import API from '../../api/api';

export default function CustomizedCare() {
    const navigate = useNavigate();
    const [recommendationData, setRecommendationData] = useState(null);
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        console.log('API 호출 전');
        fetch(`${API}/main/recommend`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`, // 실제 액세스 토큰 로직으로 대체하세요
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response Data:', data);
                setRecommendationData(data);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    // 빈 종속성 배열은 이 효과가 컴포넌트가 마운트될 때 한 번 실행되도록 보장합니다.

    // 데이터가 로드되었는지 확인
    if (!recommendationData) {
        return <p>Loading...</p>;
    }



    // 데이터에 쉽게 접근하기 위해 구조분해할당
    const { condition, message, data } = recommendationData;

    return (
        <>
            <S.Container>
                <Title />
                <S.Recommend>
                    <S.InputTitle>맞춤케어</S.InputTitle>
                    <S.RecommendTitle>1. 추천 식단</S.RecommendTitle>
                </S.Recommend>
                <S.RecommendFood>
                    <S.RecommendFoodTitle>전날 섭취하신 나트륨 상태는 <br></br>{recommendationData.condition}이에요.</S.RecommendFoodTitle>
                    <S.RecommendFoodContent>{recommendationData.message}</S.RecommendFoodContent>
                    <S.Food>
                        {data.map((food, index) => (
                            <React.Fragment key={index}>
                                <S.RecommendFoodNames>
                                    <S.RecommendFoodName>{food[0]}</S.RecommendFoodName>
                                </S.RecommendFoodNames>
                                <S.RecommendFoodKcals>
                                    <S.RecommendFoodKcal>{food[1]}</S.RecommendFoodKcal>
                                </S.RecommendFoodKcals>
                            </React.Fragment>
                        ))}
                    </S.Food>
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
import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import API from '../../api/api';

export default function CustomizedCare() {
    const navigate = useNavigate();
    const [recommendationData, setRecommendationData] = useState(null);
    const [recommendationExerciseData, setRecommendationExerciseData] = useState(null);
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

    useEffect(() => {
        console.log('API 호출 전');
        fetch(`${API}/main/exercise/recommend`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`, // 실제 액세스 토큰 로직으로 대체하세요
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response Data:', data);
                setRecommendationExerciseData(data);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    // 빈 종속성 배열은 이 효과가 컴포넌트가 마운트될 때 한 번 실행되도록 보장합니다.

    // 데이터가 로드되었는지 확인
    if (!recommendationData) {
        return <p>Loading...</p>;
    }

    // // 추가된 부분: data가 존재하면서 비어있는 경우 setRecommendationData(null) 호출
    // if (recommendationData.data && recommendationData.data.length === 0) {
    //     setRecommendationData(null);
    // }

    return (
        <>
            <S.Container>
                <Title />
                <S.Recommend>
                    <S.InputTitle>맞춤케어</S.InputTitle>
                    <S.RecommendTitle>1. 추천 식단</S.RecommendTitle>
                </S.Recommend>
                <S.RecommendFood>
                    <S.RecommendFoodTitle>전날 섭취하신 나트륨 상태는 {recommendationData.condition}이에요.</S.RecommendFoodTitle>
                    <S.RecommendFoodContent>{recommendationData.message}</S.RecommendFoodContent>
                    <S.Food>
                        {recommendationData.data.map((food, index) => (
                            <React.Fragment key={index}>
                                <S.FoodIcon src={data[2]} />
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
                    <S.RecommendExerciseTitle>{recommendationExerciseData.user}님의 운동 분석 결과입니다.</S.RecommendExerciseTitle>

                    <S.RecommendExerciseName>    {recommendationExerciseData.user}님의 어제 섭취 칼로리는<br></br>
                        {parseFloat(recommendationExerciseData.yesterday_total_meal_calorie).toFixed(2)}입니다.</S.RecommendExerciseName>
                    <S.RecommendExercisecontent>{recommendationExerciseData.message}</S.RecommendExercisecontent>
                </S.RecommendExercise>
            </S.Container>
            <Nav />
        </>
    )
}

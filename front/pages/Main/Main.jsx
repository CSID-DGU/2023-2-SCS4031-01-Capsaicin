import React from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";

export default function Main() {
    return (
        <>
            <S.Container>
                <Title />

                <S.UserName>
                    <S.Name>김건강</S.Name>
                    <S.User>님</S.User>
                </S.UserName>

                <S.Info>
                    <S.InfoTitle>김건강님의 최근 수치</S.InfoTitle>
                    <S.InfoHealth>
                        <S.InfoBoxes>
                            <S.InfoBox>몸무게</S.InfoBox>
                            <S.InfoNum>60kg</S.InfoNum>
                        </S.InfoBoxes>
                        <S.InfoBoxes>
                            <S.InfoBox>혈압</S.InfoBox>
                            <S.InfoNum>120mmHg</S.InfoNum>
                        </S.InfoBoxes>
                    </S.InfoHealth>
                </S.Info>

                <S.GotoHealthInput>
                    <S.HealthIcon src="../../assets/images/health.png" />
                    운동 정보 입력 바로가기
                </S.GotoHealthInput>
                <S.GotoFoodInput>
                    <S.FoodIcon src="../../assets/images/food.png" />
                    음식 정보 입력 바로가기
                </S.GotoFoodInput>
                <S.GotoCareInput>
                    <S.CareIcon src="../../assets/images/heart.png" />
                    건강 정보 입력 바로가기
                </S.GotoCareInput>

                <S.Walking>
                    <S.WalkingTitle>오늘 걸은 걸음</S.WalkingTitle>
                    <S.WalkingNum>
                        <S.TodayWalkingNum>2000보</S.TodayWalkingNum>
                        <S.GoalWalkingNum>/3000보</S.GoalWalkingNum>
                    </S.WalkingNum>
                </S.Walking>

                <Nav />
            </S.Container>
        </>
    )
}
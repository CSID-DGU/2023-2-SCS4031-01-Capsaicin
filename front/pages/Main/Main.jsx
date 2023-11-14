import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch('http://127.0.0.1:8000/main/weights', {
            headers: {
                'Authorization': `Bearer ${localStorage.accessToken}`
            }
        })
            .then((response) => response.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error('Error:', error));
    }, []);
    return (
        <>
            <S.Container>
                <Title />

                <S.UserName>
                    <S.Name>김건강</S.Name>
                    {/* <S.Name>{userData.username}</S.Name> */}
                    <S.User>님</S.User>
                </S.UserName>

                <S.Info>
                    <S.InfoTitle>김건강님의 최근 수치</S.InfoTitle>
                    {/* <S.InfoTitle>{userData.username}님의 최근 수치</S.InfoTitle> */}
                    <S.InfoHealth>
                        <S.InfoBoxes>
                            <S.InfoBox>몸무게</S.InfoBox>
                            <S.InfoNum>80kg</S.InfoNum>
                            {/* <S.InfoNum>{userData.weight}kg</S.InfoNum> */}
                        </S.InfoBoxes>
                        <S.InfoBoxes>
                            <S.InfoBox>혈압</S.InfoBox>
                            <S.InfoNum>120mmHg</S.InfoNum>
                            {/* <S.InfoNum>{userData.diastolic}mmHg</S.InfoNum> */}
                        </S.InfoBoxes>
                    </S.InfoHealth>
                </S.Info>

                <S.GotoHealthInput>
                    <S.HealthIcon src="../../assets/images/health.png" />
                    운동 정보 입력 바로가기
                </S.GotoHealthInput>
                <S.GotoFoodInput onClick={() => navigate(`/inputinfo_cate`)}>
                    <S.FoodIcon src="../../assets/images/food.png" />
                    음식 정보 입력 바로가기
                </S.GotoFoodInput>
                <S.GotoCareInput onClick={() => navigate(`/inputmain`)}>
                    <S.CareIcon src="../../assets/images/heart.png" />
                    건강 정보 입력 바로가기
                </S.GotoCareInput>

                <S.Walking>
                    <S.WalkingTitle>내가 소속된 경로당</S.WalkingTitle>
                    <S.WalkingNum>
                        <S.TodayWalkingNum>장충경로당</S.TodayWalkingNum>
                    </S.WalkingNum>
                </S.Walking>

                <Nav />
            </S.Container>
        </>
    )
}
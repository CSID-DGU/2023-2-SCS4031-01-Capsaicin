import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import API from '../../api/api';

export default function Main() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [userBPData, setUserBPData] = useState({});
    const [centerData, setCenterData] = useState({});
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        fetch(`${API}/main/weights/last`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response Data:', data);
                setUserData(data);
            })
            .catch((error) => console.error('Error:', error));
    }, []);
    useEffect(() => {
        fetch(`${API}/main/bloodpressure/last`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response Data:', data);
                setUserBPData(data);
            })
            .catch((error) => console.error('Error:', error));
    }, []);
    useEffect(() => {
        fetch(`${API}/main/center`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Center Data:', data);
                setCenterData(data);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <>
            <S.Container>
                <Title />

                <S.UserName>
                    {/* <S.Name>김건강</S.Name> */}
                    <S.Name>{centerData.fullname}</S.Name>
                    <S.User>님</S.User>
                </S.UserName>

                <S.Info>
                    {/* <S.InfoTitle>김건강님의 최근 수치</S.InfoTitle> */}
                    <S.InfoTitle>{centerData.fullname}님의 최근 수치</S.InfoTitle>
                    <S.InfoHealth>
                        <S.InfoBoxes>
                            <S.InfoBox>몸무게</S.InfoBox>
                            {/* <S.InfoNum>80kg</S.InfoNum> */}
                            <S.InfoNum>{userData.weight_figure}kg</S.InfoNum>
                        </S.InfoBoxes>
                        <S.InfoBoxes>
                            <S.InfoBox>혈압</S.InfoBox>
                            {/* <S.InfoNum>120mmHg</S.InfoNum> */}
                            <S.InfoNum>{userBPData.systolic}mmHg</S.InfoNum>
                        </S.InfoBoxes>
                    </S.InfoHealth>
                </S.Info>

                <S.GotoCareInput onClick={() => navigate(`/inputmain`)}>
                    <S.CareIcon src="../../assets/images/heart.png" />
                    건강 정보 입력 바로가기
                </S.GotoCareInput>
                <S.GotoHealthInput onClick={() => navigate(`/SportsInput`)}>
                    <S.HealthIcon src="../../assets/images/health.png" />
                    운동 정보 입력 바로가기
                </S.GotoHealthInput>
                <S.GotoFoodInput onClick={() => navigate(`/inputinfo_cate`)}>
                    <S.FoodIcon src="../../assets/images/food.png" />
                    음식 정보 입력 바로가기
                </S.GotoFoodInput>

                <S.Walking>
                    <S.WalkingTitle>내가 소속된 경로당</S.WalkingTitle>
                    <S.WalkingNum>
                        <S.TodayWalkingNum>{centerData.name}경로당</S.TodayWalkingNum>
                    </S.WalkingNum>
                </S.Walking>

                <Nav />
            </S.Container>
        </>
    )
}
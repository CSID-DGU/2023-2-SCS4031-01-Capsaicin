import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import API from '../../api/api';
export default function GuardMain() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [userBPData, setUserBPData] = useState({});
    const [centerData, setCenterData] = useState({});
    const [recentFoods, setRecentFoods] = useState([]);
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        const fetchRecentFoods = async () => {
            try {
                const response = await fetch(`${API}/main/meal`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`, // 실제 액세스 토큰 로직으로 대체하세요
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setRecentFoods(data);
            } catch (error) {
                console.error('최근 음식을 가져오는 중 오류 발생:', error);
            }
        };

        fetchRecentFoods();
    }, []); // 빈 종속성 배열은 이 효과가 컴포넌트가 마운트될 때 한 번 실행되도록 보장합니다.



    useEffect(() => {
        fetch(`${API}/guard/weights/last`, {
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
        fetch(`${API}/guard/bloodpressure/last`, {
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
    // useEffect(() => {
    //     fetch(`${API}/main/center`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${accessToken}`
    //         }
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('Center Data:', data);
    //             setCenterData(data);
    //         })
    //         .catch((error) => console.error('Error:', error));
    // }, []);

    return (
        <>
            <S.Container>
                <Title />

                <S.UserName>
                    {/* <S.Name>김건강</S.Name> */}
                    <S.Name>{userBPData.fullname}</S.Name>

                    <S.User>님 보호자</S.User>
                </S.UserName>

                <S.Info>
                    <S.InfoTitle>{userBPData.fullname}님의 최근 수치</S.InfoTitle>

                    <S.InfoHealth>
                        <S.InfoBoxes>
                            <S.InfoBox>몸무게</S.InfoBox>
                            <S.InfoNum>{userData.weight_figure}kg</S.InfoNum>

                        </S.InfoBoxes>
                        <S.InfoBoxes>
                            <S.InfoBox>혈압</S.InfoBox>
                            <S.InfoNum>{userBPData.systolic}mmHg</S.InfoNum>

                        </S.InfoBoxes>
                    </S.InfoHealth>
                </S.Info>

                <S.GotoCare onClick={() => navigate(`/healthrecord`)}>
                    건강기록 열람
                </S.GotoCare>
                <S.GotoHealth onClick={() => navigate(`/customizedcare`)}>
                    맞춤케어 열람
                </S.GotoHealth>

                {/* <S.InfoFood>
                    <S.InfoFoodTitle>최근 먹은 음식</S.InfoFoodTitle>
                    {recentFoods.map((food) => (
                        <div>
                            <S.InfoFoodImage src={food.food_img} />
                            <S.InfoFoodName>
                                <div key={food.food_name}>{`${food.food_name} ${food.count}${food.unit}`}</div>
                            </S.InfoFoodName>
                        </div>
                    ))}
                </S.InfoFood> */}
                <Nav />
            </S.Container>
        </>
    )
}
import React, { useState, useEffect } from 'react';
import Title from '../../../../Components/Title';
import Nav from '../../../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function WeightInput() {
    const navigate = useNavigate();
    const [todayDate, setTodayDate] = useState('');

    useEffect(() => {
        // 오늘 날짜를 'YYYY-MM-DD' 형식으로 가져오기
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        setTodayDate(formattedDate);
    }, []);

    const handleWeightSubmit = async () => {
        const weight_figure = document.querySelector('input[name="weight"]').value;
        const measurementDate = document.querySelector('input[name="measurement_date"]').value;

        const data = {
            weight: weight_figure,
            measurement_date: measurementDate
        };

        try {
            // 토큰값 가져오기
            const accessToken = localStorage.getItem('accessToken');

            // 토큰이 있는 경우에만 요청을 보냄
            if (accessToken) {
                const response = await fetch('http://127.0.0.1:8000/main/weights', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`  // 토큰을 Authorization 헤더에 추가
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    // 성공적으로 작성되었을 때의 로직
                    console.log('몸무게 데이터가 성공적으로 제출되었습니다.');
                    navigate(`/inputmain`);
                } else {
                    // 실패했을 때의 로직
                    console.error('몸무게 데이터 제출에 실패했습니다.');
                }
            } else {
                console.error('토큰이 없습니다. 로그인이 필요합니다.');
                // 토큰이 없는 경우에 대한 로직을 추가할 수 있습니다.
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <>
            <S.Container>
                <Title />

                <S.Info>
                    <S.Backward src="../../../assets/images/backward.png" onClick={() => navigate(`/inputmain`)} />
                    <S.InputTitle>몸무게 입력</S.InputTitle>
                </S.Info>

                <S.JoinBox>
                    <S.JoinContent>측정일자</S.JoinContent>
                    <S.JoinInput type="date" name="measurement_date" defaultValue={todayDate}></S.JoinInput>
                </S.JoinBox>


                <S.JoinBox>
                    <S.JoinContent>몸무게</S.JoinContent>
                    <S.JoinInput type="text" name="weight" placeholder='몸무게(kg 생략, 숫자만 작성)'></S.JoinInput>
                </S.JoinBox>


                <S.CompleteButton onClick={handleWeightSubmit}>작성완료</S.CompleteButton>


                <Nav />
            </S.Container>
        </>
    )
}
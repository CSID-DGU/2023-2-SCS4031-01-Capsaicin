import React, { useState, useEffect } from 'react';
import Title from '../../../../Components/Title';
import Nav from '../../../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function BloodPressureInput() {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem("accessToken");
    const [bloodPressureData, setBloodPressureData] = useState({
        measurement_date: '',
        measurement_time: '',
        systolic: '',
        diastolic: '',
    });
    const [todayDate, setTodayDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        // 오늘 날짜를 'YYYY-MM-DD' 형식으로 가져오기
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        // 현재 시간을 'HH:mm' 형식으로 가져오기
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        setTodayDate(formattedDate);
        setCurrentTime(formattedTime);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBloodPressureData({
            ...bloodPressureData,
            [name]: value,
        });
    };

    const handleBloodPressureSubmit = async () => {
        try {

            const response = await fetch("/main/bloodpressure", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(bloodPressureData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result.message); // 성공 시의 메시지
                navigate(`/inputmain`);
            } else {
                console.error("혈압 입력 실패");
            }
        } catch (error) {
            console.error("혈압 입력 오류:", error);
        }
    };

    return (
        <>
            <S.Container>
                <Title />

                <S.Info>
                    <S.Backward src="../../../assets/images/backward.png" onClick={() => navigate(`/inputmain`)} />
                    <S.InputTitle>혈압 입력</S.InputTitle>
                </S.Info>

                <S.JoinBox>
                    <S.JoinContent>측정일자</S.JoinContent>
                    <S.JoinInput type="date" name="measurement_date" defaultValue={todayDate}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>측정시간</S.JoinContent>
                    <S.JoinInput type="time" name="measurement_time" defaultValue={currentTime} onChange={handleInputChange} />
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>수축혈압</S.JoinContent>
                    <S.JoinInput type="text" name="systolic" placeholder='혈압(mmHg 생략, 숫자만 작성)' onChange={handleInputChange} />
                </S.JoinBox>
                <S.JoinBox>
                    <S.JoinContent>이완혈압</S.JoinContent>
                    <S.JoinInput type="text" name="diastolic" placeholder='혈압(mmHg 생략, 숫자만 작성)' onChange={handleInputChange} />
                </S.JoinBox>

                <S.CompleteButton onClick={handleBloodPressureSubmit}>작성완료</S.CompleteButton>

                <Nav />
            </S.Container>
        </>
    )
}

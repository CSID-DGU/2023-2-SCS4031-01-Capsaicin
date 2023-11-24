import React, { useState } from 'react';
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
                    <S.JoinInput type="date" name="measurement_date" onChange={handleInputChange} />
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>측정시간</S.JoinContent>
                    <S.JoinInput type="time" name="measurement_time" onChange={handleInputChange} />
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

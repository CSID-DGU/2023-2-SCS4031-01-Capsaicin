import React, { useState } from 'react';
import Title from '../../../../Components/Title';
import Nav from '../../../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function WeightInput() {
    const navigate = useNavigate();

    const handleWeightSubmit = async () => {
        const weight = document.querySelector('input[name="weight"]').value;
        const measurementDate = document.querySelector('input[name="measurement_date"]').value;

        const data = {
            weight: weight,
            measurement_date: measurementDate
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/main/weights', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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
                    <S.JoinInput type="date" name="measurement_date"></S.JoinInput>
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
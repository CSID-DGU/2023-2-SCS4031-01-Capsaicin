import React, { useState } from 'react';
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import API from '../../api/api';

export default function LoginPage() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleLogin = async () => {
        try {
            const response = await fetch(`${API}/accounts/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: loginData.username,
                    password: loginData.password,
                })
            });

            if (!response.ok) {
                console.error('로그인 실패');
                return;
            }

            const responseData = await response.json();
            const accessToken = responseData.access_token;
            localStorage.setItem("accessToken", accessToken);
            const userType = responseData.user.userType;

            console.log(accessToken);
            console.log(userType)

            if (userType === "사용자") {
                navigate('/main');
                console.log('로그인 성공 - 사용자');
            } else if (userType === "보호자") {
                navigate('/guardmain');
                console.log('로그인 성공 - 보호자');
            } else {
                console.error('로그인 실패: 알 수 없는 사용자 타입');
            }
        } catch (error) {
            console.error('로그인 요청 중 오류 발생', error);
        }
    };

    const handleInputChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <S.Container>
                <S.Title
                    src="../../assets/images/login_box.png" />
                <S.TitleSubText>내 손 안의 작은 스마트 경로당</S.TitleSubText>
                <S.TitleSubTitle>고혈압, 스톱!</S.TitleSubTitle>

                <S.Logo
                    src="../../assets/images/logo_black.png" />

                <S.Input>
                    <S.InputID type="text" placeholder='전화번호' name="username" onChange={handleInputChange}></S.InputID>
                    <S.InputPW type="password" placeholder='비밀번호' name="password" onChange={handleInputChange}></S.InputPW>
                </S.Input>

                <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
                <S.Join onClick={() => navigate(`/join`)}>
                    계정이 없으신가요? 회원가입
                </S.Join>
                <S.IDfinder>아이디/비밀번호 찾기</S.IDfinder>
            </S.Container >
        </>
    );
}
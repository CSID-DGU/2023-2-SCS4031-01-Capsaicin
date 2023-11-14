import React, { useState } from 'react';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleLogin = async () => {
        const response = await fetch('http://127.0.0.1:8000/accounts/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: loginData.username,
                password: loginData.password
            })
        });

        if (response.ok) {
            navigate('/main');
            console.error('로그인 성공');

        } else {
            console.error('로그인 실패');
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

import React from 'react';
import * as S from "./style";

export default function LoginPage() {
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
                    <S.InputID type="text" placeholder='아이디'></S.InputID>
                    <S.InputPW type="password" placeholder='비밀번호'></S.InputPW>
                </S.Input>

                <S.LoginButton>로그인</S.LoginButton>

                <S.Join>계정이 없으신가요? 회원가입</S.Join>
                <S.IDfinder>아이디/비밀번호 찾기</S.IDfinder>
            </S.Container>
        </>
    );
}

import React from 'react';
import * as S from "./style";

export default function Join() {
    return (
        <>
            <S.Container>
                <S.Title
                    src="../../assets/images/join_box.png" />
                <S.LoginTitle>회원가입</S.LoginTitle>

                <S.ChooseUser>회원 유형을 선택하세요.</S.ChooseUser>
                <S.User>
                    <S.MyUser>일반<br></br>유저</S.MyUser>
                    <S.GuardianUser>보호자<br></br>유저</S.GuardianUser>
                </S.User>
                <S.UserExplain>
                    <S.UserTitle>일반 유저</S.UserTitle>
                    <S.UserContent>경로당에 가입한 노인</S.UserContent>
                    <S.UserTitle>보호자 유저</S.UserTitle>
                    <S.UserContent>노인의 보호자<br></br>(건강 상태 모니터링 가능)</S.UserContent>
                </S.UserExplain>
            </S.Container>
        </>
    );
}
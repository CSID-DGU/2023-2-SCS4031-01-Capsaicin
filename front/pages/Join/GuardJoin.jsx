import React from 'react';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function NormalJoin() {

    const [contract, setContract] = React.useState(false);
    const navigate = useNavigate();

    return (
        <>
            <S.Container>
                <S.Title
                    src="../../assets/images/join_box.png" />
                <S.LoginTitle2>보호자 회원가입</S.LoginTitle2>
                <S.JoinBox>
                    <S.JoinContent>이름</S.JoinContent>
                    <S.JoinInput type="text" placeholder='이름'></S.JoinInput>
                </S.JoinBox>


                <S.JoinBox>
                    <S.JoinContent>전화번호</S.JoinContent>
                    <S.JoinInput type="text" placeholder='010부터 작성(- 제외)'></S.JoinInput>
                    <S.JoinButton2>인증하기</S.JoinButton2>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>비밀번호</S.JoinContent>
                    <S.JoinInput type="password" placeholder='비밀번호(숫자 4자리)'></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>비밀번호 확인</S.JoinContent>
                    <S.JoinInput type="password" placeholder='비밀번호 확인'></S.JoinInput>
                </S.JoinBox>

                <S.Contract>
                    <S.ContractButton type="checkbox" checked={contract} onChange={() => setContract(!contract)} />
                    <S.ContractTitle onClick={() => navigate(`/term`)}>이용약관에 동의 (필수)</S.ContractTitle>
                </S.Contract>



                <S.JoinButton onClick={() => navigate(`/main`)}>회원가입</S.JoinButton>
            </S.Container>
        </>
    );
}
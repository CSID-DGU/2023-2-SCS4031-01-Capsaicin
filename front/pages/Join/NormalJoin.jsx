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
                <S.LoginTitle>회원가입</S.LoginTitle>
                <S.JoinBox>
                    <S.JoinContent>이름</S.JoinContent>
                    <S.JoinInput type="text" placeholder='이름'></S.JoinInput>
                </S.JoinBox>

                <S.JoinBoxSex>
                    <S.JoinContent>성별</S.JoinContent>
                    <S.JoinChooseBox>
                        <S.JoinInputButton>남</S.JoinInputButton>
                        <S.JoinInputButton>여</S.JoinInputButton>
                    </S.JoinChooseBox>
                </S.JoinBoxSex>

                <S.JoinBox>
                    <S.JoinContent>생년월일</S.JoinContent>
                    <S.JoinInput type="date" placeholder='2001-02-25'></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>소속 경로당</S.JoinContent>
                    <S.JoinInput type="text" placeholder='이름만 작성'></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>키</S.JoinContent>
                    <S.JoinInput type="text" placeholder='키(cm 생략, 숫자만 작성)'></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>몸무게</S.JoinContent>
                    <S.JoinInput type="text" placeholder='몸무게(kg 생략, 숫자만 작성)'></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>혈압</S.JoinContent>
                    <S.JoinInput type="text" placeholder='혈압(mmHg 생략, 숫자만 작성)'></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>보호자 전화번호</S.JoinContent>
                    <S.JoinInput type="text" placeholder='010부터 작성(- 제외)'></S.JoinInput>
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
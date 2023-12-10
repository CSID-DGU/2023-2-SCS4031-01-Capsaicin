import React, { useEffect } from 'react';
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import API from '../../api/api';
import { useRecoilState } from 'recoil';
import { SignupStore } from '../../store/signup_store';

export default function NormalJoin() {

    const [contract, setContract] = React.useState(false);
    const navigate = useNavigate();


    const [user, setUser] = useRecoilState(SignupStore);

    useEffect(() => {
        console.log(user);
    },[])

    const handleSubmit = async () => {
        try {
            const formData = {
                phone_number: user.phone_number,
                password1: parseInt(user.password1, 10),
                password2: parseInt(user.password2, 10),
                fullname: user.fullname,
                birth: user.birth,
                gender: user.gender,
                userType: "사용자",
                guardPhoneNumber: "",
                height: parseInt(user.height, 10),
                weight: parseInt(user.weight, 10),
                systolic: parseInt(user.systolic, 10),
                center: user.center
            };
            console.log(formData);

            const response = await fetch(`${API}/accounts/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! Status: ${response.status} , Message: ${errorData.message}`);
            }

            const data = await response.json();
            console.log('회원가입 성공:', data);
            setUser();


            // openModal 함수를 여기에서 호출하지 않음
        } catch (error) {
            console.error('회원가입 오류:', error);
        }
        navigate('/');

        // 선택이 성공적으로 제출된 후에 openModal 함수 호출
    };

    const nameHandler = (e) => {
        setUser((prev) => ({...prev, fullname:e.target.value}))
    }


    return (
        <>
            <S.Container>
                <S.Title
                    src="../../assets/images/join_box.png" />
                <S.LoginTitle>회원가입</S.LoginTitle>
                <S.JoinBox>
                    <S.JoinContent>이름</S.JoinContent>
                    <S.JoinInput type="text" placeholder='이름' value={user.fullname} onChange={nameHandler}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBoxSex>
                    <S.JoinContent>성별</S.JoinContent>
                    <S.JoinChooseBox>
                        <S.JoinInputButton className={user.gender === 'M' ? 'active' : ''} onClick={() =>  setUser((prev) => ({...prev, gender:"M"}))}>남</S.JoinInputButton>
                        <S.JoinInputButton className={user.gender === 'F' ? 'active' : ''} onClick={() =>  setUser((prev) => ({...prev, gender:"F"}))}>여</S.JoinInputButton>
                    </S.JoinChooseBox>
                </S.JoinBoxSex>

                <S.JoinBox>
                    <S.JoinContent>생년월일</S.JoinContent>
                    <S.JoinInput type="date" placeholder='2001-02-25' value={user.birth} onChange={(e) => setUser((prev) => ({...prev, birth:e.target.value}))}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>소속 경로당</S.JoinContent>
                    <S.JoinInput type="text" placeholder='이름만 작성' value={user.center} onChange={(e) => setUser((prev) => ({...prev, center:e.target.value}))}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>전화번호</S.JoinContent>
                    <S.JoinInput type="text" placeholder='010부터 작성(- 제외)' value={user.phone_number} onChange={(e) => setUser((prev) => ({...prev, phone_number:e.target.value}))}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>키</S.JoinContent>
                    <S.JoinInput type="text" placeholder='키(cm 생략, 숫자만 작성)' value={user.height} onChange={(e) => setUser((prev) => ({...prev, height:e.target.value}))}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>몸무게</S.JoinContent>
                    <S.JoinInput type="text" placeholder='몸무게(kg 생략, 숫자만 작성)' value={user.weight} onChange={(e) =>setUser((prev) => ({...prev, weight:e.target.value}))}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>수축혈압</S.JoinContent>
                    <S.JoinInput type="text" placeholder='혈압(mmHg 생략, 숫자만 작성)' value={user.systolic} onChange={(e) => setUser((prev) => ({...prev, systolic:e.target.value}))}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>비밀번호</S.JoinContent>
                    <S.JoinInput type="password" placeholder='비밀번호(숫자 4자리)' value={user.password1} onChange={(e) =>setUser((prev) => ({...prev, password1:e.target.value}))}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>비밀번호 확인</S.JoinContent>
                    <S.JoinInput type="password" placeholder='비밀번호 확인' value={user.password2} onChange={(e) => setUser((prev) => ({...prev, password2:e.target.value}))}></S.JoinInput>
                </S.JoinBox>

                <S.Contract>
                    <S.ContractButton type="checkbox" checked={contract} onChange={() => setContract(!contract)} />
                    <S.ContractTitle onClick={() => navigate(`/term`)}>이용약관에 동의 (필수)</S.ContractTitle>
                </S.Contract>



                <S.JoinButton onClick={handleSubmit}>회원가입</S.JoinButton>
            </S.Container>
        </>
    );
}
import React from 'react';
import * as S from "../Join/style";
import { useNavigate } from "react-router-dom";

export default function GuardJoin() {

    const [contract, setContract] = React.useState(false);
    const navigate = useNavigate();

    const [phone_number, setPhone_Number] = React.useState('');
    const [password1, setPassword1] = React.useState('');
    const [password2, setPassword2] = React.useState('');
    const [userphoneNumber, setUserPhoneNumber] = React.useState('');
    const [fullname, setFullName] = React.useState('');
    const [birth, setBirth] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [usertype, setUserType] = React.useState('');

    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [systolic, setSystolic] = React.useState('');
    const accessToken = localStorage.getItem("accessToken");

    const handleSubmit = async () => {
        try {
            const formData = {
                phone_number : phone_number,
                password1 : parseInt(password1,10),
                password2 : parseInt(password2,10),
                userPhoneNumber : userphoneNumber,
                fullname : fullname,
                birth : 0,
                gender : "",
                userType : "보호자",
                height : 0,
                weight : 0,
                systolic : 0
            };
          console.log(formData);
    
          const response = await fetch('http://127.0.0.1:8000/accounts/registration/guard', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(formData),
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! Status: ${response.status} , Message: ${errorData.message}`);
          }
      
          const data = await response.json();
          console.log('회원가입 성공:', data);

    
          // openModal 함수를 여기에서 호출하지 않음
        } catch (error) {
          console.error('회원가입 오류:', error);
        }
        navigate('/');
    
        // 선택이 성공적으로 제출된 후에 openModal 함수 호출
      };


    return (
        <>
            <S.Container>
                <S.Title
                    src="../../assets/images/join_box.png" />
                <S.LoginTitle2>보호자 회원가입</S.LoginTitle2>
                <S.JoinBox>
                    <S.JoinContent>이름</S.JoinContent>
                    <S.JoinInput type="text" placeholder='이름' value={fullname} onChange={(e) => setFullName(e.target.value)}></S.JoinInput>
                </S.JoinBox>


                <S.JoinBox>
                    <S.JoinContent>전화번호</S.JoinContent>
                    <S.JoinInput type="text" placeholder='010부터 작성(- 제외)' value={phone_number} onChange={(e) => setPhone_Number(e.target.value)}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>노인 전화번호</S.JoinContent>
                    <S.JoinInput type="text" placeholder='010부터 작성(- 제외)' value={userphoneNumber} onChange={(e) => setUserPhoneNumber(e.target.value)}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>비밀번호</S.JoinContent>
                    <S.JoinInput type="password" placeholder='비밀번호(숫자 4자리)' value={password1} onChange={(e) => setPassword1(e.target.value)}></S.JoinInput>
                </S.JoinBox>

                <S.JoinBox>
                    <S.JoinContent>비밀번호 확인</S.JoinContent>
                    <S.JoinInput type="password" placeholder='비밀번호 확인' value={password2} onChange={(e) => setPassword2(e.target.value)}></S.JoinInput>
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
import React from 'react';
import * as S from "./style";

export default function InputInfo() {
    return (
        <>
            <S.Container>
                <S.Title
                    src="../../assets/images/login_box.png" />
                <S.TitleSubText>내 손 안의 작은 스마트 경로당</S.TitleSubText>
                <S.TitleSubTitle>고혈압, 스톱!</S.TitleSubTitle>

                <S.LeftTitle>건강입력</S.LeftTitle>
                <S.User>
                    <S.Blood>혈당<br></br>입력</S.Blood>
                    <S.Weight>몸무게<br></br>입력</S.Weight>
                </S.User>
                {/* <S.User>
                <S.InfoInput>  
                    <S.ImgFood src="../../assets/images/food.png" />
                    식단 정보<br></br>입력</S.InfoInput>
                </S.User>
                <S.User>
                <S.InfoInput>
                      운동 정보<br></br>입력</S.InfoInput>
                </S.User> */}
            </S.Container>
        </>
    );
}
import React from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function Community() {
    const navigate = useNavigate();

    return (
        <>
            <S.Container>
                <Title />
                <S.InputTitle>커뮤니티</S.InputTitle>

                <S.Notice>
                    <S.NoticeTitle>장충경로당 공지</S.NoticeTitle>
                    <S.NoticeContent>청소로 인한 10/10~12<br></br>
                        경로당 사용 불가</S.NoticeContent>
                </S.Notice>
                <S.InfoTitle>이번 달 운동 랭킹</S.InfoTitle>
                <S.Info>
                    1위: 김건강<br></br>
                    2위: 박동국<br></br>
                    3위: 이순재
                </S.Info>

                <S.InfoTitle>이번 달 혈압 측정 랭킹</S.InfoTitle>
                <S.Info>
                    1위: 김건강<br></br>
                    2위: 박동국<br></br>
                    3위: 이순재
                </S.Info>
                <Nav />
            </S.Container>
        </>
    )
}
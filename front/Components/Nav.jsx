import React from 'react';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();
    return (
        <>
            <S.Nav>
                <S.NavButton onClick={() => navigate(`/inputmain`)}>
                    <S.NavInput src="../../assets/images/navInput.png" />
                    <S.NavText >건강입력</S.NavText>
                </S.NavButton>
                <S.NavButton>
                    <S.NavReport src="../../assets/images/navReport.png" />
                    <S.NavText>건강기록</S.NavText>
                </S.NavButton>
                <S.NavButton onClick={() => navigate(`/CustomizedCare`)}>
                    <S.NavCare src="../../assets/images/navCare.png" />
                    <S.NavText>맞춤케어</S.NavText>
                </S.NavButton>
                <S.NavButton>
                    <S.NavCommunity src="../../assets/images/navCommunity.png" />
                    <S.NavText>커뮤니티</S.NavText>
                </S.NavButton>
            </S.Nav>
        </>
    )
}
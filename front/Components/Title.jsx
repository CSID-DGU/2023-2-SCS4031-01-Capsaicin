import React from 'react';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function Title() {
    const navigate = useNavigate();
    return (
        <>
            <S.Container>
                <S.Title src="../../assets/images/join_box.png" />
                <S.TitleLogo src="../../assets/images/logo_white.png"
                    onClick={() => navigate(`/main`)} />
            </S.Container>
        </>
    )
}
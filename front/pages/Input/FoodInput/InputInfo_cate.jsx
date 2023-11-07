import React from 'react';
import Title from '../../../Components/Title';
import Nav from '../../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function InputInfo() {
    const navigate = useNavigate();


    return (
        <>
            <S.Container>
                <Title />
                <S.Info>
                    <S.Backward src="../../../assets/images/backward.png" onClick={() => navigate(`/inputmain`)} />
                    <S.InputTitle>음식 정보 입력</S.InputTitle>
                </S.Info>
                <S.UserBox>
                    <S.Box>밥류
                    <S.FoodIcon src="../../../assets/images/rice.png" />
                    </S.Box>

                    <S.Box onClick={() => navigate(`/soup`)}>국류
                    <S.FoodIcon src="../../../assets/images/soup.png" />
                    </S.Box>
                </S.UserBox>
                <S.UserBox>
                    <S.Box onClick={() => navigate(`/side`)}>반찬류
                    <S.FoodIcon src="../../../assets/images/side.png" />
                    </S.Box>

                    <S.Box>채소&과일류
                    <S.FoodIcon src="../../../assets/images/fruit.png" />
                    </S.Box>
                </S.UserBox>
                <S.UserBox>
                    <S.Box>육류
                    <S.FoodIcon src="../../../assets/images/meat.png" />
                    </S.Box>

                    <S.Box>생선류
                    <S.FoodIcon src="../../../assets/images/fish.png" />
                    </S.Box>
                </S.UserBox>
                <S.UserBox>
                    <S.Box>유제품
                    <S.FoodIcon src="../../../assets/images/milk.png" />
                    </S.Box>

                    <S.Box>디저트/빵류
                    <S.FoodIcon src="../../../assets/images/bread.png" />
                    </S.Box>
                </S.UserBox>
                <Nav />
            </S.Container>
        </>
    );
}
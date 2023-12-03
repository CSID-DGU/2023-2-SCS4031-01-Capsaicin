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
                <S.UserBox2>
                    <S.Box onClick={() => navigate(`/rice`)}>밥류
                    <S.FoodIcon src="../../../assets/images/rice.png" />
                    </S.Box>

                    <S.Box onClick={() => navigate(`/food2`)}>면류
                    <S.FoodIcon src="../../../assets/images/noodle.png" />
                    </S.Box>
                </S.UserBox2>
                <S.UserBox2>
                    <S.Box onClick={() => navigate(`/soup`)}>국류
                    <S.FoodIcon src="../../../assets/images/soup.png" />
                    </S.Box>

                    <S.Box onClick={() => navigate(`/side`)}>반찬류
                    <S.FoodIcon src="../../../assets/images/side.png" />
                    </S.Box>
                </S.UserBox2>
                <S.UserBox2 >
                    <S.Box onClick={() => navigate(`/food5`)}>생선류
                    <S.FoodIcon src="../../../assets/images/fish.png" />
                    </S.Box>

                    <S.Box onClick={() => navigate(`/food6`)}>육류
                    <S.FoodIcon src="../../../assets/images/meat.png" />
                    </S.Box>
                </S.UserBox2>
                <S.UserBox2>
                    <S.Box onClick={() => navigate(`/food7`)}>디저트/떡류
                    <S.FoodIcon src="../../../assets/images/food7.png" />
                    </S.Box>

                    <S.Box onClick={() => navigate(`/food8`)}>과일/채소류
                    <S.FoodIcon src="../../../assets/images/fruit.png" />
                    </S.Box>
                </S.UserBox2>
                <Nav />
            </S.Container>
        </>
    );
}
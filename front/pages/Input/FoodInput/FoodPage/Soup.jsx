import React from 'react';
import Title from '../../../../Components/Title';
import Nav from '../../../../Components/Nav';
import * as S from "../style";
import { useNavigate } from "react-router-dom";

export default function Soup() {
    const navigate = useNavigate();
    const YourComponent = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);
      
        const openModal = () => {
          setIsModalOpen(true);
        };
      
        const closeModal = () => {
          setIsModalOpen(false);
        };
    }

    return (
        <>
            <S.Container>
                <Title />
                <S.Info>
                    <S.Backward src="../../../assets/images/backward.png" onClick={() => navigate(`/inputinfo_cate`)} />
                    <S.InputTitle>국류</S.InputTitle>
                </S.Info>
                <S.SearchContainer>
                        <S.SearchInput type="text" placeholder="검색" />
                        <S.SearchImage/>
                </S.SearchContainer>
                <S.UserBox>
                    <S.Box2>
                        된장찌개
                        <S.FoodIcon src="../../../assets/images/side1.png" />
                        <S.Select>
                            <option>0.5인분</option>
                            <option>0.75인분</option>
                            <option>1인분</option>
                        </S.Select>
                    </S.Box2>

                    <S.Box2>김치찌개
                    <S.FoodIcon src="../../../assets/images/side2.png" />
                        <S.Select>
                            <option>0.5인분</option>
                            <option>0.75인분</option>
                            <option>1인분</option>
                        </S.Select>
                    </S.Box2>
                </S.UserBox>
                <S.UserBox>
                    <S.Box2>콩나물국
                    <S.FoodIcon src="../../../assets/images/side3.png" />
                        <S.Select>
                            <option>0.5인분</option>
                            <option>0.75인분</option>
                            <option>1인분</option>
                        </S.Select>
                    </S.Box2>

                    <S.Box2>미역국
                    <S.FoodIcon src="../../../assets/images/side4.png" />
                        <S.Select>
                            <option>0.5인분</option>
                            <option>0.75인분</option>
                            <option>1인분</option>
                        </S.Select>
                    </S.Box2>
                </S.UserBox>
                <S.UserBox>
                    <S.NextButton>다음 음식</S.NextButton>
                    <S.ChoiceButton onClick={YourComponent}>선택 완료</S.ChoiceButton>
                    
                </S.UserBox>
                <Nav />
            </S.Container>
            {/* {isModalOpen && (
                <Modal>
                <ModalContent>
                    <p>선택이 완료되었습니다!</p>
                    <ModalButton onClick={closeModal}>확인</ModalButton>
                </ModalContent>
                </Modal>
            )} */}
        </>
    );
}
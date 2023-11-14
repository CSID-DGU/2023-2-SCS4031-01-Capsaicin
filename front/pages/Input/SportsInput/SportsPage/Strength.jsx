import React, { useState }  from 'react';
import Title from '../../../../Components/Title';
import Nav from '../../../../Components/Nav';
import * as S from "../style";
import { useNavigate } from "react-router-dom";

export default function Strength() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

    return (
        <>
            <S.Container>
                <Title />
                <S.Info>
                    <S.Backward src="../../../assets/images/backward.png" onClick={() => navigate(`/sportsinput`)} />
                    <S.InputTitle>근력 운동</S.InputTitle>
                </S.Info>
                <S.SearchContainer>
                        <S.SearchInput type="text" placeholder="검색" />
                        <S.SearchImage/>
                </S.SearchContainer>
                <S.UserBox>
                    <S.Box2>
                        덤벨운동
                        <S.FoodIcon src="../../../assets/images/strength1.png" />
                        <S.Select>
                            <option>저강도</option>
                            <option>중강도</option>
                            <option>고강도</option>
                        </S.Select>
                    </S.Box2>

                    <S.Box2>헬스기구
                    <S.FoodIcon src="../../../assets/images/strength2.png" />
                        <S.Select>
                            <option>저강도</option>
                            <option>중강도</option>
                            <option>고강도</option>
                        </S.Select>
                    </S.Box2>
                </S.UserBox>
                <S.UserBox>
                    <S.Box2>역기운동
                    <S.FoodIcon src="../../../assets/images/strength3.png" />
                        <S.Select>
                            <option>저강도</option>
                            <option>중강도</option>
                            <option>고강도</option>
                        </S.Select>
                    </S.Box2>

                    <S.Box2>필라테스
                    <S.FoodIcon src="../../../assets/images/strength4.png" />
                        <S.Select>
                            <option>저강도</option>
                            <option>중강도</option>
                            <option>고강도</option>
                        </S.Select>
                    </S.Box2>
                </S.UserBox>
                <S.UserBox>
                    <S.NextButton>다음 음식</S.NextButton>
                    <div>
                    <S.ChoiceButton onClick={openModal} >선택 완료</S.ChoiceButton>
                    {isModalOpen && (
                        <S.Modal>
                          <S.ModalContent>
                            {/* {isModalOpen && (
                              <S.ModalImage src="../../../assets/images/choicedone.png" alt="선택 완료" />
                            )} */}
                            <p>선택이 완료되었습니다!</p>
                            <S.ModalButton onClick={() => navigate(`/sportsinput`)}>확인</S.ModalButton>
                          </S.ModalContent>
                        </S.Modal>
                    )}
                    </div>
                </S.UserBox>
                <Nav />
            </S.Container>
        </>
    );
}
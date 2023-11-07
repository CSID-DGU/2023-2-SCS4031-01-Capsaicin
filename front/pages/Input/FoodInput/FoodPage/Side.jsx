import React from 'react';
import Title from '../../../../Components/Title';
import Nav from '../../../../Components/Nav';
import * as S from "../style";
import { useNavigate } from "react-router-dom";

export default function InputInfo() {
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
                    <S.Backward src="../../../assets/images/backward.png" onClick={() => navigate(`/inputmain`)} />
                    <S.InputTitle>반찬류</S.InputTitle>
                </S.Info>
                <S.SearchContainer>
                        <S.SearchInput type="text" placeholder="검색" />
                        <S.SearchImage/>
                </S.SearchContainer>
                <S.UserBox>
                    <S.Box2>
                        배추김치
                        <S.FoodIcon src="../../../assets/images/side1.png" />
                        <S.Select>
                            <option>1숟가락</option>
                            <option>2숟가락</option>
                            <option>3숟가락</option>
                        </S.Select>
                    </S.Box2>

                    <S.Box2>콩자반
                    <S.FoodIcon src="../../../assets/images/side2.png" />
                    <S.Select>
                            <option>1숟가락</option>
                            <option>2숟가락</option>
                            <option>3숟가락</option>
                        </S.Select>
                    </S.Box2>
                </S.UserBox>
                <S.UserBox>
                    <S.Box2>어묵볶음
                    <S.FoodIcon src="../../../assets/images/side3.png" />
                    <S.Select>
                            <option>1숟가락</option>
                            <option>2숟가락</option>
                            <option>3숟가락</option>
                        </S.Select>
                    </S.Box2>

                    <S.Box2>진미채볶음
                    <S.FoodIcon src="../../../assets/images/side4.png" />
                    <S.Select>
                            <option>1숟가락</option>
                            <option>2숟가락</option>
                            <option>3숟가락</option>
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
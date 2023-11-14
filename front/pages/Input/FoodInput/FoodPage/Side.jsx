import React, { useEffect, useState } from "react";
import Title from "../../../../Components/Title";
import Nav from "../../../../Components/Nav";
import * as S from "../style";
import { useNavigate } from "react-router-dom";


export default function Side() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [userInput, setUserInput] = useState("");
  const [foods, setFoods] = useState([]);

  const searched = foods.filter((food) => food.foodName.includes(userInput));

  const getValue = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    setFoods([
      {
        id: 1,
        foodName: "배추김치",
        category: 1,
        amount: 210.0,
        calorie: 334.8,
        natrium: 59.4,
        url:"../../../assets/images/side1.png",
      },
      {
        id: 2,
        foodName: "콩자반",
        category: 1,
        amount: 200.0,
        calorie: 302.36,
        natrium: 3.39,
        url:"../../../assets/images/side2.png",
      },
      {
        id: 3,
        foodName: "어묵볶음",
        category: 1,
        amount: 210.0,
        calorie: 334.8,
        natrium: 59.4,
        url:"../../../assets/images/side3.png",
      },
      {
        id: 4,
        foodName: "진미채볶음",
        category: 1,
        amount: 200.0,
        calorie: 302.36,
        natrium: 3.39,
        url:"../../../assets/images/side4.png",
      },
      {
        id: 5,
        foodName: "파김치",
        category: 1,
        amount: 200.0,
        calorie: 302.36,
        natrium: 3.39,
        url:"../../../assets/images/side5.png",
      },
      {
        id: 6,
        foodName: "열무김치",
        category: 1,
        amount: 200.0,
        calorie: 302.36,
        natrium: 3.39,
        url:"../../../assets/images/side6.png",
      },
    ]);
  }, []);
  return (
    <>
      <S.Container>
        <Title />
        <S.Info>
          <S.Backward
            src="../../../assets/images/backward.png"
            onClick={() => navigate(`/inputinfo_cate`)}
          />
          <S.InputTitle>반찬류</S.InputTitle>
        </S.Info>
        <S.SearchContainer>
          <S.SearchInput type="input" placeholder="검색" onChange={getValue} />
          <S.SearchImage />
        </S.SearchContainer>
        <S.UserBox>
        {searched.length ? (
            searched.map((food) => (
              <S.Box2>
                {food.foodName}
                <S.FoodIcon src={food.url} />
                <S.Select>
                  <option>1숟가락</option>
                  <option>2숟가락</option>
                  <option>3숟가락</option>
                </S.Select>
              </S.Box2>
            ))
          ) : (
            <div style={{ color: "black", padding: "100px" }}>
              검색된 음식이 없습니다!
            </div>
          )}
        </S.UserBox>
        <S.UserBox>
          <S.NextButton>다음 음식</S.NextButton>
          <div>
            <S.ChoiceButton onClick={openModal}>선택 완료</S.ChoiceButton>
            {isModalOpen && (
              <S.Modal>
                <S.ModalContent>
                  {/* {isModalOpen && (
                              <S.ModalImage src="../../../assets/images/choicedone.png" alt="선택 완료" />
                            )} */}
                  <p>선택이 완료되었습니다!</p>
                  <S.ModalButton onClick={() => navigate(`/inputinfo_cate`)}>
                    확인
                  </S.ModalButton>
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

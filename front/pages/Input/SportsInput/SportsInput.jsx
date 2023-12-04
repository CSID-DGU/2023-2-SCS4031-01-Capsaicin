import React, { useEffect, useState } from "react";
import Title from "../../../Components/Title";
import Nav from "../../../Components/Nav";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { MealListState } from "../../../store/mealList_store";
import API from '../../../api/api';

// import {Swiper, SwiperSlide} from "swiper/react";
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import SwiperCore, {Navigation} from "swiper";

export default function SportsInput() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [userInput, setUserInput] = useState("");
  const [exercises, setExercises] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [minutes, setMinutes] = useState({});

  const searched = exercises.filter((exercise) => exercise.name.includes(userInput));

  const getValue = (e) => {
    setUserInput(e.target.value);
  };

  const toggleSelection = (exercise) => {
    const isSelected = selectedItems.some((item) => item.id === exercise.id);
    if (isSelected) {
      // 이미 선택된 경우, 선택된 항목에서 제거
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item.id !== exercise.id)
      );
    } else {
      // 선택되지 않은 경우, 선택된 항목에 추가
      setSelectedItems((prevItems) => [...prevItems, exercise]);
      if (!minutes[exercise.id]) {
        setMinutes((prevCounts) => ({
          ...prevCounts,
          [exercise.id]: 30,
        }));
      }
    }
  };

  const handleSelectionComplete = async () => {
    try {
      const exerciseList = Object.keys(minutes).map((exerciseId) => ({
        exercise_id: parseInt(exerciseId, 10),
        count: parseFloat(minutes[exerciseId]),
      }));
  
      // 리스트 형태에서 객체로 변경
      const requestData = {
        exercise_list: exerciseList.length > 0 ? exerciseList[0] : {},
      };
  
      console.log('전송 데이터:', JSON.stringify(requestData));
  
      const response = await fetch('http://127.0.0.1:8000/main/exercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('운동 선택 성공:', data);

      // 선택이 성공적으로 제출된 후 선택된 항목 상태를 재설정하는 것이 선택 사항입니다.
      setSelectedItems([]);

      // openModal 함수를 여기에서 호출하지 않음
    } catch (error) {
      console.error('운동 선택 제출 오류:', error);
    }

    // 선택이 성공적으로 제출된 후에 openModal 함수 호출
    openModal();
  };
  
  
  
  
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(`${API}/main/exercisecategory`, {// 여기서 1은 카테고리 번호입니다. 필요에 따라 동적으로 변경 가능
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`, // 인증 토큰을 헤더에 추가합니다.
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setExercises(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
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
          <S.InputTitle>운동정보 입력</S.InputTitle>
        </S.Info>
        <S.SearchContainer>
          <S.SearchInput type="input" placeholder="검색" onChange={getValue} />
        </S.SearchContainer>
        <S.UserBox>
          {searched.length ? (
            searched.map((exercise) => (
              <S.Box2
                key={exercise.id}
                style={selectedItems.some((item) => item.id === exercise.id) ? S.selectedStyle : {}}
                onClick={() => toggleSelection(exercise)}
              >
                {exercise.name}
                <S.FoodIcon src={exercise.imgUrl} />
                <S.CustomSelectExercise onChange={(e) => handleSelectChange(e, exercise.id)}>
                </S.CustomSelectExercise>
              </S.Box2>
            ))
          ) : (
            <div style={{ color: "black", padding: "100px" }}>
              검색된 운동이 없습니다!
            </div>
          )}
        </S.UserBox>
        <S.ButtonContainer>
          <S.ChoiceButton onClick={handleSelectionComplete}>선택 완료</S.ChoiceButton>
          {isModalOpen && (
            <S.Modal>
              <S.ModalContent>
                <p>선택이 완료되었습니다!</p>
                <S.ModalButton onClick={() => navigate(`/main`)}>
                  확인
                </S.ModalButton>
              </S.ModalContent>
            </S.Modal>
          )}
        </S.ButtonContainer>
        <Nav />
      </S.Container>
    </>
  );
}

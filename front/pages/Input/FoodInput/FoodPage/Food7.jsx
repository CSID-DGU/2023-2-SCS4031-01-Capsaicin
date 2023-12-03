import React, { useEffect, useState } from "react";
import Title from "../../../../Components/Title";
import Nav from "../../../../Components/Nav";
import * as S from "../style";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { MealListState } from "../../../../store/mealList_store";
// import {Swiper, SwiperSlide} from "swiper/react";
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import SwiperCore, {Navigation} from "swiper";

export default function Food7() {
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
  const [foods, setFoods] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [foodCounts, setFoodCounts] = useState({});
  const [meal, setMeal] = useRecoilState(MealListState);
  
  const searched = foods.filter((food) => food.foodName.includes(userInput));

  const getValue = (e) => {
    setUserInput(e.target.value);
  };
  useEffect(() => {
    console.log(meal)
    const fetchFoods = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/main/food/7', {// 여기서 1은 카테고리 번호입니다. 필요에 따라 동적으로 변경 가능
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`, // 인증 토큰을 헤더에 추가합니다.
          },
        }); 
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };
  
    fetchFoods();
  }, []);

  const toggleSelection = (food) => {
    const isSelected = selectedItems.some((item) => item.id === food.id);
    if (isSelected) {
      // 이미 선택된 경우, 선택된 항목에서 제거
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item.id !== food.id)
      );
    } else {
      // 선택되지 않은 경우, 선택된 항목에 추가
      setSelectedItems((prevItems) => [...prevItems, food]);
      if (!foodCounts[food.id]) {
        setFoodCounts((prevCounts) => ({
          ...prevCounts,
          [food.id]: 1,
        }));}
    }
  };

  const handleNextFood = () => {
    // 선택된 음식들을 meallist에 추가
    const mealList = Object.keys(foodCounts).map((foodId) => ({
      food_id: parseInt(foodId, 10),
      count: foodCounts[foodId],
      unit:"숟가락"
    }));
    setMeal((prev) => [...prev, ...mealList])

  
    // 여기에서 mealList를 어딘가에 저장하거나 활용하는 로직을 추가할 수 있습니다.
    // 예를 들어, 전역 상태나 다른 상태 관리 라이브러리를 사용하여 mealList를 저장할 수 있습니다.
  
    // 다음 페이지로 이동
    navigate(`/inputinfo_cate`);
  };

  const handleSelectionComplete = async () => {
    try {
      const mealList = Object.keys(foodCounts).map((foodId) => ({
        food_id: parseInt(foodId, 10),
        count: foodCounts[foodId],
        unit: "숟가락",
      }));

      for (const mealItem of meal) {
        mealList.push(mealItem);
      }


      console.log('전송 데이터:', JSON.stringify({
        meal_list: mealList,
      }));

      const response = await fetch('http://127.0.0.1:8000/main/meal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          meal_list: mealList, // 수정된 부분
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('식사 선택 성공:', data);

      // 선택이 성공적으로 제출된 후 선택된 항목 상태를 재설정하는 것이 선택 사항입니다.
      setSelectedItems([]);

      // openModal 함수를 여기에서 호출하지 않음
    } catch (error) {
      console.error('식사 선택 제출 오류:', error);
    }
    setMeal([]);
    // 선택이 성공적으로 제출된 후에 openModal 함수 호출
    openModal();
  };


  const handleSelectChange = (e, foodId) => {
    const selectedCount = parseInt(e.target.value, 10);
    // 선택된 숟가락의 값을 해당 음식 항목의 count로 설정
    setFoodCounts((prevCounts) => ({
      ...prevCounts,
      [foodId]: selectedCount,
    }));
  };
  

  return (
    <>
      <S.Container>
        <Title />
        <S.Info>
          <S.Backward
            src="../../../assets/images/backward.png"
            onClick={() => navigate(`/inputinfo_cate`)}
          />
          <S.InputTitle>디저트/떡류</S.InputTitle>
        </S.Info>
          <S.SearchContainer>
          <S.SearchInput type="input" placeholder="검색" onChange={getValue} />
        </S.SearchContainer>
        <S.UserBox>
          {searched.length ? (
            searched.map((food) => (
              <S.Box2
                key={food.id}
                style={selectedItems.some((item) => item.id === food.id) ? S.selectedStyle : {}}
                onClick={() => toggleSelection(food)}
              >
                {food.foodName}
                <S.FoodIcon src={food.foodImgUrl} />
                <S.CustomSelect_3 onChange={(e) => handleSelectChange(e, food.id)}>
                  <option value={1}>1인분</option>
                  <option value={2}>2인분</option>
                  <option value={3}>3인분</option>
                </S.CustomSelect_3>
              </S.Box2>
            ))
          ) : (
            <div style={{ color: "black", padding: "100px" }}>
              검색된 음식이 없습니다!
            </div>
          )}
        </S.UserBox>
        <S.ButtonContainer>
          <S.NextButton onClick={handleNextFood} >다음 음식</S.NextButton>
          
          <div>
            <S.ChoiceButton onClick={handleSelectionComplete} >선택 완료</S.ChoiceButton>
            
            {isModalOpen && (
              <S.Modal>
                <S.ModalContent>
                  <p>선택이 완료되었습니다!</p>
                  <S.ModalButton onClick={() => navigate(`/inputinfo_cate`)}>
                    확인
                  </S.ModalButton>
                </S.ModalContent>
              </S.Modal>
            )}
          </div>
        </S.ButtonContainer>
        <Nav />
      </S.Container>
    </>
  );
}

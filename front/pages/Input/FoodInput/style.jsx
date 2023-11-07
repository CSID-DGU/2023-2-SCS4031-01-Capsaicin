import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 50px;
    padding-right: 80px;
`;

export const Backward = styled.img`
    width: 18px;
    height: 26px;
    margin-left: 30px;
`;

export const InputTitle = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 29px;
    text-align: center;
    padding-left: 40px;
    // margin-left: 20px;
`;


export const JoinBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const JoinContent = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 30px;
    padding-top: 50px;
    text-align: left;
`;


export const JoinInput = styled.input`
    font-family: 'Pretendard';
    width: 340px;
    height: 85px;
    border: 0.5px solid black;
    border-radius: 5px;
    font-size: 25px;
    ::placeholder {
        font-family: 'Pretendard';
        font-size: 25px; 
        color: #aaaaaa; 
    }
    padding-left: 10px;
    margin-top: 20px;
`;

export const CompleteButton = styled.button`
    width: 143px;
    height: 65px;
    font-size: 20px;
    color: white;
    background-color: #48268F;
    border-radius: 5px;
    margin-top: 50px;
`;
// export const UserBox = styled.div`
//     display: flex;
//     justify-content: space-between;
//     // flex-direction: row;
//     padding-top: 50px;
// `;
// export const Box = styled.button`
//     font-family: 'Pretendard-SemiBold';
//     width: 130px;
//     height: 130px;
//     border: 0.5px solid black;
//     border-radius: 5px 0px 0px 5px;
//     font-size: 40px;
//     background-color: #FFFFFF;
//     padding-left: 0px;
//     :hover {
//         background-color: #aaaaaa; 
//     }
// `;


export const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

export const Box = styled.button`
  font-family: 'Pretendard-SemiBold';
  width: 130px;
  height: 130px;
  border: 0.5px solid black;
  border-radius: 5px;
  background-color: #FFFFFF;
  padding: 0;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 20px;
  position: relative; /* 상대 위치 지정 */

  
`;

export const FoodIcon = styled.img`
  width: 90px;
  height: 90px;
  padding-left: 20px;
`;


export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
`;

export const SearchInput = styled.input`
  position: relative;
  /* 검색 바 스타일링 */
  margin-top: 40px;
  padding-right: 30px; /* 오른쪽 여백을 이미지 크기만큼 확보 */
  background-image: url('../../../assets/images/Search.png'); /* 이미지 경로 설정 */
  background-repeat: no-repeat;
  background-position: right center; /* 이미지 위치 설정 */
  background-size: 20px; /* 이미지 크기 설정 */
  width: 250px;
  height: 40px;
`;
export const SearchImage = styled.img`
  position: absolute;
  right: 5px; /* 원하는 위치 조정 */
  top: 50%; /* 수직 중앙 정렬을 위해 상단 위치 조정 */
  transform: translateY(-50%); /* 수직 중앙 정렬 */
  width: 20px; /* 이미지의 원하는 크기 설정 */
  height: 20px;
`;
export const SpoonText = styled.span`
  font-size: 18px;
  color: white;
  background-color: purple;
  border-radius: 10%; /* 원 모양으로 유지 */
  padding: 5px; /* 여백 조절 */
  margin-top: 10px;
  margin-left: 20px; /* 오른쪽으로 이동 */
`;
export const Box2 = styled.button`
  font-family: 'Pretendard-SemiBold';
  width: 130px;
  height: 170px;
  border: 0.5px solid black;
  border-radius: 5px;
  background-color: #FFFFFF;
  padding: 0;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 20px;
  position: relative; /* 상대 위치 지정 */

  
`;

export const NextButton = styled.button`
  background-color: white;
  border: 2px solid #48268F;
  color: #48268F;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
`;

export const ChoiceButton = styled.button`
  background-color: #48268F;
  border: 2px solid white;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
`;

export const Select = styled.select`
  background-color: #48268F;
  border: 2px solid white;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
`;
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background: #ffffff;
  border: 1px solid #48268F;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;

export const ModalButton = styled.button`
  background: #48268F;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
`;
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
`;

export const InputTitle = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 35px;
    text-align: center;
    padding-left: 80px;
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

`;
export const FoodIcon = styled.img`
    width: 90px;
    height: 90px;
    padding-left: 20px;
`;




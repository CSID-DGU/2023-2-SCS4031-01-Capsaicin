import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex:auto;
    overflow-y : scroll;
    &::-webkit-scrollbar{
        display:none;
    }
`;

export const UserName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:100px;
    width: 350px;
`;

export const Name = styled.div`
    font-size: 40px;
    font-family: 'NotoSansKR-Bold';
`;

export const User = styled.div`
    font-size: 25px;
    font-family: 'NotoSansKR-Medium';
    padding-left: 5px;
`;


export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 180px;
    border: 0.25px solid black;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-family: 'NotoSansKR-Bold';
    margin-top: 20px;
`;

export const InfoTitle = styled.div`
    font-size: 20px;
    font-family: 'NotoSansKR-Regular';
    margin: 20px 130px 0px 0px;
`;

export const InfoHealth = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const InfoBoxes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InfoBox = styled.button`
    width: 85px;
    height: 45px;
    font-size: 18px;
    font-family: 'Pretendard-Light';
    background-color: #712EFF;
    color: #ffffff;
    border-radius: 5px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`;

export const InfoNum = styled.div`
    font-size: 20px;
    margin-top: 10px;
    font-family: 'Pretendard-Bold';
`;

export const GotoHealthInput = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    height: 85px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 25px;
    font-family: 'Pretendard-Medium';
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;

export const HealthIcon = styled.img`
    width: 22px;
    height: 40px;
    padding-right: 20px;
`;

export const GotoFoodInput = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    height: 85px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 25px;
    font-family: 'Pretendard-Medium';
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;

export const FoodIcon = styled.img`
    width: 35px;
    height: 40px;
    padding-right: 20px;
`;

export const GotoCareInput = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    height: 85px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 25px;
    font-family: 'Pretendard-Medium';
    margin-top: 60px;
    justify-content: center;
    align-items: center;
`;

export const CareIcon = styled.img`
    width: 35px;
    height: 30px;
    padding-right: 20px;
`;

export const Walking = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 120px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 25px;
    font-family: 'Pretendard-Medium';
    margin-top: 40px;
    margin-bottom:150px;
    justify-content: center;
    align-items: center;
`;

export const WalkingTitle = styled.div`
    font-size: 20px;
    font-family: 'NotoSansKR-Medium';
    padding: 10px;
    border-radius: 5px;
    background-color: #FFB800;
`;


export const WalkingNum = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TodayWalkingNum = styled.div`
    font-size: 25px;
    font-family: 'NotoSansKR-Medium';
    margin-top: 20px;
`;

export const GoalWalkingNum = styled.div`
    font-size: 25px;
    font-family: 'NotoSansKR-Regular';
    margin-top: 20px;
`;
export const logout = styled.button`
    font-family: 'Pretendard-Medium';
    width: 120px;
    height: 60px;
    border: 0.5px solid black;
    border-radius: 5px;
    font-size: 20px;
    background-color: #712EFF;
    color: white;
    margin-left: auto; /* Move the button to the right */
    margin-right: 20px;
`;
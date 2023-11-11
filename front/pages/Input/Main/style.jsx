import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const GotoCareInputs = styled.div`
    display: flex;
    flex-direction: row;
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


export const GotoBloodPressureInput = styled.div`
    display: flex;
    flex-direction: row;
    width: 175px;
    height: 140px;
    border-radius: 5px 0px 0px 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 35px;
    font-family: 'Pretendard-Medium';
    margin-top: 60px;
    justify-content: center;
    align-items: center;
`;

export const GotoWeightInput = styled.div`
    display: flex;
    flex-direction: row;
    width: 175px;
    height: 140px;
    border-radius: 0px 5px 5px 0px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 35px;
    font-family: 'Pretendard-Medium';
    margin-top: 60px;
    justify-content: center;
    align-items: center;
`;



export const GotoFoodInput = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    height: 140px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 35px;
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

export const GotoHealthInput = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    height: 140px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 35px;
    font-family: 'Pretendard-Medium';
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;

export const HealthIcon = styled.img`
    width: 35px;
    height: 30px;
    padding-right: 20px;
`;

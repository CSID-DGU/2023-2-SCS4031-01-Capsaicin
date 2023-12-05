import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const InputTitle = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 35px;
    padding-left: 30px;
    justify-content: flex-start;
    padding: 50px 0px 20px 0px;
`;

export const Recommend = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 390px;
    padding-left: 50px;
`;

export const RecommendTitle = styled.div`
    font-family: 'NanumSquareRound';
    font-weight: bold;
    font-size: 25px;
    padding: 40px 0px 20px 0px;
`;

export const Food = styled.div`
    display: flex;
    flex-direction: row;
`;


export const RecommendFood = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 250px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 35px;
    font-family: 'Pretendard-Medium';
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    overflow-y: scroll;
    max-height: 370px;
`;

export const RecommendFoodNames = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RecommendFoodKcals = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
`;

export const RecommendFoodKcal = styled.div`
    font-family: 'NanumSquareRound';
    font-size: 15px;
    padding-bottom: 17px;
    flex-direction: column;
`;


export const RecommendFoodTitle = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 25px;
    padding-bottom: 15px;
    padding: 0px 10px 20px 10px;
    line-height: 1.2;
`;

export const RecommendFoodContent = styled.div`
    font-family: 'NotoSansKR-Medium';
    font-size: 19px;
    padding: 0px 10px 20px 10px;
    line-height: 1.2;
`;

export const RecommendFoodName = styled.div`
    font-family: 'NotoSansKR-Medium';
    font-size: 20px;
    text-align: left;
    padding-bottom: 8px;
    flex-direction: column;
`;

// 운동
export const RecommendExercise = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 250px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 35px;
    font-family: 'Pretendard-Medium';
padding: 0px 10px 0px 10px;
    justify-content: center;
    align-items: flex-start;
    overflow-y: scroll;
    max-height: 250px;
`;

export const RecommendExerciseTitle = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 25px;
    padding-bottom: 15px;
`;

export const RecommendExercisecontent = styled.div`
    font-family: 'NotoSansKR-Medium';
    font-size: 18px;
    text-align: left;
    padding-bottom: 30px;
    line-height: 1.1;
`;

export const RecommendExerciseName = styled.div`
    font-family: 'NotoSansKR-Medium';
    font-size: 20px;
    text-align: left;
    padding-bottom: 8px;
    line-height: 1.2;
`;
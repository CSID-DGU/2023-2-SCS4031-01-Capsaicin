import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;


export const InputTitle = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 30px;
    padding-left: 30px;
    justify-content: flex-start;
    padding: 20px 90px 20px 0px;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 300px;
    border: 0.25px solid black;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-family: 'NotoSansKR-Bold';
    margin-top: 20px;
    align-items: center;
    overflow-y: scroll;
    max-height: 300px;
`;

export const InfoTitle = styled.div`
    font-size: 23px;
    font-family: 'NotoSansKR-SemiBold';
    font-weight: bold;
    margin: 20px 0px 20px 0px;
`;

export const InfoImage = styled.img`
    width: 298px;
    height: 278px;
    padding-right: 20px;
    margin: 10px 0px 0px 10px;
`;


export const InfoFood = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 250px;
    border: 0.25px solid black;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-family: 'NotoSansKR-Bold';
    margin-top: 20px;
    align-items: center;
    gap: 10px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display:none;
    }
    max-height: 350px;
`;

export const FoodContainer = styled.div`
    width:100%;
    display:flex;
    // flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    gap: 1rem;
    box-sizing: border-box;
    padding:1rem;
    border-bottom: 1px solid #000;
`;

export const InfoFoodTitle = styled.div`
    font-size: 20px;
    font-family: 'NotoSansKR-Regular';
    font-weight: bold;
    margin-top: 20px;
`;

export const InfoFoodName = styled.div`
    font-size: 20px;
    font-family: 'NotoSansKR-Regular';
    text-align: center;
`;

export const InfoFoodImage = styled.img`
    width: 100px;
    height: 100px;
`;
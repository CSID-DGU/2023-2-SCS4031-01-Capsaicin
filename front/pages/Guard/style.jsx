import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // position: relative;
`;


export const Title = styled.img`
    width: 390px;
    height: 120px;
    top: -30px;
    left: 50%;
    transform: translateX(-50%); /* 이미지를 수평으로 가운데 정렬 */
    position: absolute;
    z-index: 1;
`;

export const TitleSubText = styled.div`
    font-family: 'NanumSquareRoundEB';
    font-size: 20px;
    text-align: center;
    position: relative;
    z-index: 2;
    color: #FFFFFF;
`;

export const TitleSubTitle = styled.div`
    font-family: 'NanumSquareRoundEB';
    font-size: 30px;
    text-align: center;
    position: relative;
    z-index: 2;
    color: #FFFFFF;
    padding: 5px 0px 0px 0px;
`;

export const Logo = styled.img`
    width: 300px;
    height: 85px;
    padding: 80px 0px 50px 0px;
`;


export const Input = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputID = styled.input`
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
`;

export const InputPW = styled.input`
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
    margin-top: 30px;
`;

export const LoginButton = styled.button`
    font-family: 'Pretendard-Bold';
    width: 350px;
    height: 65px;
    border-radius: 5px;
    border-style: none;
    font-size: 25px;
    color: white;
    background-color: #712EFF;
    margin-top: 30px;
`;

export const Join = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 25px;
    padding-top: 50px;
    text-decoration: underline;
`;

export const IDfinder = styled.div`
    font-family: 'NotoSansKR-Medium';
    font-size: 25px;
    padding-top: 20px;
    text-decoration: underline;
`;

// 회원가입
export const LoginTitle = styled.div`
    font-family: 'NanumSquareRoundEB';
    font-size: 50px;
    position: relative;
    padding-right: 120px;
    z-index: 2;
    color: #FFFFFF;
    margin-bottom: 30px;
`;
export const LoginTitle2 = styled.div`
    font-family: 'NanumSquareRoundEB';
    font-size: 36px;
    position: relative;
    padding-right: 120px;
    z-index: 2;
    color: #FFFFFF;
    margin-bottom: 30px;
`;
export const ChooseUser = styled.div`
    font-family: 'NotoSansKR-Bold';
    width: 100%;
    font-size: 25px;
    padding: 70px 80px 0px 0px;
    color: #000000;
`;

export const User = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 50px;
`;

export const MyUser = styled.button`
    font-family: 'Pretendard-SemiBold';
    width: 175px;
    height: 200px;
    border: 0.5px solid black;
    border-radius: 5px 0px 0px 5px;
    font-size: 50px;
    background-color: #FFFFFF;
    padding-left: 10px;
    :hover {
        background-color: #aaaaaa; 
    }
`;

export const GuardianUser = styled.button`
    font-family: 'Pretendard-SemiBold';
    width: 175px;
    height: 200px;
    border: 0.5px solid black;
    border-radius: 0px 5px 5px 0px;
    font-size: 50px;
    background-color: #FFFFFF;
    padding-left: 10px;
    :hover {
        background-color: #aaaaaa; 
    }
`;

export const UserExplain = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 70px;
`;


export const UserTitle = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 25px;
    padding-top: 50px;
    text-align: left;
`;

export const UserContent = styled.div`
    font-family: 'NotoSansKR-Median';
    font-size: 25px;
    padding-top: 10px;
    text-align: left;
`;

// 일반 유저 회원가입
export const JoinBox = styled.div`
    display: flex;
    flex-direction: column;
`;
export const JoinBox2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 80px;
`;

export const JoinBoxSex = styled.div`
    display: flex;
    flex-direction: column;
    // width: 100%;
    padding-right: 80px;
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
export const JoinInput2 = styled.input`
    font-family: 'Pretendard';
    width: 260px;
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


export const JoinChooseBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;



export const JoinInputButton = styled.button`
    font-family: 'Pretendard-Medium';
    width: 115px;
    height: 85px;
    border: 0.5px solid black;
    border-radius: 5px;
    font-size: 30px;
    background-color: #FFFFFF;
    margin-right: 20px;
    :hover {
        background-color: #aaaaaa; 
    }
`;

export const JoinInputButton2 = styled.button`
    font-family: 'Pretendard-Medium';
    width: 115px;
    height: 85px;
    border: 0.5px solid black;
    border-radius: 5px;
    font-size: 30px;
    background-color: #FFFFFF;
    margin-right: 20px;
    :hover {
        background-color: #aaaaaa; 
    }
`;

export const Contract = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px 0px 30px 0px;
    justify-content: center;
    align-items: center;
    
`;

export const ContractTitle = styled.div`
    font-family: 'NotoSansKR-Regular';
    font-size: 25px;
    padding-left: 20px;
`;

export const ContractButton = styled.button`
    font-family: 'Pretendard-Bold';
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border-style: none;
    font-size: 25px;
    border: 1px solid black;
        // 체크표시 스타일 적용
        &:checked::before {
        content: 'V'; // 체크 아이콘을 여기에 넣어주세요.
        display: inline-block;
        width: 12px; // 체크표시 너비
        height: 12px; // 체크표시 높이
        margin-right: 6px; // 체크표시와 텍스트 사이 여백
        font-size: 12px; // 폰트 크기
        color: #ff0000; // 체크표시 색상
    }
`;

export const JoinButton = styled.button`
    font-family: 'Pretendard-Bold';
    width: 150px;
    height: 65px;
    border-radius: 5px;
    border-style: none;
    font-size: 25px;
    color: white;
    background-color: #712EFF;
    margin-top: 30px;
`;
export const JoinButton2 = styled.button`
    font-family: 'Pretendard-Bold';
    width: 150px;
    height: 65px;
    border-radius: 5px;
    border-style: none;
    font-size: 25px;
    color: white;
    background-color: #712EFF;
    margin-top: 30px;
`;

export const TitleContent = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 30px;
    padding-top: 50px;
    text-align: left;
    margin: 0 auto 20px;
`;

export const TermBody = styled.p`
    margin: 0px;
    fontSize: 20px;
    border: 1px solid;
    color: gray;
    width: 370px;
    height:400px;
    margin: 0 auto;
    textAlign: left;
    overflow: auto;
`;

export const TermButton = styled.button`
    margin: 0px;
    fontSize: 20px;
    border: 1px solid;
    color: gray;
    width: 370px;
    height:400px;
    margin: 0 auto;
    textAlign: left;
    overflow: auto;
`;

export const Blood = styled.button`
    font-family: 'Pretendard-SemiBold';
    width: 175px;
    height: 150px;
    border: 0.5px solid black;
    border-radius: 5px 0px 0px 5px;
    font-size: 40px;
    background-color: #FFFFFF;
    padding-left: 0px;
    :hover {
        background-color: #aaaaaa; 
    }
`;
export const UserBox = styled.div`
    display: flex;
    justify-content: space-between;
    // flex-direction: row;
    padding-top: 50px;
`;
export const Box = styled.button`
    font-family: 'Pretendard-SemiBold';
    width: 130px;
    height: 130px;
    border: 0.5px solid black;
    border-radius: 5px 0px 0px 5px;
    font-size: 40px;
    background-color: #FFFFFF;
    padding-left: 0px;
    :hover {
        background-color: #aaaaaa; 
    }
`;

export const Weight = styled.button`
    font-family: 'Pretendard-SemiBold';
    width: 175px;
    height: 150px;
    border: 0.5px solid black;
    border-radius: 0px 5px 5px 0px;
    font-size: 40px;
    background-color: #FFFFFF;
    padding-left: 10px;
    :hover {
        background-color: #aaaaaa; 
    }
`;

export const LeftTitle = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 40px;
    padding-top: 30px;
    align-items: left;
    margin: 0 auto 5px;
    font-weight: bold;
    padding-right:170px;
`;
export const CenterTitle = styled.div`
    font-family: 'NotoSansKR-Bold';
    font-size: 40px;
    padding-top: 30px;
    align-items: center;
    margin: 0 auto 5px;
    font-weight: bold;
    padding-right:0px;
`;

export const InfoInput = styled.button`
    display: flex;
    flex-direction: row;
    width: 350px;
    height: 120px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 25px;
    font-family: 'Pretendard-Medium';
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;
export const ImgFood = styled.img`
    width: 35px;
    height: 40px;
    padding-right: 20px;
`;
export const UserName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    margin: 20px 180px 10px 0px;
`;

export const Name = styled.div`
    font-size: 40px;
    font-family: 'NotoSansKR-Bold';
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
export const InfoTitle2 = styled.div`
    font-size: 23px;
    font-family: 'NotoSansKR-SemiBold';
    font-weight: bold;
    margin: 20px 0px 20px 0px;
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

export const GotoCare = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    height: 85px;
    background-color: #F0E9FF;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 25px;
    font-family: 'Pretendard-Medium';
    margin-top: 30px;
    justify-content: center;
    align-items: center;
`;
export const GotoHealth = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    height: 85px;
    background-color: #F0E9FF;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 25px;
    font-family: 'Pretendard-Medium';
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    
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
export const Info2 = styled.div`
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
    justify-content: center;
`;
export const InfoFood2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 200px;
    border: 0.25px solid black;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-family: 'NotoSansKR-Bold';
    margin-top: 50px;
    padding-top: 10px;
    align-items: center;
    gap: 10px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display:none;
    }
    max-height: 350px;
    `;


export const InfoFoodTitle = styled.div`
    font-size: 20px;
    font-family: 'NotoSansKR-Regular';
    font-weight: bold;
    margin: 0px 0px 20px 0px;
`;
export const InfoFoodTitle2 = styled.div`
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




export const InfoImage = styled.img`
    width: 298px;
    height: 278px;
    padding-right: 20px;
    margin: 10px 0px 0px 10px;
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
export const FoodContainer2 = styled.div`
    width:100%;
    height: 110px;
    display:flex;
    // flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    gap: 1rem;
    box-sizing: border-box;
    padding:1rem;
    border-bottom: 1px solid #000;
`;



export const Backward = styled.img`
    width: 18px;
    height: 26px;
    padding-right: 90px;
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
    flex-direction: column;
    height: 200px;

        /* 스크롤바 스타일링 */
        ::-webkit-scrollbar {
        width: 12px; /* 스크롤바 너비 */
    }

    ::-webkit-scrollbar-thumb {
        background-color: #888; /* 스크롤바 색상 */
        border-radius: 6px; /* 스크롤바 모서리 둥글게 */
    }
`;


export const RecommendFood = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 400px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-size: 35px;
    font-family: 'Pretendard-Medium';
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    overflow-y: auto;
    max-height: none;
    align-items: center;
`;

export const RecommendFoodNames = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const RecommendFoodKcals = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
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
    text-align: center;
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

export const FoodIcon2 = styled.img`
  width: 150px;
  height: 150px;
`;
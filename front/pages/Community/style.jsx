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
    padding: 40px 200px 20px 0px;
`;

export const Notice = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 130px;
    border: 0.25px solid black;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-family: 'NotoSansKR-Bold';
    margin-top: 20px;
    align-items: center;
`;

export const NoticeTitle = styled.div`
    font-family: 'NotoSansKR-Bold';
    align-items: center;
    font-size: 20px;
    color: #FF0078;
    padding-top: 20px;
`;

export const NoticeContent = styled.div`
    font-family: 'NotoSansKR-Medium';
    align-items: center;
    font-size: 25px;
    padding-top: 15px;
    word-wrap: break-word;
    overflow:auto;
`;

export const InfoTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 330px;
    height: 60px;
    border-radius: 5px;
    background-color: #FFB800;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-family: 'NotoSansKR-Bold';
    margin-top: 40px;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-family: 'Pretendard-Bold';
    z-index: 1;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 250px;
    border: 0.25px solid black;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-family: 'NotoSansKR-Bold';
    margin-top: -20px;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-family: 'Pretendard-Medium';
    line-height: 1.8;
`;
export const Info2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 250px;
    border: 0.25px solid black;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0.25px #7c7c7c;
    font-family: 'NotoSansKR-Bold';
    margin-top: -20px;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-family: 'Pretendard-Medium';
    line-height: 1.8;
`;

export const NoticeButton = styled.button`
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
export const NoticeButton2= styled.button`
    font-family: 'Pretendard-Medium';
    width: 120px;
    height: 60px;
    border: 0.5px solid black;
    border-radius: 5px;
    font-size: 20px;
    background-color: #712EFF;
    color: white;
    margin-right: 20px;
    margin-top: 20px;
`;
export const Text = styled.textarea`
    font-family: 'Pretendard-Medium';
    width: 60%;
    height: 300px;
    // border: 0.5px solid black;
    // border-radius: 5px;
    font-size: 20px;
    // background-color: #712EFF;
    // color: white;
    // margin-left: auto; /* Move the button to the right */
    margin-right: 20px;
`;

export const Backward = styled.img`
  width: 18px;
  height: 26px;
  padding-right: 30px;
  margin-left: 150px;
  // margin-right:calc(100% / 2 - 54px)
`;
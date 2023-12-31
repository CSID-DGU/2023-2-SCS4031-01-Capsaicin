import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.img`
    width: 390px;
    height: 50px;
    position: fixed;
    top:0;
    z-index: 1;
`;

export const TitleLogo = styled.img`
    position: fixed;
    width: 140px;
    height: 40px;
    top:0;
    z-index: 2;
`;

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    height: 115px;
    width: 390px;
    align-items: center;
    justify-content: space-around;
    background-color: #712EFF;
    color: white;
    position: fixed;
    bottom: 0;
    z-index: 1;
`;

export const NavButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const NavInput = styled.img`
    width: 56px;
    height: 52px;
`;

export const NavReport = styled.img`
    width: 48px;
    height: 52px;
`;

export const NavCare = styled.img`
    width: 44px;
    height: 51px;
`;

export const NavCommunity = styled.img`
    width: 71px;
    height: 51px;
`;



export const NavText = styled.div`
    font-size: 17px;
    margin-top: 12px;
    font-family: 'NotoSansKR-Bold';
`;
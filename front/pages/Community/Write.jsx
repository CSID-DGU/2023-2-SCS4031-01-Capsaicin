import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import API from '../../api/api';
export default function Community() {
    const navigate = useNavigate();
    const [text, setText] = useState("");

    const handleButtonClick = async () => {
        try {
            // 공지 내용을 백엔드로 전송합니다.
            const response = await fetch(`${API}/main/notice`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify({
                    description: text,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // 공지 등록 후, 필요에 따라 다른 동작을 수행할 수 있습니다.
            const responseData = await response.json();
            console.log('Server response:', responseData);
            // 예를 들어, 성공적으로 공지를 등록한 후 다른 페이지로 이동하고 싶다면:
            navigate('/community');

        } catch (error) {
            console.error('Error posting notice:', error);
        }
    };

    return (
        <>
            <S.Container>
                <Title />
                <S.InputTitle><S.Backward
            src="../../../assets/images/backward.png"
            onClick={() => navigate(`/community`)}
          />공지 작성</S.InputTitle>
                <S.Text
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="공지 내용을 입력하세요."
                />
                <S.NoticeButton2 onClick={handleButtonClick}>공지 등록</S.NoticeButton2>
                <Nav />
            </S.Container>
        </>
    )
}
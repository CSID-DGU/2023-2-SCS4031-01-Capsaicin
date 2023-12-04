import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import API from '../../api/api';

export default function Community() {
    const navigate = useNavigate();
    const [noticeContent, setNoticeContent] = useState("");
    const [id, setId] = useState("");
    const [center, setCenter] = useState("");
    const accessToken = localStorage.getItem("accessToken");
    const [exerciseTopUsers, setExerciseTopUsers] = useState([]);
    const [bloodTopUsers, setBloodTopUsers] = useState([]);

    useEffect(() => {
        // 공지사항을 불러오는 API 요청
        const fetchNotice = async () => {
            try {
                const response = await fetch(`${API}/main/notice`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`, // 인증 토큰을 헤더에 추가합니다.
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setNoticeContent(data.description);
                setId(data.id);
                setCenter(data.center);
            } catch (error) {
                console.error('Error fetching notice:', error);
            }
        };

        fetchNotice();
    }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 실행되도록 함

    useEffect(() => {
        // 랭킹을 불러오는 API 요청
        const fetchRank = async () => {
            try {
                const response = await fetch(`${API}/main/rank`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setExerciseTopUsers(data.exercise_top_users);
            } catch (error) {
                console.error('Error fetching rank:', error);
            }
        };

        fetchRank();
    }, [accessToken]); // accessToken이 변경될 때마다 다시 불러오도록 함

    useEffect(() => {
        const fetchBlood = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/main/rank', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setBloodTopUsers(data.blood_top_users);
            } catch (error) {
                console.error('Error fetching rank:', error);
            }
        };

        fetchBlood();
    }, [accessToken]); // accessToken이 변경될 때마다 다시 불러오도록 함

    return (
        <>
            <S.Container>
                <Title />
                <S.InputTitle>커뮤니티</S.InputTitle>

                <S.Notice>
                    <S.NoticeTitle>장충경로당 공지</S.NoticeTitle>
                    <S.NoticeContent>{noticeContent}</S.NoticeContent>
                </S.Notice>

                <S.InfoTitle>이번 달 운동 랭킹</S.InfoTitle>
                <S.Info2>
                    {/* 1위: 김건강<br></br>
                    2위: 박동국<br></br>
                    3위: 이순재 */}
                    {exerciseTopUsers.map((user, index) => (
                        <div key={index}>
                            {index + 1}위: {user.username}
                        </div>
                    ))}
                </S.Info2>

                <S.InfoTitle>이번 달 혈압 측정 랭킹</S.InfoTitle>
                <S.Info>
                    {/* 1위: 김건강<br></br>
                    2위: 박동국<br></br>
                    3위: 이순재 */}
                    {bloodTopUsers.map((user, index) => (
                        <div key={index}>
                            {index + 1}위: {user.username}
                        </div>
                    ))}
                </S.Info>
                <Nav />
            </S.Container>
        </>
    )
}
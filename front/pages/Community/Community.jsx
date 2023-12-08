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
    const [isSuperUser, setIsSuperUser] = useState(false);

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
                setBloodTopUsers(data.blood_top_users);
            } catch (error) {
                console.error('Error fetching rank:', error);
            }
        };

        fetchBlood();
    }, [accessToken]); // accessToken이 변경될 때마다 다시 불러오도록 함

    useEffect(() => {
        const checkSuperUser = async () => {
            // 로그인 시 서버에서 받아온 응답 데이터에서 is_superuser 값을 확인
            try {
                const response = await fetch(`${API}/accounts/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                    // 로그인 데이터 예시 (필요에 따라 수정)
                    body: JSON.stringify({
                        username: 'your_username',
                        password: 'your_password',
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                const is_superuser = responseData.user.is_superuser;
                setIsSuperUser(is_superuser);
                console.log(is_superuser)

            } catch (error) {
                console.error('Error checking superuser:', error);
            }
        };

        checkSuperUser();
    }, [accessToken]);


    return (
        <>
            <S.Container>
                <Title />
                <S.InputTitle>커뮤니티</S.InputTitle>
                {isSuperUser && (
                    <S.NoticeButton onClick={() => navigate('/write')}>
                        공지 등록
                    </S.NoticeButton>
                )}
                <S.Notice>
                    <S.NoticeTitle>경로당 공지</S.NoticeTitle>
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
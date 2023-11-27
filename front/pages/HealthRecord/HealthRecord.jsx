import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";
import * as V from './styles';
import { useNavigate } from "react-router-dom";

const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr style={{ width: '250px' }}>
                    <th style={{ backgroundColor: '#d1d1d1', fontWeight: 'bold', width: '125px', height: '25px', fontSize: '16px', paddingTop: '10px', border: '0.5px solid black' }}>측정일자</th>
                    <th style={{ backgroundColor: '#d1d1d1', fontWeight: 'bold', width: '125px', height: '25px', fontSize: '16px', paddingTop: '10px', border: '0.5px solid black' }}>몸무게</th>
                    {/* 추가적인 열들 */}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td style={{ fontWeight: 'Light', width: '125px', height: '25px', paddingTop: '10px', border: '0.5px solid black' }}>{row.measurement_date}</td>
                        <td style={{ fontWeight: 'Light', width: '125px', height: '25px', paddingTop: '10px', border: '0.5px solid black' }}>{row.weight_figure}</td>
                        {/* 추가적인 셀들 */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default function HealthRecord() {
    const [weights, setWeights] = useState([]);
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        // API 호출하여 데이터 가져오는 부분
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/main/weights', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch weights data');
                }

                const data = await response.json();
                setWeights(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [accessToken]); // accessToken을 의존성 배열에 추가

    useEffect(() => {
        // API 호출하여 데이터 가져오는 부분
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/main/weights', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch weights data');
                }

                const data = await response.json();
                setWeights(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [accessToken]); // accessToken을 의존성 배열에 추가


    return (
        <>
            <S.Container>
                <Title />

                <S.InputTitle>김건강님의 건강기록</S.InputTitle>

                <S.Info>
                    <S.InfoTitle>김건강님의 최근 몸무게</S.InfoTitle>
                    <Table data={weights} /> {/* weights로 변경 */}
                    {/* <S.InfoImage src="../../assets/images/graph.png" /> */}
                    {/* <MyResponsiveLine data={data} /> */}
                </S.Info>

                <S.Info>
                    <S.InfoTitle>김건강님의 최근 혈압</S.InfoTitle>
                    {/* <S.InfoImage src="../../assets/images/graph.png" /> */}
                    {/* <MyResponsiveLine data={data} /> */}
                </S.Info>

                <S.InfoFood>
                    <S.InfoFoodTitle>김건강님의 최근 먹은 음식</S.InfoFoodTitle>
                    <S.InfoFoodImage src="../../assets/images/foodgroup.png" />
                    <S.InfoFoodName>밥 1인분, 국 1인분, 고등어구이 1마리</S.InfoFoodName>
                </S.InfoFood>


                <Nav />
            </S.Container>
        </>
    )
}
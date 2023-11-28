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

const BloodPressureTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr style={{ width: '300px' }}>
                    <th style={{ backgroundColor: '#d1d1d1', fontWeight: 'bold', width: '100px', height: '25px', fontSize: '16px', paddingTop: '10px', border: '0.5px solid black' }}>측정일자</th>
                    <th style={{ backgroundColor: '#d1d1d1', fontWeight: 'bold', width: '80px', height: '25px', fontSize: '16px', paddingTop: '10px', border: '0.5px solid black' }}>측정시간</th>
                    <th style={{ backgroundColor: '#d1d1d1', fontWeight: 'bold', width: '70px', height: '25px', fontSize: '16px', paddingTop: '10px', border: '0.5px solid black' }}>수축혈압</th>
                    <th style={{ backgroundColor: '#d1d1d1', fontWeight: 'bold', width: '70px', height: '25px', fontSize: '16px', paddingTop: '10px', border: '0.5px solid black' }}>이완혈압</th>
                    {/* 추가적인 열들 */}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td style={{ fontWeight: 'Light', width: '100px', height: '25px', paddingTop: '10px', border: '0.5px solid black' }}>{row.measurement_date}</td>
                        <td style={{ fontWeight: 'Light', width: '80px', height: '25px', paddingTop: '10px', border: '0.5px solid black' }}>{row.measurement_time.slice(0, -3)}</td>
                        <td style={{ fontWeight: 'Light', width: '70px', height: '25px', paddingTop: '10px', border: '0.5px solid black' }}>{row.systolic}</td>
                        <td style={{ fontWeight: 'Light', width: '70px', height: '25px', paddingTop: '10px', border: '0.5px solid black' }}>{row.diastolic}</td>
                        {/* 추가적인 셀들 */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const ExerciseTable = ({ exerciseData }) => {
    return (
        <table>
            <thead>
                <tr style={{ width: '250px' }}>
                    <th style={{ backgroundColor: '#d1d1d1', fontWeight: 'bold', width: '125px', height: '25px', fontSize: '16px', paddingTop: '10px', border: '0.5px solid black' }}>운동일자</th>
                    <th style={{ backgroundColor: '#d1d1d1', fontWeight: 'bold', width: '125px', height: '25px', fontSize: '16px', paddingTop: '10px', border: '0.5px solid black' }}>칼로리</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(exerciseData.calorie_by_date).map(([date, calorie], index) => (
                    <tr key={index}>
                        <td style={{ fontWeight: 'Light', width: '125px', height: '25px', paddingTop: '10px', border: '0.5px solid black' }}>{date}</td>
                        <td style={{ fontWeight: 'Light', width: '125px', height: '25px', paddingTop: '10px', border: '0.5px solid black' }}>{calorie}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default function HealthRecord() {
    const [weights, setWeights] = useState([]);
    const [bloodPressure, setBloodPressure] = useState([]);
    const [exerciseData, setExerciseData] = useState({});
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        const fetchBloodPressure = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/main/bloodpressure', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch blood pressure data');
                }

                const data = await response.json();
                setBloodPressure(data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchWeights = async () => {
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

        const fetchExerciseData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/main/exercise', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch exercise data');
                }

                const data = await response.json();
                setExerciseData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBloodPressure();
        fetchWeights();
        fetchExerciseData();
    }, [accessToken]);


    return (
        <>
            <S.Container>
                <Title />

                <S.InputTitle>김건강님의 건강기록</S.InputTitle>

                <S.Info>
                    <S.InfoTitle>김건강님의 몸무게 기록</S.InfoTitle>
                    <Table data={weights} /> {/* weights로 변경 */}
                </S.Info>

                <S.Info>
                    <S.InfoTitle>김건강님의 혈압 기록</S.InfoTitle>
                    <BloodPressureTable data={bloodPressure} />
                </S.Info>

                <S.Info>
                    <S.InfoTitle>김건강님의 운동 기록</S.InfoTitle>
                    <ExerciseTable exerciseData={exerciseData} />
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
import React from 'react';
import Title from '../../Components/Title';
import Nav from '../../Components/Nav';
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { ResponsiveLine } from '@nivo/line';

export default function HealthRecord() {
    const navigate = useNavigate();


    const MyResponsiveLine = ({ data }) => (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }

            ]}

        />
    )

    const data = [
        [
            {
                "id": "japan",
                "color": "hsl(337, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 56
                    },
                    {
                        "x": "helicopter",
                        "y": 81
                    },
                    {
                        "x": "boat",
                        "y": 144
                    },
                    {
                        "x": "train",
                        "y": 198
                    },
                    {
                        "x": "subway",
                        "y": 69
                    },
                    {
                        "x": "bus",
                        "y": 86
                    },
                    {
                        "x": "car",
                        "y": 6
                    },
                    {
                        "x": "moto",
                        "y": 97
                    },
                    {
                        "x": "bicycle",
                        "y": 54
                    },
                    {
                        "x": "horse",
                        "y": 223
                    },
                    {
                        "x": "skateboard",
                        "y": 16
                    },
                    {
                        "x": "others",
                        "y": 42
                    }
                ]
            },
            {
                "id": "france",
                "color": "hsl(83, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 135
                    },
                    {
                        "x": "helicopter",
                        "y": 179
                    },
                    {
                        "x": "boat",
                        "y": 114
                    },
                    {
                        "x": "train",
                        "y": 218
                    },
                    {
                        "x": "subway",
                        "y": 27
                    },
                    {
                        "x": "bus",
                        "y": 196
                    },
                    {
                        "x": "car",
                        "y": 278
                    },
                    {
                        "x": "moto",
                        "y": 75
                    },
                    {
                        "x": "bicycle",
                        "y": 40
                    },
                    {
                        "x": "horse",
                        "y": 88
                    },
                    {
                        "x": "skateboard",
                        "y": 220
                    },
                    {
                        "x": "others",
                        "y": 10
                    }
                ]
            },
            {
                "id": "us",
                "color": "hsl(329, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 216
                    },
                    {
                        "x": "helicopter",
                        "y": 14
                    },
                    {
                        "x": "boat",
                        "y": 38
                    },
                    {
                        "x": "train",
                        "y": 83
                    },
                    {
                        "x": "subway",
                        "y": 291
                    },
                    {
                        "x": "bus",
                        "y": 1
                    },
                    {
                        "x": "car",
                        "y": 283
                    },
                    {
                        "x": "moto",
                        "y": 299
                    },
                    {
                        "x": "bicycle",
                        "y": 294
                    },
                    {
                        "x": "horse",
                        "y": 34
                    },
                    {
                        "x": "skateboard",
                        "y": 171
                    },
                    {
                        "x": "others",
                        "y": 177
                    }
                ]
            },
            {
                "id": "germany",
                "color": "hsl(169, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 122
                    },
                    {
                        "x": "helicopter",
                        "y": 192
                    },
                    {
                        "x": "boat",
                        "y": 37
                    },
                    {
                        "x": "train",
                        "y": 108
                    },
                    {
                        "x": "subway",
                        "y": 102
                    },
                    {
                        "x": "bus",
                        "y": 87
                    },
                    {
                        "x": "car",
                        "y": 24
                    },
                    {
                        "x": "moto",
                        "y": 267
                    },
                    {
                        "x": "bicycle",
                        "y": 149
                    },
                    {
                        "x": "horse",
                        "y": 5
                    },
                    {
                        "x": "skateboard",
                        "y": 291
                    },
                    {
                        "x": "others",
                        "y": 80
                    }
                ]
            },
            {
                "id": "norway",
                "color": "hsl(308, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 288
                    },
                    {
                        "x": "helicopter",
                        "y": 72
                    },
                    {
                        "x": "boat",
                        "y": 31
                    },
                    {
                        "x": "train",
                        "y": 52
                    },
                    {
                        "x": "subway",
                        "y": 43
                    },
                    {
                        "x": "bus",
                        "y": 259
                    },
                    {
                        "x": "car",
                        "y": 40
                    },
                    {
                        "x": "moto",
                        "y": 225
                    },
                    {
                        "x": "bicycle",
                        "y": 213
                    },
                    {
                        "x": "horse",
                        "y": 154
                    },
                    {
                        "x": "skateboard",
                        "y": 267
                    },
                    {
                        "x": "others",
                        "y": 28
                    }
                ]
            }
        ]
    ];

    return (
        <>
            <S.Container>
                <Title />

                <S.InputTitle>김건강님의 건강기록</S.InputTitle>

                <S.Info>
                    <S.InfoTitle>김건강님의 최근 몸무게</S.InfoTitle>
                    <S.InfoImage src="../../assets/images/graph.png" />
                    {/* <MyResponsiveLine data={data} /> */}
                </S.Info>

                <S.Info>
                    <S.InfoTitle>김건강님의 최근 혈압</S.InfoTitle>
                    <S.InfoImage src="../../assets/images/graph.png" />
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
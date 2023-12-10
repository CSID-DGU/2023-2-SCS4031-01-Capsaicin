import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import API from '../../api/api';

const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const CameraView = styled.video`
  max-width: 100%;
  border: 1px solid #ccc;
  margin: 10px 0px 20px 0px;
`;

const CaptureButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

const CapturedImage = styled.img`
  max-width: 100%;
  margin-top: 20px;
`;

export const TitleLogo = styled.img`
    position: relative;
    width: 250px;
    height: 70px;
    padding-bottom: 10px;
`;


const PhoneNumberInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const CameraPage = () => {
    const videoRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const fileInputRef = useRef(null);

    useEffect(() => {
        const initializeCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        initializeCamera();
    }, []);


    const handleCapture = () => {
        const video = videoRef.current;

        if (video) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            // 이미지 크기를 1024px로 조정
            const targetWidth = 1024;
            const aspectRatio = video.videoWidth / video.videoHeight;
            const targetHeight = Math.round(targetWidth / aspectRatio);

            canvas.width = targetWidth;
            canvas.height = targetHeight;

            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            const imageDataURL = canvas.toDataURL('image/jpg');
            // 이전 상태를 기반으로 상태를 업데이트
            setCapturedImage(prevImage => {
                // 새로운 상태를 반환
                return imageDataURL;
            });
        }
    };


    const handleSendToServer = async () => {
        try {
            if (!capturedImage) {
                console.error('No image captured');
                return;
            }

            if (!phoneNumber) {
                console.error('No phone number provided');
                return;
            }

            // 유효한 전화번호 형식인지 확인 (예: 숫자로만 이루어진 10자리 이상의 문자열)
            const phoneNumberRegex = /^\d{10,}$/;
            if (!phoneNumberRegex.test(phoneNumber)) {
                console.error('Invalid phone number format');
                return;
            }

            // 이미지 데이터URL을 Blob으로 변환
            const blob = dataURLtoBlob(capturedImage);

            // 바운더리 생성
            const boundary = generateBoundary();

            // FormData 생성 및 이미지와 전화번호 추가
            const formData = new FormData();
            formData.append('image', blob, 'captured-image.jpg'); // 파일 이름 지정
            formData.append('phone_number', phoneNumber);

            // 서버에 OCR 요청을 보내는 부분
            const ocrResponse = await fetch(`${API}/ocr/photo/`, {
                method: 'POST',
                body: formData,
                headers: {
                    // 서버가 form-data 형식을 기대하므로 Content-Type은 지정하지 않습니다.
                },
            });

            // OCR 서버 응답이 성공인 경우에만 JSON으로 파싱
            if (ocrResponse.ok) {
                const ocrData = await ocrResponse.json();
                console.log('OCR 서버 응답:', ocrData);
                // 나머지 처리...
            } else {
                // OCR 서버 응답이 실패인 경우
                const ocrErrorText = await ocrResponse.text();
                console.error('Error from OCR server:', ocrErrorText);
            }

            // 전송한 데이터 콘솔에 출력
            console.log('전송된 이미지:', capturedImage);
            console.log('전송된 폰번호:', phoneNumber);
        } catch (error) {
            console.error('Error sending image to server:', error);
        }
    };



    const dataURLtoBlob = (dataURL) => {
        try {
            const arr = dataURL.split(',');
            const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        } catch (error) {
            console.error('Error creating Blob:', error);
            throw error;
        }
    };




    // 바운더리 생성 함수
    const generateBoundary = () => {
        return (
            '----' +
            Array(32)
                .fill(null)
                .map(() => Math.floor(Math.random() * 16).toString(16))
                .join('')
        );
    };


    return (
        <CameraContainer>
            <TitleLogo src="/assets/img/logo_purple.png" />
            <h3>혈압계 사진을 찍어주세요. <br></br> 회원가입 시 입력하신 휴대폰번호를 입력하세요.</h3>
            <CameraView ref={videoRef} autoPlay />
            <CaptureButton onClick={handleCapture}>사진 찍기</CaptureButton>
            <PhoneNumberInput
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {capturedImage && <CapturedImage src={capturedImage} alt="Captured" />}
            <CaptureButton onClick={handleSendToServer}>서버로 보내기</CaptureButton>
        </CameraContainer>
    );
};

export default CameraPage;

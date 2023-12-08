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
  margin-bottom: 20px;
`;

const CaptureButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const CapturedImage = styled.img`
  max-width: 100%;
  margin-top: 20px;
`;

const PhoneNumberInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
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
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            const imageDataURL = canvas.toDataURL('image/jpg');
            setCapturedImage(imageDataURL);
        }
    };

    const handleSendToServer = async () => {
        try {
            if (!capturedImage) {
                console.error('No image captured');
                return;
            }

            // 이미지 데이터URL을 Blob으로 변환
            const blob = await fetch(capturedImage).then(res => res.blob());

            // 바운더리 생성
            const boundary = generateBoundary();

            // FormData 생성 및 이미지와 전화번호 추가
            const formData = new FormData();
            formData.append('image', blob);
            formData.append('phone_number', phoneNumber);

            // Fetch API를 사용하여 백엔드에 전송
            await fetch(`${API}/ocr/photo/`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${boundary}`,
                },
            });

            // 성공 처리, 예를 들어 성공 메시지 표시
            console.log('이미지와 전화번호가 성공적으로 전송되었습니다.');

            // 전송한 데이터 콘솔에 출력
            console.log('전송된 이미지:', capturedImage);
            console.log('전송된 폰번호:', phoneNumber);
        } catch (error) {
            // 오류 처리, 예를 들어 오류 메시지 표시
            console.error('이미지와 전화번호 전송 중 오류 발생:', error);
        }
    };

    // 바운더리 생성 함수
    const generateBoundary = () => {
        const randomArray = new Uint32Array(1);
        crypto.getRandomValues(randomArray);
        return `----boundary${randomArray[0]}`;
    };

    return (
        <CameraContainer>
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

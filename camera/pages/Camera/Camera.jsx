import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

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

const CameraPage = () => {
    const videoRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);

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

            const imageDataURL = canvas.toDataURL('image/png');
            setCapturedImage(imageDataURL);
        }
    };

    return (
        <CameraContainer>
            <CameraView ref={videoRef} autoPlay />
            <CaptureButton onClick={handleCapture}>Capture</CaptureButton>
            {capturedImage && <CapturedImage src={capturedImage} alt="Captured" />}
        </CameraContainer>
    );
};

export default CameraPage;

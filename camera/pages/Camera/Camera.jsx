import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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

    const handleCapture = async () => {
        const video = videoRef.current;

        if (video) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(async (blob) => {
                // Convert Blob to File
                const file = new File([blob], 'captured_image.jpeg', { type: 'image/jpeg' });

                // Output the data to console
                console.log('Captured Image File:', file);
                console.log('Phone Number:', phoneNumber);

                // Update the captured image state
                setCapturedImage(URL.createObjectURL(file));

                // Send image and phone number to the server
                try {
                    const formData = new FormData();
                    formData.append('image', file);
                    formData.append('phone_number', phoneNumber);

                    await axios.post(`${API}/ocr/photo`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    // Handle success, e.g., show a success message
                    console.log('Image and phone number sent successfully');
                } catch (error) {
                    // Handle error, e.g., show an error message
                    console.error('Error sending image and phone number:', error);
                }
            }, 'image/jpeg');
        }
    };

    return (
        <CameraContainer>
            <CameraView ref={videoRef} autoPlay />
            <PhoneNumberInput
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <CaptureButton onClick={handleCapture}>Capture</CaptureButton>
            {capturedImage && <CapturedImage src={capturedImage} alt="Captured" />}
        </CameraContainer>
    );
};

export default CameraPage;
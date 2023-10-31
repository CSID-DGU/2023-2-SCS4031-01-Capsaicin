import React from 'react';
import * as S from "./style";

export default function Term() {
    return (
        <>
            <S.Container>
                <S.Title
                    src="../../assets/images/join_box.png" />
                <S.LoginTitle>이용약관</S.LoginTitle>
                <S.JoinBox>
                    <label style={{ margin: '40px' }}>
                        <S.ContractButton></S.ContractButton>
                        <span style={{ fontSize: '25px' }}>  전체 동의하기</span>
                    </label>
                    <p style={{ margin: '0px', fontSize: '20px' }}>본 서비스는 맟춤 서비스・긴급 알림<br>
                    </br> 정보 수신(선택) 동의를 포함합니다</p>
                </S.JoinBox>

                <S.JoinBox>
                    <label style={{ margin: '40px' }}>
                        <S.ContractButton></S.ContractButton>
                        <span style={{ fontSize: '18px' }}> [필수] 개인정보 수집 및 이용 동의 약관</span>
                    </label>
                    <div className="text-box" style={{ margin: '0px', fontSize: '20px', border: '1px solid', color: 'gray', width: '370px', height: '200px', margin: '0 auto', textAlign: 'left', overflow: 'auto' }}>
                        <p>1. 수집 및 이용목적
                            <br></br>1.1. [고,스톱] 애플리케이션(이하 "앱")은 사용자의 혈압, 키, 몸무게, 나이 및 기타 건강 정보를 수집합니다. 이 정보는 다음과 같은 목적으로 수집 및 이용됩니다:
                            <br></br>개인화된 건강 상담 및 운동 및 식단 추천 제공
                            <br></br>사용자 건강 정보의 모니터링 및 통계 분석
                            <br></br>위험 상황 탐지 및 사용자 또는 사용자의 보호자에게 알림 제공
                            <br></br><br></br>2. 수집하는 개인 정보 항목
                            <br></br>2.1. 앱은 다음과 같은 개인 정보 항목을 수집합니다:
                            키, 몸무게, 나이, 혈압, 건강 관련 정보 (식단, 운동 등)
                            <br></br><br></br>3. 정보 보안 및 보호
                            <br></br>3.1. 사용자의 개인 정보는 적절한 기술 및 관리적 조치를 통해 안전하게 보호됩니다.
                            <br></br><br></br>4. 정보의 제공 및 공유
                            <br></br>4.1. 사용자의 개인 정보는 법률 및 규제에 따라 필요한 경우, 제 3자와 공유될 수 있습니다. 공유 대상, 목적 및 범위는 개발자의 개인정보처리방침에서 자세히 설명됩니다.
                            <br></br><br></br>5. 동의 철회
                            <br></br>5.1. 사용자는 언제든지 개인 정보 수집 및 이용에 대한 동의를 철회할 수 있습니다.
                            <br></br><br></br>6. 책임 제한
                            <br></br>6.1. 개발자는 앱 사용으로 인한 직접 또는 간접적인 손실 또는 손해에 대한 책임을 부담하지 않습니다.
                            <br></br><br></br>7. 약관 변경
                            <br></br>7.1. 개발자는 본 약관을 변경할 권리를 가집니다. 변경 사항은 앱을 통해 공지됩니다.
                            <br></br><br></br>8. 문의처
                            <br></br>8.1. 본 약관 또는 개인 정보 처리와 관련된 문의 사항은 [문의 이메일 주소]로 문의 가능합니다.
                            <br></br><br></br>9. 준거법 및 관할법원
                            <br></br>9.1. 본 약관은 [법률 및 규정의 준거법]에 따라 해석되며, 모든 분쟁은 [관할법원]에서 해결됩니다.</p>
                        <button>전체</button>
                    </div>
                </S.JoinBox>



            </S.Container>
        </>
    );
}
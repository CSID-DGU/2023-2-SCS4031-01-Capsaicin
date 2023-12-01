# 2023-2-SCS4031-01-Capsaicin

2023년 2학기 ‘융합캡스톤디자인’ 수업에서

스마트 경로당 개념의 혈압 수첩 웹 서비스 '고, 스톱!'을 제작하는 캡사이신 팀입니다! ❤️‍🔥

<br>

## 💭 About

### 1. 프로젝트명

스마트 경로당 개념의 혈압 수첩 웹 서비스 '고, 스톱!'

### 2. 프로젝트 목표

고혈압 위험 노인을 대상으로 디지털 경로당 기능을 수행하는 혈압 수첩 서비스를 개발하여 식단 및 건강 기록을 관리하고자 합니다.

급증한 고령 인구의 다양한 수요에 따라 경로당 역시 변화하고 있습니다.

기존 모바일 서비스를 분석한 결과, 경로당은 날로 늘어가고만 있지만 경로당을 위한 커뮤니티 서비스는 부재했고, 혈압 수치 자동 연동 기능 및 노년층 친화적인 서비스를 제공하는 서비스 또한 부재했습니다. 그래서 노인친화적인 UI를 가진 혈압을 비롯한 몸무게, 건강, 운동 관리 서비스를 만들었습니다.

### 3. 요구분석
> 질병관리본부에 따르면, 혈압 증가의 가장 큰 원인으로 운동 부족 및 부적절한 식사 습관이 손꼽혔습니다. 
<br>이를 통해 혈압 관리에 있어서 식사 습관과 운동 관리는 중요함을 알 수 있습니다. <br><br>
혈압 관리 서비스는 많지만 노인들이 보기에 다소 UI가 불편한 점이 있습니다. <br>
또한, 경로당은 증가하고 있지만 경로당 내에서 커뮤니티 기능을 수행하는 서비스가 존재하지 않습니다.
>

<br>

## 🔐 Guides

> 프론트엔드 서버와 백엔드 서버 모두 실행되고 있어야 정상적인 작동이 가능합니다.
> 
- FrontEnd 설치 방법
    1. 터미널(맥) 혹은 cmd(윈도우) 창에서 원하는 경로에 git clone https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin
    2. VSCode에 들어가 VSCode 터미널 창을 켜 현재 CSID-DGU/2023-2-SCS4031-01-Capsacin 경로인 경우 cd front를 통해 프론트 폴더 접속
    3. 터미널 창에 npm install (초기 접속의 경우) 입력
    4. npm run dev 입력 (localhost 5173번으로 접속)
- BackEnd 설치 방법
    1. (이미 클론이 되었다고 가정, 클론을 하지 않았다면 프론트 1. 방법을 통해 클론) VSCode를 새로운 윈도우에서 실행한 다음 터미널 창을 켜 CSID-DGU/2023-2-SCS4031-01-Capsacin 경로인 경우 cd backend를 통해 백엔드 폴더 접속
    2. pip install -r requirements.txt    (패키지 설치)
    3. python [manage.py](http://manage.py) makemigrations
        
        python [manage.py](http://manage.py) migrate —run-syncdb 
        (db파일 생성, 깃에는 db를 올리지 않기 때문에 새로운 db파일 생성해주어야함)
        
    4. python [manage.py](http://manage.py/) runserver   (서버 실행, [localhost](http://localhost) 8000번으로 접속)

<br>

## **⚙️ System Architecture**

- Service Architecture

<img src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/59d1f14e-1eaf-4e28-af66-6eac191f5955" width="600px">

- Database Architecture

<img src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/3f870c2e-b132-4622-974b-972e1bf6ff6b" width="600px">

- Usecase Diagram

<img src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/fef3f8c0-5f28-4eba-b292-cb33026fc1af" width="600px">
<br>

## 📚 Tech Stack

**Common**

<img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=flat-square&logo=VisualStudioCode&logoColor=white"/>

**Frontend**

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Styledcomponents-DB7093?style=flat-square&logo=StyledComponent&logoColor=white"/>


**Backend**

<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>


<br>

## 🖥 Project Result

### 1. 회원가입/로그인

회원가입 시 일반유저와 보호자 유저를 선택하여 가입합니다.

- 일반유저 : 소속 경로당과 건강정보(키, 몸무게, 수축혈압)을 포함한 개인 정보 입력하여 가입
- 보호자 유저 : 모니터링을 할 일반 사용자의 전화번호와 본인의 전화번호를 통해 가입

<img src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/77571090/e99309b3-cbe6-41ce-8b8d-f87971f168ec" width="292px">

<img src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/77571090/8b8aec8c-a037-49ca-8360-b474071802ad" width="292px">

유저는 회원가입 버튼을 누르면 일반 유저, 보호자 유저 중 선택할 수 있습니다.

- 일반 유저 회원가입 화면

<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/803672f4-f263-4a16-a451-d1ba347c9759">
<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/25213819-9339-42df-929e-ada8b48204cb">
<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/319e6601-c03e-48fb-81fb-e1a1637ccafa">
<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/8e1616a8-8b77-4d9d-a60f-0614179803b8">

- 보호자 회원가입 화면

<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/4b1dda0a-e309-4220-8953-ff69af32d536">

### 2. 메인화면

- 일반 사용자의 최근 건강수치와 경로당을 확인할 수 있고, 정보 입력 버튼에 접근 가능합니다.
- 보호자 회원은 건강기록과 맞춤케어만 열람 가능합니다.

<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/3f0c542c-5cdf-4093-973a-d961ead0bfe2">
<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/fbe1a9d7-b139-4582-b0ea-7416d535ca11">


### 3. 건강입력

- 건강입력 메인
    
    혈압, 몸무게, 음식 및 운동정보를 입력할 수 있는 탭에 접근할 수 있습니다.
    
<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/a69c3f3a-91f9-447e-9846-a965719c635e">
    

- 혈압/몸무게 입력
    - 혈압과 몸무게를 입력할 수 있습니다.

<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/e00605e7-cb1d-4856-9583-160371b5b530">
<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/1f0991fc-a7a6-4859-b50a-ca2daa1d2fbe">

- 식단정보 입력
    - 8개의 카테고리를 선택하면 해당 카테고리의 음식 리스트를 볼 수 있고, 음식과 먹은 음식의 양을 입력합니다.

<img width="250" alt="스크린샷 2023-12-01 오후 5 26 51" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/58301ee3-70ff-401c-a765-ba8afcd3f5f7">
<img width="250" alt="스크린샷 2023-12-01 오후 5 23 32" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/0af7bd69-05b0-4175-a5bd-5fd401776d0d">
<img width="250" alt="스크린샷 2023-12-01 오후 5 24 42" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/eecae5cc-3315-47a3-b6e7-b27a561401e6">

- 운동 입력
    - 음식 입력과 UI 동일

### 4. 건강기록

- 사용자의 측정한 몸무게, 혈압 수치와 운동 소모 칼로리를 표 형태로 보여주며, 최근에 먹은 음식을 확인할 수 있습니다.


<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/da4fb841-172c-4fda-abb9-7cb771c752b5">

### 5. 맞춤케어

- 사용자의 식단 기록과 운동 기록을 바탕으로 맞춤 식단과 운동을 제공합니다.


<img width="292" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/cd021039-8d65-4241-927a-99d6d75d0647">

### 6. 커뮤니티

- 경로당 내 공지를 통해 경로당의 소식을 알 수 있습니다.
- 경로당 내 관리자는 경로당 공지를 등록할 수 있습니다.
- 이번 달 운동 랭킹과 혈압 측정 랭킹을 볼 수 있습니다.


<img width="250" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/8250576b-bf16-4cdc-ada0-9c86a40fffac">
<img width="250" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/4dfa3b23-9b62-4216-96cc-56d0da8ca996">
<img width="250" src="https://github.com/CSID-DGU/2023-2-SCS4031-01-Capsaicin/assets/101270528/72bc2c1d-a3da-4883-a720-254a5a206f1c">


<br>

## **✨ Expected Outcomes**

[사용자 측면]

- 건강 상태 파악 가능 :본인의 건강 상태를 더 주의깊게 관찰 가능
- 개인 맟줌형 건강 관리 : 주기적으로 입력받은 식단, 운동 정보를 토대로 사용자 선호도 기반 식단 추천 서비스 제공

[보호자 측면]

- 사용자 건강 모니터링 : 사용자의 건강 상태 실시간 모니터링 가능 및 일상 생활에서의 적당한 조언과 지원 가능

<br>

## 📍 Commit Convention

태그: 설명

| 태그 이름 | 설명 |
| --- | --- |
| Feat | 새로운 기능 추가 |
| Fix | 버그 수정 |
| Design | CSS 등 사용자 UI 디자인 변경 |
| Comment | 필요한 경우 주석 추가 및 변경 |
| Test | 테스트 추가 |
| Rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 |
| Remove | 파일을 삭제하는 작업만 수행하는 경우 |

<br>

## 🗂 Folder Architecture

### FE

**|-- api => 프로젝트에서 사용할 API와 통신하기 위한 모듈들을 관리하는 디렉토리**

**|-- assets => 프로젝트에 사용될 폰트, 이미지 등의 정적 자원을 보관하는 디렉토리**

**|-- coponents => 재사용 가능한 공통 컴포넌트들을 모아둔 디렉토리**

**|-- node_modules => 프로젝트에 사용된 패키지들이 설치되는 디렉토리**

**|-- pages => React Router 등을 사용하여 페이지를 관리하는 디렉토리**

**|-- public => 정적 파일들을 저장하는 디렉토리**

**|-- src => 주요 소스 코드가 위치하는 디렉토리(컴포넌트, 스타일, 로직 등이 여기에 포함)**

**|-- store => Redux를 사용하여 상태를 관리하는데 필요한 액션, 리듀서 등을 모아둔 디렉토리**

### BE

**|-- accounts => 사용자 정보 관리**

**|-- backend => 프로젝트 설정 및 app 관리**

**|-- main => Api 관리**

<br>

## 🤝 Team Member

| 팀장 | -- | -- | -- |
| --- | --- | --- | --- |
| 신승원 | 곽호은 | 정민경 | 한규민 |
| AI | FE | BE | FE |
| 산업시스템공학과 | 경영정보학과 | 화공생물공학과 | 산업시스템공학과 |
| 2018112481 | 2020111571 | 2019112294 | 2018112478 |

<br>

## **👷‍♀️ Jobs**

**신승원 : 음식 추천 AI 및 데이터셋 구성**

**곽호은 : 인프라 구축, 건강 기록 및 맞춤 케어 구현**

**정민경 : Rest API 개발 및 데이터베이스 관리**

**한규민 : 음식 입력 및 조회, 운동 입력 구현**

# Artique - Frontend

(시연영상) https://www.youtube.com/watch?v=1oq2PZqNL2s

Next Art의 프론트엔드 부분입니다. 이 부분은 사용자와 작품이 상호작용하며 감상할 수 있는 고급 개인화된 웹 인터페이스를 제공합니다.
<img width="1086" height="442" alt="image" src="https://github.com/user-attachments/assets/efa4306c-db7f-4513-8fab-b6912a709c29" />

<img width="1104" height="532" alt="image" src="https://github.com/user-attachments/assets/e11a2a26-58b4-423c-bc5d-0a67bbdb468e" />

<img width="1081" height="434" alt="image" src="https://github.com/user-attachments/assets/0e7f3099-4fbd-40b3-b5f4-cedb6e750fe9" />

<img width="1899" height="848" alt="image" src="https://github.com/user-attachments/assets/39aefeff-1f88-4221-98a5-7b86ba858ba6" />

<img width="1919" height="833" alt="image" src="https://github.com/user-attachments/assets/20dac2b2-227e-4e6d-b922-eedaf7cd2d6d" />

<img width="1077" height="407" alt="image" src="https://github.com/user-attachments/assets/2ff54739-be84-4cc3-b701-61345111ff6f" />

<img width="1919" height="760" alt="image" src="https://github.com/user-attachments/assets/ff0d0e16-a474-4db6-9074-7fef314d04f8" />

# 🎨 Artique

**For more Interactive Art Exhibition Experience**

> **Artique**는 관람객에게 몰입을 가능케 하는 공감각적 경험을 제공하는  
> 차세대 **인터랙티브 아트 전시 플랫폼**입니다.  
> 작가와 관객, 과거와 현재를 이어주는 새로운 예술 경험을 제안합니다.

---

## 🚀 프로젝트 배경
- 기존 전시회의 Pain Point:
  - 관람객과 예술작품 간 상호작용 부족
  - 도슨트 해설은 정보 나열식으로 단조로움
- Artique의 솔루션:
  - **AI 페르소나 기반 인터랙티브 경험**
  - 몰입형 공감각적 체험 제공
  - 관객 참여와 반응을 통한 새로운 전시 문화 창출

---

## ✨ 주요 기능
- **AI 페르소나 전시**
  - 유명 작가 페르소나: 다국적·다시대 예술가를 AI로 재현
  - 신생 작가 페르소나: 관람객과 소통하며 반응을 수집
- **확장성**
  - AR / VR 전시 경험 제공 예정
- **관람객 참여 강화**
  - 단순 감상이 아닌 쌍방향 소통 중심
  - 관람객별 개인화된 대화내용을 바탕으로 한 "스냅샷 사진" 증정(QR코드로 다운로드 가능)

---

## 🛠 기술 스택
- **Front-End**  
  React, AI / libraries  

- **Back-End**  
  Node.js, Express (예시 — 상세 기술 스택을 여기에 추가 가능)  

---

## 👥 팀 구성
- **Front-End**: 김예락, 김혜미  
- **Back-End**: 강민선, 조준범  
- **Leader**: 박상혁  

---

## 📽 시연 영상
[▶ YouTube Demo](https://www.youtube.com/watch?v=2VN1m3QgCdE)

---

## 🔮 향후 방향
- AI 페르소나 고도화
- AR/VR 확장 및 새로운 인터랙션 제공
- 전시회별 맞춤형 큐레이션 기능 추가


## 설치 및 실행

1. 의존성 설치:

   ```bash
   npm install
   ```

2. 로컬 개발 서버 시작:

   ```bash
   npm run start
   ```

## 사용된 주요 기술

React: 사용자 인터페이스(UI)를 동적으로 생성하는 데 사용됩니다.

OpenAI: GPT 모델을 활용하여 작품에 대한 스토리텔링과 사용자와의 대화를 처리합니다.

Naver AI: 한국어 음성 인식 및 처리를 지원합니다.

TTS (Text-to-Speech): AI-generated 텍스트를 음성으로 변환하여, 사용자에게 더욱 몰입감 있는 경험을 제공합니다.

## 주요 기능

대화형 스토리텔링: 작품과의 상호작용을 통해 실시간으로 이야기를 생성하고, 사용자가 작품을 감상하면서 참여할 수 있습니다.

음성 인식: 사용자가 작품에 대해 질문하거나 답변할 때 음성 인식 기술을 통해 실시간으로 반응합니다.

개인화된 콘텐츠 생성: 사용자가 작품을 감상한 후, 자신만의 요약이나 키워드를 기반으로 한 개인화된 콘텐츠를 다운로드할 수 있는 기능을 제공합니다.

## 환경 변수 설정

.env 파일에 다음과 같은 환경 변수 설정이 필요합니다.

REACT_APP_NAVER_API_KEY_ID

REACT_APP_NAVER_API_KEY

REACT_APP_OPENAI_API_KEY

REACT_APP_BACKEND_URL


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


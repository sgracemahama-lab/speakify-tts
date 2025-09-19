# Speakify – Text-to-Speech Capstone Project

<<<<<<< HEAD
**Live Demo:** [Speakify on GitHub Pages](https://YourUsername.github.io/YourRepoName/)

## Overview

Speakify is a fun and interactive **Text-to-Speech (TTS) web app** that converts typed text into natural-sounding speech. It supports multiple languages and voices, with a lively frontend featuring emojis and animations.

This project is a **capstone for cloud computing and frontend development**, integrating **AWS Lambda** for backend TTS processing and **GitHub Pages** for hosting the frontend.

---

## Features

- Multi-language support (e.g., English US, French)  
- Multiple voice options  
- Animated avatars and emojis that react while speaking or typing  
- Interactive UI with glow effects, stylish fonts, and a vibey welcome message  
- Instant audio playback through AWS Lambda backend  
- Hosted live on GitHub Pages

---

## Technologies Used

- Frontend: HTML, CSS, JavaScript  
- Styling & Animations: TailwindCSS, CSS animations  
- Backend: AWS Lambda, Amazon Polly via API Gateway  
- Hosting: GitHub Pages  

---

## Installation / Run Locally

1. Clone the repo:  
```bash
git clone https://github.com/sgracemahama-lab/speakify-tts.git

Open index.html in a browser.

The frontend fetches audio from the live AWS Lambda backend, so no additional backend setup is required.


How It Works

User types text into the Speakify input box.

Click GENERATE to send text to the AWS Lambda TTS function.

Lambda uses Amazon Polly to generate audio.

Frontend receives the audio (base64), converts it to a playable format, and plays it.

Animated emojis/avatar react in real time.


Author

Grace Sikeina Mahama
Cloud Computing & Frontend Developer
https://github.com/sgracemahama-lab


---

All you need to do now:  

1. Replace `YourUsername` and `YourRepoName` with your GitHub info.  
2. Save as `README.md` in the root of your repo.  
3. Push to GitHub:  

```bash
git add README.md
git commit -m "Add README for Speakify capstone"
git push
=======
Author: Grace Sikeina Mahama
Date: 18th SEPT,2025

Overview

Speakify is a serverless TTS web application that converts user-input text into natural-sounding speech. It supports multiple languages and voices, interactive emojis, and a responsive, engaging interface.

Features

Real-time speech generation using AWS Polly

Multiple voices and languages (English US, French, etc.)

Animated emojis that respond to speech generation

Downloadable audio files

Responsive and stylish interface built with React + Tailwind

Architecture
Frontend (React + Tailwind)
        |
        v
API Gateway (CORS enabled)
        |
        v
Lambda Function (AWS Polly TTS)
        |
        v
Audio streamed to browser

Installation & Running

Backend (AWS Lambda + API Gateway via Terraform)

cd terraform
terraform init
terraform apply


Frontend (React + Tailwind)

cd tts-frontend
npm install
npm run dev


Access frontend at http://localhost:5173

Production Build

npm run build

Deployment Notes

Ensure CORS is enabled in API Gateway.

Update frontend API_URL to match API Gateway endpoint.

Zip Lambda function for manual upload if needed.

Project Phases

Phase 1: Infrastructure foundation – Terraform template, Lambda, API Gateway, IAM roles.
Phase 2: Backend logic – Lambda function, AWS Polly TTS, error handling, CORS.
Phase 3: Frontend – React interface, emojis, responsive layout, voice/language selection.
Phase 4: Integration & Security – API security, input validation, least privilege IAM.
Phase 5: Deployment & Optimization – GitHub Pages, automated deployment via Terraform, cost and performance optimizations.

Deliverables

GitHub repository with frontend, Lambda, Terraform template, and README

Architecture diagram

Lambda function code

Live demo URL**Live Demo:** [Speakify on GitHub Pages](https://sgracemahama-lambda.github.io/speakify-tts/)
>>>>>>> 4940253510801a5e7d13dd38a1716d1c8db8808b

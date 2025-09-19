# Speakify – Text-to-Speech Capstone Project

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

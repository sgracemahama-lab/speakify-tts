# Speakify – Text-to-Speech Capstone Project

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

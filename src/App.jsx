
import { useState, useEffect } from "react";
import axios from "axios";

// Replace with your API Gateway endpoint
const API_URL = "https://2555imwyy8.execute-api.us-east-1.amazonaws.com/speak";

export default function App() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("Joanna");
  const [language, setLanguage] = useState("en-US");
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const voices = [
    { name: "Joanna", lang: "en-US", avatar: "👩🏻" },
    { name: "Matthew", lang: "en-US", avatar: "👨🏻" },
    { name: "Lucia", lang: "es-ES", avatar: "👩🏽" },
    { name: "Hans", lang: "de-DE", avatar: "👨🏼" },
  ];

  const handleSpeak = async () => {
    if (!text) return;
    setLoading(true);
    setSpeaking(true);

    try {
      const response = await axios.post(API_URL, { text, voice, language });
      const audioBase64 = response.data.audio;
      const audioBlob = new Blob(
        [Uint8Array.from(atob(audioBase64), c => c.charCodeAt(0))],
        { type: "audio/mp3" }
      );
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong with TTS.");
    }

    setLoading(false);
  };

  // Stop speaking animation when audio finishes
  useEffect(() => {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    audio.play();
    audio.onended = () => setSpeaking(false);
  }, [audioUrl]);

  const currentVoice = voices.find(v => v.name === voice);
  const currentAvatar = speaking ? "🗣️" : currentVoice?.avatar || "🎤";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-200 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-indigo-700">Speakify</h1>

        <div className="text-center text-7xl mb-6 animate-bounce">
          {currentAvatar}
        </div>

        <textarea
          className="w-full border-2 border-indigo-300 rounded-xl p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows="4"
          placeholder="Type something to speak..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex gap-4 mb-4 w-full">
          <select
            className="flex-1 border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={voice}
            onChange={(e) => setVoice(e.target.value)}
          >
            {voices.map((v) => (
              <option key={v.name} value={v.name}>
                {v.name} ({v.lang})
              </option>
            ))}
          </select>

          <select
            className="flex-1 border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {[...new Set(voices.map(v => v.lang))].map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        <button
          className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 disabled:bg-gray-400 transition-all"
          onClick={handleSpeak}
          disabled={loading || !text}
        >
          {loading ? "Generating..." : "Speak"}
        </button>

        {audioUrl && (
          <div className="mt-6 text-center w-full">
            <audio controls src={audioUrl} className="w-full rounded-xl" />
          </div>
        )}
      </div>
    </div>
  );
}

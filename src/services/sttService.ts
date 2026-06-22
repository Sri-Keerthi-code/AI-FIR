import { SarvamAIClient } from "sarvamai";

const client = new SarvamAIClient({
  apiSubscriptionKey: import.meta.env.VITE_SARVAM_API_KEY,
});
let mediaRecorder: MediaRecorder;
let audioChunks: Blob[] = [];

export async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
  });

  audioChunks = [];

  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };

  mediaRecorder.start();

  alert("Recording Started");
}

export function stopRecording() {
  return new Promise<Blob>((resolve) => {
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, {
        type: "audio/webm",
      });

      alert("Recording Stopped");

      resolve(audioBlob);
    };

    mediaRecorder.stop();
  });
}
export function blobToFile(blob: Blob) {
  return new File(
    [blob],
    "recording.webm",
    {
      type: "audio/webm",
    }
  );
}
export async function transcribeAudio(file: File) {
  const response = await client.speechToText.transcribe({
    file,
    model: "saaras:v3",
    mode: "transcribe",
  });

  console.log("TRANSCRIPT:", response.transcript);

  return response.transcript;
}
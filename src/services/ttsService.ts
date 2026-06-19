import { SarvamAIClient } from "sarvamai";

const client = new SarvamAIClient({
  apiSubscriptionKey: "sk_sbgzpqgi_9GDP7qfoaa83vcDdSYPxjO6b",
});

export async function speakText(text: string) {
  const response = await client.textToSpeech.convert({
    text,
    model: "bulbul:v3",
    speaker: "shubh",
    target_language_code: "te-IN",
  });

  console.log("SARVAM RESPONSE:", response);

  const audioBase64 = response.audios[0];

  const audio = new Audio(
    `data:audio/wav;base64,${audioBase64}`
  );

  await audio.play();
}
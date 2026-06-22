import { GoogleGenerativeAI } from "@google/generative-ai";
import firData from "../data/firData";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export async function generateFirSummary() {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an expert police FIR drafting assistant.

Convert the following victim statement into a professional FIR summary in English.

Name:
${firData.name}

Phone:
${firData.phone}

Address:
${firData.address}

Incident Location:
${firData.location}

Incident Date:
${firData.date}

Incident Details:
${firData.incidentDetails}

People Involved:
${firData.peopleInvolved}

Witnesses:
${firData.witnesses}

Damage:
${firData.damage}

Additional Information:
${firData.additionalInfo}

Requirements:
- Write in formal police-report style.
- Convert Telugu information into English.
- Produce a concise FIR summary.
- Do not use bullet points.
- Return only the FIR summary.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}
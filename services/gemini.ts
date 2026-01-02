
import { GoogleGenAI } from "@google/genai";

// Guideline: Use process.env.API_KEY directly when initializing.
export const getGeminiResponse = async (prompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  // Guideline: Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.parts[0].text }] })),
      { role: "user", parts: [{ text: prompt }] }
    ],
    config: {
      systemInstruction: "You are the UST Baseball AI Scout. You are an expert in baseball mechanics, training drills, and youth development. Be professional, encouraging, and focused on baseball excellence. Provide specific actionable advice for young athletes.",
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
    }
  });

  // Guideline: Use .text property (not a method) to access the generated content.
  return response.text || "I'm sorry, I couldn't process that request.";
};

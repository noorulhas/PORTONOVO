
import { GoogleGenAI } from "@google/genai";
import type { Person } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function getInsightsFromData(people: Person[]): Promise<string> {
    if (!process.env.API_KEY) {
        throw new Error("API key is not configured.");
    }
    
    if(people.length === 0) {
        return "No data available to analyze. Please add some people to the dataset.";
    }

    const dataSummary = JSON.stringify(people.map(({ id, ...rest }) => rest), null, 2);

    const prompt = `
        You are a senior urban data analyst. Based on the following JSON data representing a sample of a city's population, provide a brief, insightful analysis.
        
        Your analysis should be concise and easy to read. Please cover the following points in bullet points:
        - A general overview of the demographics.
        - Potential strengths of this demographic profile (e.g., a strong workforce in a particular sector).
        - Potential challenges or areas that might need attention (e.g., an aging population, lack of diversity in job sectors).
        - A concluding sentence summarizing the overall profile.
        
        Do not just repeat the data. Provide actual analysis and interpretation. Keep the entire response under 150 words.

        Here is the data:
        ${dataSummary}
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Gemini API call failed:", error);
        throw new Error("Failed to communicate with the Gemini API.");
    }
}

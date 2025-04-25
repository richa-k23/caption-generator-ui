
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent";

interface GeminiResponse {
  caption: string;
}

export const generateCaption = async (
  platform: string,
  topic: string,
  writingStyle: string,
  apiKey: string
): Promise<string> => {
  try {
    // Prepare the prompt for Gemini API
    const prompt = `Generate a caption for a ${platform} post about ${topic}. 
    The writing style should be ${writingStyle}.
    The caption should be appropriate for ${platform}'s audience and format.
    Include relevant emojis where appropriate.
    Keep it concise and engaging.`;

    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.candidates[0].content.parts[0].text;
    
    return generatedText || "Failed to generate a caption. Please try again.";
  } catch (error) {
    console.error("Error generating caption:", error);
    return "Error: Failed to connect to the Gemini API. Please check your API key and try again.";
  }
};

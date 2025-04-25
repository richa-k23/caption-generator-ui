
import { useState, useEffect } from "react";

export const useApiKey = () => {
  const [apiKey, setApiKey] = useState<string>(() => {
    return localStorage.getItem("gemini_api_key") || "";
  });
  
  const [showApiKeyInput, setShowApiKeyInput] = useState<boolean>(!apiKey);

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem("gemini_api_key", apiKey);
    }
  }, [apiKey]);

  const handleApiKeySubmit = (key: string) => {
    setApiKey(key);
    setShowApiKeyInput(false);
  };

  const resetApiKey = () => {
    localStorage.removeItem("gemini_api_key");
    setApiKey("");
    setShowApiKeyInput(true);
  };

  return {
    apiKey,
    showApiKeyInput,
    handleApiKeySubmit,
    resetApiKey,
  };
};

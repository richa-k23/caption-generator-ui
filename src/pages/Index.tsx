
import { useState } from "react";
import PlatformDropdown from "../components/PlatformDropdown";
import TopicInput from "../components/TopicInput";
import WritingStyleDropdown from "../components/WritingStyleDropdown";
import GenerateButton from "../components/GenerateButton";
import CaptionDisplay from "../components/CaptionDisplay";
import ApiKeyModal from "../components/ApiKeyModal";
import { useApiKey } from "../hooks/useApiKey";
import { generateCaption } from "../services/gemini";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const [platform, setPlatform] = useState("");
  const [topic, setTopic] = useState("");
  const [writingStyle, setWritingStyle] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { apiKey, showApiKeyInput, handleApiKeySubmit, resetApiKey } = useApiKey();

  const handleGenerateCaption = async () => {
    if (!platform) {
      toast.error("Please select a platform");
      return;
    }
    
    if (!topic) {
      toast.error("Please enter a topic");
      return;
    }
    
    if (!writingStyle) {
      toast.error("Please select a writing style");
      return;
    }
    
    if (!apiKey) {
      toast.error("Please enter your Gemini API key");
      return;
    }

    setLoading(true);
    setCaption("");

    // Simulate loading state for at least 1 second as required
    const startTime = Date.now();
    
    try {
      const result = await generateCaption(platform, topic, writingStyle, apiKey);
      
      // Calculate how much time has elapsed
      const elapsedTime = Date.now() - startTime;
      
      // If less than 1 second has passed, wait until it's been at least 1 second
      if (elapsedTime < 1000) {
        await new Promise(resolve => setTimeout(resolve, 1000 - elapsedTime));
      }
      
      setCaption(result);
      toast.success("Caption generated!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to generate caption. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-purple/30 to-white">
      <div className="container mx-auto py-10 px-4 sm:px-6 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">Caption Generator</h1>
          <p className="text-gray-600">Generate engaging captions for your social media posts</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-6">
              <PlatformDropdown onPlatformSelect={setPlatform} value={platform} />
              <TopicInput onTopicChange={setTopic} value={topic} />
              <WritingStyleDropdown onStyleSelect={setWritingStyle} value={writingStyle} />
              <GenerateButton onClick={handleGenerateCaption} loading={loading} />
            </div>
            
            {apiKey && (
              <div className="mt-4 text-right">
                <Button 
                  variant="link" 
                  onClick={resetApiKey} 
                  className="text-xs text-gray-500"
                >
                  Reset API Key
                </Button>
              </div>
            )}
          </div>
          
          <div>
            <CaptionDisplay 
              caption={caption} 
              loading={loading}
              platform={platform}
              style={writingStyle}
              topic={topic}
            />
          </div>
        </div>
        
        <footer className="text-center mt-16 text-gray-500 text-sm">
          <p>Built with React, Vite, and Tailwind CSS - Powered by Gemini API</p>
        </footer>
      </div>
      
      <ApiKeyModal
        open={showApiKeyInput}
        onSubmit={handleApiKeySubmit}
      />
    </div>
  );
};

export default Index;
